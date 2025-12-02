// components/classe/ClassesList.tsx
"use client";

import React from "react";
import ClassCard from "./ClassCard";

type Class = {
  name: string;
  teacher: string;
  studentsCount: number;
  classroom: string;
  timetable: string;
};

type ClassesListProps = {
  classes: Class[];
};

export default function ClassesList({ classes }: ClassesListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {classes.map((cls, index) => (
        <ClassCard
          key={index}
          name={cls.name}
          teacher={cls.teacher}
          studentsCount={cls.studentsCount}
          classroom={cls.classroom}
          timetable={cls.timetable}
        />
      ))}
    </div>
  );
}
