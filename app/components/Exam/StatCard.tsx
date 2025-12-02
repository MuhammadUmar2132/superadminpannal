interface StatCardProps {
  title: string;
  value: string | number;
  color: string;
}

export default function StatCard({ title, value, color }: StatCardProps) {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white border">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className={`text-3xl font-bold mt-2 ${color}`}>{value}</h3>
    </div>
  );
}
