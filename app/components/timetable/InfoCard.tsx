import { Calendar } from "lucide-react";

export default function InfoCard() {
  return (
    <div className="bg-white border shadow-xl rounded-xl p-10 w-full text-center mt-10">
      <Calendar size={40} className="mx-auto text-purple-600" />

      <h2 className="text-3xl font-bold text-purple-600 mt-4">
        Perfect Timetable Running Since Day 1
      </h2>

      <p className="text-gray-500 mt-1">
        No Manual Adjustments • Teachers Love It • Parents Happy
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow">
          Download Master Timetable (PDF)
        </button>

        <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-xl shadow">
          View Change Log
        </button>
      </div>
    </div>
  );
}
