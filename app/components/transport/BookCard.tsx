"use client";

type Props = {
  route: string;
  bus: string;
  students: number;
  driver: string;
  active?: boolean;
};

export default function RouteCard({ route, bus, students, driver, active }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-orange-600 font-bold">{route}</h3>
        {active && (
          <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
            Active
          </span>
        )}
      </div>

      {/* Details */}
      <div className="text-sm text-gray-700">
        <p className="mb-1"><strong>Bus: </strong>{bus}</p>
        <p className="mb-1"><strong>Students: </strong>{students}</p>
        <p className="mb-3"><strong>Driver: </strong>{driver}</p>
      </div>

      {/* Button */}
      <button className="w-full bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition">
        View Route Map
      </button>
    </div>
  );
}
