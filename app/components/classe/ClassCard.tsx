// components/classe/ClassCard.tsx
"use client";

import React from "react";

type ClassCardProps = {
  name: string;
  teacher: string;
  studentsCount: number;
  classroom: string;
  timetable: string; // e.g., "Mon-Fri: 8am - 2pm"
};

export default function ClassCard({ name, teacher, studentsCount, classroom, timetable }: ClassCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 cursor-pointer">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">Teacher: {teacher}</p>
      <p className="text-gray-600 mb-1">Students: {studentsCount}</p>
      <p className="text-gray-600 mb-1">Classroom: {classroom}</p>
      <p className="text-gray-600">Timetable: {timetable}</p>
    </div>
  );
}
