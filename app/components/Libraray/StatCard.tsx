import React from "react";


type Props = {
title: string;
value: string | number;
color?: string;
};


export default function StatCard({ title, value, color }: Props) {
return (
<div className="p-6 rounded-2xl shadow-md bg-white border w-full">
<p className="text-gray-600 text-sm font-medium">{title}</p>
<h2 className={`text-3xl font-bold mt-1 ${color}`}>{value}</h2>
</div>
);
}