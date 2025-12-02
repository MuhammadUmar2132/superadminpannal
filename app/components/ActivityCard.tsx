import React from "react";

export default function ActivityCard() {
  return (
    <div
      className="
        bg-white/40 backdrop-blur-lg 
        p-5 rounded-2xl 
        shadow-lg border border-cyan-200
        hover:shadow-[0_0_20px_#22d3ee80]
        transition-all duration-300
      "
    >
      <h3 className="font-semibold mb-3 text-cyan-700 drop-shadow-sm">
        Recent Activity
      </h3>

      <ul className="space-y-2 text-sm text-gray-700">
        <li className="hover:text-cyan-600 transition">• User John D. enrolled in “History I”</li>
        <li className="hover:text-cyan-600 transition">• Server updated to v3.3</li>
        <li className="hover:text-cyan-600 transition">• Payment processed for “Math II”</li>
      </ul>
    </div>
  );
}
