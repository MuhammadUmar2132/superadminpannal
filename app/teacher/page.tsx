"use client";

import { useState } from "react";
import TeacherTable from "../components/Teacher/TeacherTable";
import Sidebar from "../components/Sidebar"; // make sure path is correct

export default function TeacherPage() {
  const [teachers, setTeachers] = useState([
    { name: "Ali Ahmed", email: "ali@gmail.com", subject: "Math", school: "City School" },
    { name: "Sara Khan", email: "sara@gmail.com", subject: "English", school: "Beaconhouse" },
  ]);

  const handleAddTeacher = () => {
    console.log("Add Teacher Clicked");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">
        <TeacherTable teachers={teachers} onAddTeacher={handleAddTeacher} onEditTeacher={function (index: number): void {
                  throw new Error("Function not implemented.");
              } } onDeleteTeacher={function (index: number): void {
                  throw new Error("Function not implemented.");
              } } />
      </main>
    </div>
  );
}
