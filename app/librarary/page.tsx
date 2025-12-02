import React from "react";
import Sidebar from "../components/Sidebar"; // make sure your Sidebar component exists
import StatCard from "../components/Libraray/StatCard";
import { ActionButton } from "../components/Libraray/ActionButton";
import { BookCard } from "../components/Libraray/BookCard";

export default function LibraryPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700">
          Library Management
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Total Books: 12,450 • Active Members: 1,560
        </p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-10">
          <StatCard title="Total Books" value="12,450" color="text-teal-600" />
          <StatCard title="Issued Today" value="142" color="text-green-600" />
          <StatCard title="Overdue" value={18} color="text-red-500" />
          <StatCard title="Fines Collected" value="₹4,250" color="text-purple-600" />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <ActionButton label="+ Add Book" color="bg-teal-600" />
          <ActionButton label="Issue / Return" color="bg-green-600" />
          <ActionButton label="Issued to Students" color="bg-blue-600" />
          <ActionButton label="Fines" color="bg-red-500" />
        </div>

        {/* Search & Books */}
        <div className="mt-12 p-6 bg-white shadow-lg rounded-2xl border">
          <input
            type="text"
            placeholder="Search by title, author, ISBN..."
            className="w-full p-3 border rounded-xl mb-6 focus:ring-2 focus:ring-teal-400"
          />

          <div className="flex gap-6 flex-wrap justify-center">
            <BookCard title="Harry Potter" available={12} />
            <BookCard title="Science NCERT" available={12} />
            <BookCard title="Mathematics RD Sharma" available={12} />
            <BookCard title="English Grammar" available={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
