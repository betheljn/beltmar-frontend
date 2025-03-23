"use client";
import { motion } from "framer-motion";

export default function StaggeredFadeIn({ children, delay = 0.15 }) {
  return (
    <>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * delay }}
              viewport={{ once: true }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </>
  );
}

