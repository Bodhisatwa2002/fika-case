'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const computedStyle = hoveredElement
        ? window.getComputedStyle(hoveredElement).cursor
        : "auto";
      setIsPointer(computedStyle === "pointer");
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousemove", updateCursorType);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousemove", updateCursorType);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [position.x, position.y]);

  return (
    <>
      <style jsx global>{`
        html,
        body {
          cursor: none;
        }
        a,
        button,
        [role="button"],
        input[type="submit"],
        input[type="button"],
        input[type="reset"] {
          cursor: none;
        }
      `}</style>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          x: { type: "spring", stiffness: 800, damping: 35 },
          y: { type: "spring", stiffness: 800, damping: 35 },
          opacity: { duration: 0.15 },
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="relative h-4 w-4 rounded-full"
          animate={{
            scale: isPointer ? 1.2 : isClicking ? 0.8 : 1,
            borderWidth: isPointer ? 1.5 : 1,
          }}
          initial={{ scale: 1 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md border border-white/20"
            animate={{
              scale: isPointer ? 1.5 : 1,
            }}
          />

          {/* Inner dot */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
            animate={{
              scale: isPointer ? 0.5 : isClicking ? 1.5 : 1,
              opacity: isPointer ? 0.8 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
