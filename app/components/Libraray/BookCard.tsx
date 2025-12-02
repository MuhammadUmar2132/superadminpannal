import React from "react";


type BookProps = {
title: string;
available: number;
};


export function BookCard({ title, available }: BookProps) {
return (
<div className="p-4 bg-white rounded-xl shadow border w-48 flex flex-col items-center">
<div className="w-20 h-28 bg-teal-200 rounded-md" />
<h4 className="mt-3 font-semibold text-gray-800 text-center">{title}</h4>
<span className="mt-1 text-xs bg-black text-white px-3 py-1 rounded-full">Available: {available}</span>
</div>
);
}