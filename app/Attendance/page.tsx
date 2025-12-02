"use client";
import StatCard from "../components/Attendence/StatCard";
import QuickActionCard from "../components/Attendence/QuickActionCard";
import TableCard from "../components/Attendence/TableCard";
import Sidebar from "../components/Sidebar";
import { UserIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function AttendanceDashboard() {
  const stats = [
    { title: "Present Today", value: 25, icon: <CheckCircleIcon className="text-green-500" />, glowColor: "green" },
    { title: "Absent Today", value: 5, icon: <XCircleIcon className="text-red-500" />, glowColor: "red" },
    { title: "Overall Rate", value: "83%", icon: <UserIcon className="text-blue-500" />, glowColor: "blue" },
  ];

  const quickActions = [
    { title: "Mark Attendance", description: "Quickly mark today's attendance" },
    { title: "Monthly Report", description: "View absent report" },
    { title: "Top Performer", description: "See best attendance class" },
  ];

  const teacherData = [
    { name: "Mrs. Smith", attendance: "Present" },
    { name: "Mr. Johnson", attendance: "Absent" },
    { name: "Ms. Lee", attendance: "Present" },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Attendance Overview</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {quickActions.map((action, idx) => (
            <QuickActionCard
              key={idx}
              title={action.title}
              description={action.description}
              onClick={() => alert(action.title)}
            />
          ))}
        </div>

        {/* Teacher Attendance Table */}
        <TableCard
          title="Teacher Attendance"
          columns={["Name", "Attendance"]}
          data={teacherData}
          glowColor="purple"
        />
      </main>
    </div>
  );
}
