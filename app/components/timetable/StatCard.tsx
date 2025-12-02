interface StatCardProps {
  title: string;
  value: string | number;
  color?: string;
  icon?: React.ReactNode;
}

export default function StatCard({ title, value, color, icon }: StatCardProps) {
  return (
    <div className="bg-white border shadow-md p-4 rounded-xl flex flex-col items-center">
      <div className="text-3xl mb-2">{icon}</div>

      <p className="text-gray-500 text-sm">{title}</p>

      <h3 className={`text-3xl font-bold mt-1 ${color}`}>{value}</h3>
    </div>
  );
}
