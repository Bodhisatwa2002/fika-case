import React from "react";
import Link from "next/link";

interface GlowLinkProps {
  to: string;
  text: string;
  colorClass?: string;
}

const GlowLink: React.FC<GlowLinkProps> = ({ to, text, colorClass }) => {
  return (
    <Link href={to} title={`Go to ${text}`} className="glow-text-container">
      <span className="glow-text">{text}</span>
    </Link>
  );
};

export default GlowLink;
