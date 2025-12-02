"use client";

import Sidebar from "../components/Sidebar";

import StatCard from "../components/transport/StatCard";
import { ActionButton } from "../components/transport/ActionButton"; // ✅ FIXED
import RouteCard from "../components/transport/RouteCard";

export default function TransportDashboard() {
  const stats = [
    { title: "Active Routes", value: 32, color: "orange" },
    { title: "Buses Running", value: 48, color: "green" },
    { title: "Students", value: "1,480", color: "blue" },
    { title: "Drivers", value: 52, color: "purple" },
  ];

  const actions = [
    { label: "+ Add Route", color: "bg-orange-500" },
    { label: "Vehicles", color: "bg-red-500" },
    { label: "Drivers", color: "bg-purple-600" },
    { label: "Assign Students", color: "bg-green-600" },
  ];

  const routes = [
    {
      route: "R-01 Dwarka",
      bus: "DL-1PC-4587",
      students: 46,
      driver: "Rajesh Kumar",
      active: true,
    },
    {
      route: "R-02 Rohini",
      bus: "DL-1PC-4587",
      students: 46,
      driver: "Rajesh Kumar",
      active: true,
    },
    {
      route: "R-03 Noida Sector 62",
      bus: "DL-1PC-4587",
      students: 46,
      driver: "Rajesh Kumar",
      active: true,
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="p-6 max-w-7xl w-full mx-auto bg-gray-50 min-h-screen">

        <h1 className="text-3xl font-bold text-center text-orange-600">
          School Transport Management
        </h1>

        <p className="text-center text-gray-500 mt-2">
          32 Routes • 48 Buses • 1,480 Students
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
          {actions.map((a, i) => (
            <ActionButton key={i} {...a} />
          ))}
        </div>

        {/* Routes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {routes.map((r, i) => (
            <RouteCard key={i} {...r} />
          ))}
        </div>
      </main>
    </div>
  );
}
