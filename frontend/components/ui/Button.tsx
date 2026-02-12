"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  type = "button",
  onClick,
  className = "",
}) => {
  const content = (
    <button
      type={type}
      onClick={onClick}
      className={`
        group relative overflow-hidden cursor-pointer
        rounded-full border border-[var(--secondary)]
        bg-[var(--primary)]
        px-6 py-2 text-sm md:text-base
        font-semibold uppercase
        text-[var(--white)]
        transition-all duration-300
        hover:border-[var(--secondary)] cursor-pointer
        ${className}
      `}
    >
      {/* GOLD SWEEP EFFECT */}
      <span
        className="
          absolute inset-0 -translate-x-full
          bg-gradient-to-r
          from-[var(--secondary)]
          via-[#FFD88A]
          to-[var(--secondary)]
          transition-transform duration-500
          group-hover:translate-x-0
        "
      />

      {/* GLOW */}
      <span
        className="
          absolute inset-0 opacity-0 blur-xl
          bg-[var(--secondary)]/40
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* TEXT */}
      <span
        className="
          relative z-10 flex items-center justify-center gap-2
          transition-colors duration-300
          group-hover:text-black
        "
      >
        {text}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default Button;
