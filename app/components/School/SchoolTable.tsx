"use client";

import { useState } from "react";
import Button from "./Button";

interface School {
  name: string;
  city: string;
  email: string;
  principal: string;
  phone: string;
}

interface Props {
  schools: School[];
  onEdit: (index: number, data: School) => void;
  onDelete: (index: number) => void;
}

export default function SchoolTable({ schools, onEdit, onDelete }: Props) {
  const [search, setSearch] = useState("");

  // Filter schools by name or city
  const filteredSchools = schools.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white/70 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/40">
      {/* Search Bar */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by school or city..."
          className="p-2 w-full md:w-1/3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-600 border-b border-gray-300">
            <th className="p-3">School Name</th>
            <th className="p-3">City</th>
            <th className="p-3">Email</th>
            <th className="p-3">Principal</th>
            <th className="p-3">Phone Number</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredSchools.map((school, i) => (
            <tr
              key={i}
              className="border-b border-gray-200 hover:bg-gray-100 transition"
            >
              <td className="p-3">{school.name}</td>
              <td className="p-3">{school.city}</td>
              <td className="p-3">{school.email}</td>
              <td className="p-3">{school.principal}</td>
              <td className="p-3">{school.phone}</td>
              <td className="p-3 flex gap-2">
                <Button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white"
                  onClick={() => onEdit(i, school)}
                >
                  Edit
                </Button>
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => onDelete(i)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
