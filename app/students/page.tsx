"use client";

import { useState } from "react";
import StudentTable from "../components/Student/StudentTable";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/navigation";

export default function StudentsPage() {
  const router = useRouter();

  const [students, setStudents] = useState([
    { name: "Ali", email: "ali@gmail.com", className: "10-B", school: "City School" },
    { name: "Aisha", email: "aisha@yahoo.com", className: "9-A", school: "Beaconhouse" },
  ]);

  const handleAddStudent = () => {
    router.push("/add-student"); // ✅ navigate to add-student page
  };

  const handleEditStudent = (index: number) => {
    router.push(`/edit-student/${index}`); // optional: for editing
  };

  const handleDeleteStudent = (index: number) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-2 max-w-5xl mx-auto p-6">
        <StudentTable
          students={students}
          onAddStudent={handleAddStudent}
          onEditStudent={handleEditStudent}
          onDeleteStudent={handleDeleteStudent}
        />
      </div>
    </div>
  );
}
