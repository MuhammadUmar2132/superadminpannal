import { Trophy } from "lucide-react";

export default function PassRateCard() {
  return (
    <div className="bg-white border shadow-xl rounded-xl p-10 w-full text-center mt-10">
      <Trophy size={40} className="mx-auto text-purple-600" />

      <h2 className="text-3xl font-bold text-purple-600 mt-4">
        98.7% Pass Rate This Year
      </h2>

      <p className="text-gray-500 mt-1">Highest in School History!</p>

      <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl shadow">
        Generate Annual Performance Report
      </button>
    </div>
  );
}
