"use client";

import { useEffect, useState } from "react";

export default function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (event) => {
      if (!isVisible) setIsVisible(true);
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 ease-in-out"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(22, 242, 179, 0.075), rgba(139, 92, 246, 0.05) 40%, transparent 80%)`,
      }}
    />
  );
}
