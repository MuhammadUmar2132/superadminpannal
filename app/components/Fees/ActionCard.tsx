"use client";
import React from "react";

type Props = {
  title: string;
  description?: string;
  onClick: () => void;
  glowColor?: string;
};

export default function ActionCard({ title, description, onClick, glowColor = "pink" }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-white/30 text-left hover:scale-105 transition-transform duration-300"
      style={{ boxShadow: `0 0 15px 3px ${glowColor}` }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="text-gray-500 text-sm">{description}</p>}
    </button>
  );
}
