"use client";
import React from "react";

type TableCardProps = {
  title: string;
  columns: string[];
  data: any[];
  glowColor?: string;
};

export default function TableCard({
  title,
  columns,
  data,
  glowColor = "rgba(0, 255, 255, 0.6)", // CYAN GLOW
}: TableCardProps) {
  return (
    <div
      className="
        bg-white/70 
        backdrop-blur-xl 
        rounded-2xl 
        p-5 
        shadow-xl 
        border border-cyan-300/60 
        overflow-x-auto 
        hover:scale-[1.01] 
        transition-transform 
        duration-300
      "
      style={{
        boxShadow: `0 0 20px 4px ${glowColor}`,
      }}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold mb-4 text-cyan-700">{title}</h3>

      {/* Table */}
      <table className="w-full text-left">
        <thead className="border-b border-cyan-200">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="p-3 text-cyan-600 font-medium uppercase text-sm"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="
                border-b border-gray-200 
                hover:bg-cyan-50/50 
                transition
              "
            >
              {columns.map((col, cidx) => (
                <td key={cidx} className="p-3 text-gray-700">
                  {row[col.toLowerCase().replaceAll(" ", "")]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
