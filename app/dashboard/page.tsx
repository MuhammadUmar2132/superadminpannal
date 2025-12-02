import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/timetable/StatCard";
import ActivityCard from "../components/ActivityCard";
import SystemHealth from "../components/SystemHealth";

export default function Dashboard() {
  return (
    <div className="flex bg-linear-to-br from-cyan-50 to-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main
        className="
          flex-1 
          min-h-screen 
          bg-white/30 
          backdrop-blur-xl 
          shadow-inner 
          border-l border-cyan-200
        "
      >
        <Navbar />

        <div className="p-6 space-y-6">

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Total Users" value="1,250" />
            <StatCard title="Active Courses" value="32" />
            <StatCard title="Pending Payments" value="$4,500" />
          </div>

          {/* Activity + System Health */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <ActivityCard />
            </div>

            <SystemHealth />
          </div>

        </div>
      </main>
    </div>
  );
}
