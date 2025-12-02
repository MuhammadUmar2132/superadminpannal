import React from "react";


type BtnProps = {
label: string;
color: string;
};


export function ActionButton({ label, color }: BtnProps) {
return (
<button
className={`px-6 py-3 rounded-xl text-white font-semibold ${color} hover:opacity-90 transition`}
>
{label}
</button>
);
}