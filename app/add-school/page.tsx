"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";

export default function AddSchoolPage() {
  const router = useRouter();

  const [school, setSchool] = useState({
    name: "",
    city: "",
    email: "",
    principal: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool({ ...school, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("School Added:", school);
    // TODO: send to API
    router.push("/schools");
  };

  return (
    <div className="flex min-h-screen bg-linear-to-br from-blue-50 to-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/40">
          <h1 className="text-3xl font-bold text-gray-700 text-center mb-8 drop-shadow">
            Add School
          </h1>

          {/* Grid layout: 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="School Name"
              value={school.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-blue-300 shadow-sm"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={school.city}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-blue-300 shadow-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={school.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-blue-300 shadow-sm"
            />

            <input
              type="text"
              name="principal"
              placeholder="Principal Name"
              value={school.principal}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-blue-300 shadow-sm"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={school.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-blue-300 shadow-sm col-span-1 md:col-span-2"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              onClick={handleSubmit}
              className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-300 hover:bg-blue-700 transition"
            >
              Add School
            </button>

            <button
              onClick={() => router.push("/schools")}
              className="flex-1 py-3 rounded-xl bg-gray-300 text-gray-700 font-semibold hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
