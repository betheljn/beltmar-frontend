// components/StarfieldCanvas.jsx
"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function StarfieldCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 1;

    // Star geometry
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 1500;
    const positions = [];

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 1000;
      positions.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      sizeAttenuation: true,
      transparent: true,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Nebula glow
    const nebulaGeometry = new THREE.SphereGeometry(200, 32, 32);
    const nebulaMaterial = new THREE.MeshBasicMaterial({
      color: 0x4e00ff,
      transparent: true,
      opacity: 0.05,
    });
    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // Lens flare effect (simple glow)
    const flareTexture = new THREE.TextureLoader().load("/images/flare.png");
    const flareMaterial = new THREE.SpriteMaterial({ map: flareTexture, color: 0xffffff, transparent: true, opacity: 0.4 });
    const flare = new THREE.Sprite(flareMaterial);
    flare.scale.set(300, 300, 1);
    flare.position.set(0, 0, -400);
    scene.add(flare);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;
      nebula.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };    
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

