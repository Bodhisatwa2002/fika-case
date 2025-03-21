import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface MountainProps {
  side: "left" | "right";
  imgSrc: string;
  className?: string;
  style?: React.CSSProperties;
}

const Mountain: React.FC<MountainProps> = ({
  side,
  imgSrc,
  className,
  style,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screens
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint in Tailwind
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div
      className={cn(
        "absolute bottom-0 transition-transform parallax-mountain",
        // Mobile: smaller size, fixed position, no animation duration
        isMobile ? "h-[30%] duration-0" : "h-[80%] duration-700 ease-out",
        side === "left"
          ? "left-0 origin-bottom-right"
          : "right-0 origin-bottom-left",
        className
      )}
      // Only apply animation transforms on non-mobile screens
      style={isMobile ? {} : style}
    >
      <img
        src={imgSrc}
        alt={`Mountain ${side}`}
        className={cn(
          "h-full w-auto object-contain",
          // Adjust the positioning to be at the very bottom
          isMobile ? "object-bottom scale-75" : "object-bottom"
        )}
      />
    </div>
  );
};

export default Mountain;
