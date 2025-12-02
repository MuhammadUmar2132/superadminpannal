"use client";

import React, { useState } from "react";
import { Search, Plus, Edit, Trash } from "lucide-react";

type Student = {
  name: string;
  email: string;
  className: string;
  school: string;
};

type Props = {
  students: Student[];
  onAddStudent: () => void;
  onEditStudent: (index: number) => void;
  onDeleteStudent: (index: number) => void;
};

export default function StudentTable({
  students,
  onAddStudent,
  onEditStudent,
  onDeleteStudent,
}: Props) {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    Object.values(student)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="
      bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-[0_0_35px_rgba(0,150,255,0.25)]
      border border-white/40 relative
    ">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-700 tracking-wide drop-shadow-sm">
          Students
        </h2>

        <button
          onClick={onAddStudent}
          className="
            flex items-center gap-2 px-5 py-2 rounded-xl
            bg-blue-600 text-white shadow-[0_0_12px_rgba(0,150,255,0.7)]
            hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(0,150,255,1)]
            transition-all text-sm font-semibold
          "
        >
          <Plus size={18} /> Add Student
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-3 text-blue-500" size={20} />

        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full pl-10 pr-3 py-3 bg-white/40 rounded-xl shadow-inner border border-blue-200
            focus:ring-2 focus:ring-blue-400 outline-none
          "
        />
      </div>

      {/* Table */}
      <div className="
        overflow-hidden rounded-2xl border border-blue-200/40
        shadow-[0_0_20px_rgba(0,150,255,0.15)]
      ">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-100/50 text-blue-700 uppercase text-sm">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Class</th>
              <th className="p-3">School</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-6 text-gray-600 italic"
                >
                  No students found...
                </td>
              </tr>
            ) : (
              filteredStudents.map((student, index) => (
                <tr
                  key={index}
                  className="
                    border-b border-blue-200/20 
                    hover:bg-blue-50/50 transition-all
                  "
                >
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">{student.email}</td>
                  <td className="p-3">{student.className}</td>
                  <td className="p-3">{student.school}</td>

                  {/* Action Buttons */}
                  <td className="p-3 flex justify-center gap-3">
                    <button
                      onClick={() => onEditStudent(index)}
                      className="
                        p-2 bg-yellow-400 rounded-lg text-white
                        hover:bg-yellow-500 transition shadow
                      "
                    >
                      <Edit size={16} />
                    </button>

                    <button
                      onClick={() => onDeleteStudent(index)}
                      className="
                        p-2 bg-red-500 rounded-lg text-white
                        hover:bg-red-600 transition shadow
                      "
                    >
                      <Trash size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
