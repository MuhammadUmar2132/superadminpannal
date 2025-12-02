// app/page.tsx
"use client";

import ClassesList from "../components/classe/ClassesList";
import Sidebar from "../components/Sidebar";

export default function HomePage() {
  const mockClasses = [
    { name: "Class 7A", teacher: "Mrs. Smith", studentsCount: 30, classroom: "Room 101", timetable: "Mon-Fri: 8am - 2pm" },
    { name: "Class 7B", teacher: "Mr. Johnson", studentsCount: 28, classroom: "Room 102", timetable: "Mon-Fri: 9am - 3pm" },
    { name: "Class 7C", teacher: "Ms. Williams", studentsCount: 32, classroom: "Room 103", timetable: "Mon-Fri: 8am - 2pm" },
    { name: "Class 7D", teacher: "Mr. Brown", studentsCount: 29, classroom: "Room 104", timetable: "Mon-Fri: 10am - 4pm" },
    { name: "Class 7E", teacher: "Mrs. Davis", studentsCount: 31, classroom: "Room 105", timetable: "Mon-Fri: 8am - 2pm" },
    { name: "Class 7F", teacher: "Ms. Miller", studentsCount: 27, classroom: "Room 106", timetable: "Mon-Fri: 9am - 3pm" },
    { name: "Class 7G", teacher: "Mr. Wilson", studentsCount: 33, classroom: "Room 107", timetable: "Mon-Fri: 8am - 2pm" },
  ];

  return (
    <div className="flex min-h-screen bg-linear-to-br from-white via-gray-100 to-white/80">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-gray-800 my-6">Classes - Grade 7</h1>
        <ClassesList classes={mockClasses} />
      </div>
    </div>
  );
}
