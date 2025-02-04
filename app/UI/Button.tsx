"use client";
import Link from "next/link";
import { ButtonProps } from "../types/Button"; // Adjust path as needed

export default function Button({
  href,
  text,
  icon,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href || "#"}
      onClick={(e) => {
        if (!href) e.preventDefault();
      }}
      className={`bg-gray-800 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-cyan-700 transition ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </Link>
  );
}
