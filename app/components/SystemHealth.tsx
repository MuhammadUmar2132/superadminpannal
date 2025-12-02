import React from "react";

export default function SystemHealth() {
  return (
    <div
      className="
        bg-white/40 backdrop-blur-lg 
        p-5 rounded-2xl 
        shadow-lg border border-cyan-200
        hover:shadow-[0_0_20px_#22d3ee80]
        transition-all duration-300
        w-full
      "
    >
      <h3 className="font-semibold text-cyan-700 drop-shadow-sm">
        System Health
      </h3>

      <div className="mt-3">
        <p className="text-sm text-gray-600">Server Status</p>
        <p className="text-cyan-600 font-semibold drop-shadow">
          Online
        </p>
      </div>

      <div className="mt-4">
        <p className="text-sm mb-1 text-gray-600">Resource Usage</p>

        <div className="w-full bg-cyan-100 h-2 rounded-full shadow-inner">
          <div
            className="
              bg-cyan-500 h-2 rounded-full 
              shadow-[0_0_10px_#22d3ee80]
              transition-all duration-500
            "
            style={{ width: "40%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
