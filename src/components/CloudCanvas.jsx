"use client";

import { useRef, useEffect, useState } from "react";

export default function CloudCanvas() {
  const canvasRef = useRef(null);
  const [fadeOpacity, setFadeOpacity] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const clouds = Array.from({ length: 15 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.5,
      speed: 0.2 + Math.random() * 0.5,
      size: 120 + Math.random() * 180,
      opacity: 0.2 + Math.random() * 0.3,
    }));

    const sun = {
      x: width - 100,
      y: 100,
      radius: 80,
    };

    const drawSkyGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#87ceeb");
      gradient.addColorStop(1, "#e0f7fa");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawSun = () => {
      const gradient = ctx.createRadialGradient(sun.x, sun.y, 0, sun.x, sun.y, sun.radius);
      gradient.addColorStop(0, "rgba(255, 255, 0, 0.8)");
      gradient.addColorStop(1, "rgba(255, 255, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawCloud = (cloud) => {
      const gradient = ctx.createRadialGradient(cloud.x, cloud.y, 10, cloud.x, cloud.y, cloud.size);
      gradient.addColorStop(0, `rgba(255,255,255,${cloud.opacity})`);
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cloud.x, cloud.y, cloud.size, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawBirds = () => {
      for (let i = 0; i < 5; i++) {
        const x = (Date.now() / 30 + i * 200) % width;
        const y = 60 + Math.sin((Date.now() + i * 100) / 400) * 20;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 10, y + 5);
        ctx.lineTo(x + 20, y);
        ctx.strokeStyle = "#444";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      drawSkyGradient();
      drawSun();
      clouds.forEach((cloud) => {
        cloud.x += cloud.speed;
        if (cloud.x - cloud.size > width) {
          cloud.x = -cloud.size;
          cloud.y = Math.random() * height * 0.5;
        }
        drawCloud(cloud);
      });
      drawBirds();

      // Apply fading effect for smooth transition
      if (fadeOpacity < 1) {
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - fadeOpacity})`;
        ctx.fillRect(0, 0, width, height);
        setFadeOpacity((prev) => Math.min(prev + 0.01, 1));
      }

      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      clouds.forEach((cloud) => {
        const dx = e.clientX - cloud.x;
        const dy = e.clientY - cloud.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          cloud.x += dx * 0.01;
          cloud.y += dy * 0.01;
        }
      });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      clouds.forEach((cloud, i) => {
        cloud.y += Math.sin(scrollY * 0.001 + i) * 0.3;
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    setFadeOpacity(0); // trigger fade-in on mount

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        transition: "opacity 0.8s ease-in-out",
      }}
    />
  );
}


