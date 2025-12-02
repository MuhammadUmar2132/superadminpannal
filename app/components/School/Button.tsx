"use client";

import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition ${className || "bg-blue-500 hover:bg-blue-600 text-white"}`}
    >
      {children}
    </button>
  );
}
