import { CalendarDays } from "lucide-react";

export default function CurrentExamCard() {
  return (
    <div className="bg-white shadow-lg rounded-xl w-full p-6 mt-8 border border-purple-200">
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          CURRENT EXAM
        </span>
      </div>

      <h2 className="text-xl font-semibold text-gray-700">
        Half Yearly Examination 2025
      </h2>

      <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
        <CalendarDays size={18} />
        <p>15 Dec 2025 – 22 Dec 2025</p>
        <span className="text-red-500 bg-red-100 px-3 py-1 rounded-full">
          26 Days Left
        </span>
      </div>
    </div>
  );
}
