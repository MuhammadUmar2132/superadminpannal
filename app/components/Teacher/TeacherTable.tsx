"use client";

import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

type Teacher = {
  name: string;
  email: string;
  subject: string;
  school: string;
};

type Props = {
  teachers: Teacher[];
  onAddTeacher: () => void;
  onEditTeacher: (index: number) => void; // edit callback
  onDeleteTeacher: (index: number) => void; // delete callback
};

export default function TeacherTable({
  teachers,
  onAddTeacher,
  onEditTeacher,
  onDeleteTeacher,
}: Props) {
  return (
    <div className="bg-white/20 backdrop-blur-2xl p-6 rounded-2xl shadow-[0_0_20px_rgba(0,150,255,0.3)] border border-white/40">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-700 drop-shadow-md">Teachers</h2>
        <button
          onClick={onAddTeacher}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold
          shadow-[0_0_12px_rgba(0,150,255,0.6)]
          hover:shadow-[0_0_25px_rgba(0,150,255,0.9)]
          hover:bg-blue-700 transition-all"
        >
          <PlusCircleIcon className="w-5 h-5" />
          Add Teacher
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl shadow-[0_0_20px_rgba(0,150,255,0.2)]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-100/40 text-blue-800 border-b border-blue-300">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Subject</th>
              <th className="p-3">School</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {teachers.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-5 text-gray-600">
                  No teachers found
                </td>
              </tr>
            ) : (
              teachers.map((teacher, index) => (
                <tr
                  key={index}
                  className="border-b border-blue-200/30 hover:bg-blue-50/40 transition-all"
                >
                  <td className="p-3">{teacher.name}</td>
                  <td className="p-3">{teacher.email}</td>
                  <td className="p-3">{teacher.subject}</td>
                  <td className="p-3">{teacher.school}</td>
                  <td className="p-3 flex justify-center gap-2">
                    <button
                      onClick={() => onEditTeacher(index)}
                      className="px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteTeacher(index)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
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
