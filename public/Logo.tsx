import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      width="36"
      height="25"
      viewBox="0 0 36 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-all duration-300 hover:opacity-80", className)}
    >
      <path
        d="M6.50101 0H20.991C23.658 0 25.821 4.83 25.821 4.83L35.481 24.15H20.991C18.324 24.15 16.161 19.32 16.161 19.32L6.50101 0Z"
        className="fill-foreground/80"
      />
      <path
        d="M0 24.149H6.168C7.415 24.149 8.426 21.891 8.426 21.891L12.944 12.857H6.776C5.529 12.857 4.518 15.115 4.518 15.115L0 24.149Z"
        className="fill-foreground/80"
      />
    </svg>
  );
};

export default Logo;
