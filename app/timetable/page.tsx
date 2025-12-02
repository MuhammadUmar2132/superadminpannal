import Sidebar from "../components/Sidebar";
import Header from "../components/timetable/Header";
import StatusCard from "../components/timetable/StatusCard";
import StatCard from "../components/timetable/StatCard";
import ActionButton from "../components/timetable/ActionButton";
import InfoCard from "../components/timetable/InfoCard";

import { Users, CalendarDays, Clock, Zap } from "lucide-react";

export default function TimetablePage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="p-6 max-w-6xl flex-1">
        <Header />
        <StatusCard />

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <StatCard
            title="Classes Covered"
            value="36"
            color="text-blue-600"
            icon={<CalendarDays size={30} className="text-blue-500" />}
          />

          <StatCard
            title="Teachers Assigned"
            value="68"
            color="text-purple-600"
            icon={<Users size={30} className="text-purple-500" />}
          />

          <StatCard
            title="Weekly Periods"
            value="1560"
            color="text-orange-600"
            icon={<Clock size={30} className="text-orange-500" />}
          />

          <StatCard
            title="Auto Generation"
            value="AI Powered"
            color="text-green-600"
            icon={<Zap size={30} className="text-green-500" />}
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
          <ActionButton label="View Class Timetable" color="bg-blue-600" />
          <ActionButton label="Teacher Schedules" color="bg-purple-600" />
          <ActionButton label="Auto Generate New" color="bg-red-600" />
        </div>

        <InfoCard />
      </div>
    </div>
  );
}
