"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/School/Button";
import Sidebar from "../components/Sidebar";
import SchoolTable from "../components/School/SchoolTable";

interface School {
  name: string;
  city: string;
  email: string;
  principal: string;
  phone: string;
}

export default function SchoolsPage() {
  const router = useRouter(); // initialize router
  const [schools, setSchools] = useState<School[]>([
    {
      name: "City School",
      city: "Karachi",
      email: "info@cityschool.com",
      principal: "Mr. Ahmed",
      phone: "0300-1234567",
    },
    {
      name: "Beaconhouse",
      city: "Lahore",
      email: "contact@beaconhouse.com",
      principal: "Ms. Sara",
      phone: "0321-7654321",
    },
  ]);

  const addSchool = (data: School) => setSchools([...schools, data]);

  const editSchool = (index: number, data: School) => {
    const updated = [...schools];
    updated[index] = data;
    setSchools(updated);
  };

  const deleteSchool = (index: number) => {
    const updated = [...schools];
    updated.splice(index, 1);
    setSchools(updated);
  };

  return (
    <div className="flex min-h-screen bg-linear-to-br from-blue-50 to-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-10">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Schools</h1>

          {/* Navigate to add-school page */}
          <Button onClick={() => router.push("/add-school")}>
            Add School
          </Button>
        </div>

        <SchoolTable schools={schools} onEdit={editSchool} onDelete={deleteSchool} />
      </main>
    </div>
  );
}
