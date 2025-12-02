import { CheckCircle } from "lucide-react";

export default function StatusCard() {
  return (
    <div className="bg-green-50 border border-green-300 shadow-md w-full p-6 rounded-xl mt-8">
      <div className="flex items-center gap-4">
        <CheckCircle className="text-green-600" size={32} />

        <div>
          <h2 className="text-xl font-semibold text-green-700">
            Timetable Active & Running
          </h2>
          <p className="text-gray-500 text-sm">
            Last Generated: 18 Nov 2025, 3:42 PM
          </p>
        </div>

        <span className="ml-auto bg-green-600 text-white text-xs px-4 py-1 rounded-full">
          ZERO CONFLICTS
        </span>
      </div>
    </div>
  );
}
