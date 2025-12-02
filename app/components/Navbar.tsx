"use client";
import React from "react";

export default function Navbar() {
  return (
    <header className="
      flex items-center justify-between 
      bg-white/40 backdrop-blur-lg 
      shadow-lg border-b border-cyan-200
      p-4 rounded-2xl
    ">
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="
          px-4 py-2 rounded-xl w-1/3
          bg-white/60 border border-cyan-300 
          text-gray-700 outline-none
          shadow-sm
          focus:border-cyan-500 
          focus:shadow-[0_0_10px_#22d3ee80]
          transition-all duration-300
        "
      />

      {/* Icons + Profile */}
      <div className="flex items-center gap-6">
        
        {/* Notification Button */}
        <button
          className="
            relative text-cyan-600 text-xl
            hover:text-cyan-700
            transition-all duration-300
            hover:scale-110
            hover:shadow-[0_0_10px_#22d3ee80]
            p-2 rounded-full
          "
        >
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full shadow-md"></span>
          🔔
        </button>

        {/* Profile Badge */}
        <div
          className="
            bg-cyan-500 text-white font-semibold 
            px-4 py-2 rounded-full 
            shadow-[0_0_10px_#22d3ee80]
            hover:shadow-[0_0_15px_#06b6d480]
            transition-all duration-300
            cursor-pointer
          "
        >
          SA
        </div>
      </div>
    </header>
  );
}
