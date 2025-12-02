"use client";
import Sidebar from "../components/Sidebar";
import Header from "../components/Exam/Header";
import CurrentExamCard from "../components/Exam/CurrentExamCard";
import StatCard from "../components/Exam/StatCard";
import ActionButton from "../components/Exam/ActionButton";
import PassRateCard from "../components/Exam/PassRateCard";

export default function ExaminationsPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 max-w-6xl mx-auto">
        <Header />

        <CurrentExamCard />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6">
          <StatCard title="Total Exams" value="12" color="text-purple-600" />
          <StatCard title="Upcoming" value="3" color="text-orange-500" />
          <StatCard title="Completed" value="9" color="text-green-600" />
          <StatCard title="Results Published" value="7" color="text-blue-500" />
          <StatCard title="Report Cards" value="6" color="text-red-600" />
          <StatCard title="Pass Rate" value="98.7%" color="text-purple-600" />
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6">
          <ActionButton label="Exam Schedule" color="bg-purple-600" />
          <ActionButton label="Create Exam" color="bg-pink-600" />
          <ActionButton label="Enter Marks" color="bg-blue-600" />
          <ActionButton label="Publish Results" color="bg-green-600" />
          <ActionButton label="View Results" color="bg-teal-600" />
          <ActionButton label="Report Cards" color="bg-red-600" />
        </div>

        <PassRateCard />
      </main>
    </div>
  );
}
