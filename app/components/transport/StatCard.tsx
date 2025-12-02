import React from "react";

interface Props {
  title: string;
  value: string | number;
  color: string;
}

export default function StatCard({ title, value, color }: Props) {
  return (
    <div className="p-6 bg-white rounded-xl shadow border text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
}
