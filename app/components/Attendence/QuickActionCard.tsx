"use client";
import React from "react";

type Props = {
  title: string;
  description?: string;
  onClick: () => void;
  glowColor?: string;
};

export default function QuickActionCard({
  title,
  description,
  onClick,
  glowColor = "rgba(0, 255, 255, 0.7)", // cyan glow
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full 
        bg-white/80 
        backdrop-blur-xl 
        rounded-2xl 
        p-5 
        shadow-lg 
        border 
        border-cyan-300/60 
        text-left 
        transition-all 
        duration-300 
        hover:scale-105 
        hover:border-cyan-400
      `}
      style={{
        boxShadow: `0 0 18px 4px ${glowColor}`,
      }}
    >
      <h3 className="text-lg font-semibold text-cyan-700">{title}</h3>

      {description && (
        <p className="text-gray-600 mt-1">{description}</p>
      )}
    </button>
  );
}
