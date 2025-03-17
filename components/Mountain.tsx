import React from "react";
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
  return (
    <div
      className={cn(
        "absolute bottom-0 h-[80%] transition-transform duration-700 ease-out parallax-mountain",
        side === "left"
          ? "left-0 origin-bottom-right"
          : "right-0 origin-bottom-left",
        className
      )}
      style={style}
    >
      <img
        src={imgSrc}
        alt={`Mountain ${side}`}
        className="h-full w-auto object-contain object-bottom"
      />
    </div>
  );
};

export default Mountain;
