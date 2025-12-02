"use client";
import React from "react";

type Props = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  glowColor?: string;
};

export default function StatCard({
  title,
  value,
  icon,
  glowColor = "rgba(0, 255, 255, 0.7)", // cyan glow
}: Props) {
  return (
    <div
      className={`
        bg-white/80 
        backdrop-blur-xl 
        rounded-2xl 
        p-6 
        shadow-xl 
        border border-cyan-300/60 
        flex items-center 
        gap-4 
        transition-all 
        duration-300 
        hover:scale-105 
        hover:border-cyan-400
      `}
      style={{
        boxShadow: `0 0 18px 4px ${glowColor}`,
      }}
    >
      {icon && <div className="text-3xl text-cyan-600">{icon}</div>}

      <div>
        <h3 className="text-cyan-700 font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
