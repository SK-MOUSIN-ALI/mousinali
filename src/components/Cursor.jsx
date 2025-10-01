"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    if (!cursor) return;

    // Show cursor on mouse enter
    const handleEnter = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power3.out" });
    };

    // Hide cursor on mouse leave
    const handleLeave = () => {
      gsap.to(cursor, { scale: 0, duration: 0.3, ease: "power3.out" });
    };

    // Move cursor smoothly
    const handleMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return <div className="custom-cursor"></div>;
}
