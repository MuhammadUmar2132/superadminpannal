"use client";
import FinanceCard from "../components/Fees/FinanceCard";
import ActionCard from "../components/Fees/ActionCard";
import PerformanceCard from "../components/Fees/PerformanceCard";
import Sidebar from "../components/Sidebar";

export default function FeesDashboard() {
  const financeStats = [
    { title: "Total Collected", value: "₹128.45 Cr", description: "87.5% of annual target", glowColor: "green" },
    { title: "Pending Fees", value: "₹18.45 Lakh", description: "47 Defaulters", glowColor: "red" },
    { title: "Today's Collection", value: "₹482,500", description: "+28% vs yesterday", glowColor: "blue" },
    { title: "Online Payments", value: "68%", description: "of total transactions", glowColor: "purple" },
  ];

  const actions = [
    { title: "Fee Structure", description: "View and edit fee structure" },
    { title: "Generate Challan", description: "Create challans for students" },
    { title: "Bulk Challans", description: "Generate multiple challans at once" },
    { title: "All Payments", description: "View all payments received" },
    { title: "Pending Fees", description: "View pending payments" },
    { title: "Daily Report", description: "View today’s collection report" },
    { title: "Monthly Report", description: "View monthly report" },
    { title: "Defaulters List", description: "List of students with pending fees" },
  ];

  const performance = [
    { title: "Outstanding Performance This Year", value: "87.5% Collection Rate", description: "Best in Last 5 Years", glowColor: "orange" },
    { title: "Export Full Report", value: "Download", description: "Export complete financial report", glowColor: "cyan" },
    { title: "View Financial Forecast", value: "Projected Growth", description: "Plan for upcoming months", glowColor: "green" },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Fees Management Dashboard</h1>
        <p className="text-gray-500 mb-6">Academic Year 2025-26 • Complete Financial Overview</p>

        {/* Finance Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {financeStats.map((stat, idx) => (
            <FinanceCard key={idx} {...stat} />
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {actions.map((action, idx) => (
            <ActionCard
              key={idx}
              title={action.title}
              description={action.description}
              onClick={() => alert(action.title)}
            />
          ))}
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performance.map((item, idx) => (
            <PerformanceCard key={idx} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
}
