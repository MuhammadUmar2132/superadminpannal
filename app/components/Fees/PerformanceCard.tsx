"use client";
import React from "react";

type Props = {
  title: string;
  value: string | number;
  description?: string;
  glowColor?: string;
};

export default function PerformanceCard({ title, value, description, glowColor = "yellow" }: Props) {
  return (
    <div
      className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 flex flex-col gap-2 hover:scale-105 transition-transform duration-300"
      style={{ boxShadow: `0 0 20px 2px ${glowColor}` }}
    >
      <h3 className="text-gray-500 font-medium">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      {description && <p className="text-gray-400 text-sm">{description}</p>}
    </div>
  );
}
