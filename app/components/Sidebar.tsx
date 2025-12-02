"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
  CurrencyRupeeIcon,
  CalendarDaysIcon,
  BookOpenIcon as LibraryIcon
} from "@heroicons/react/24/outline";

const menuItems = [
  { title: "Dashboard", icon: HomeIcon, path: "/" },
  { title: "Students", icon: UserIcon, path: "/students" },
  { title: "Schools", icon: BuildingLibraryIcon, path: "/schools" },
  { title: "Classes", icon: BookOpenIcon, path: "/classe" },

  { title: "Teacher", icon: AcademicCapIcon, path: "/teacher" },
  { title: "Attendance", icon: UserGroupIcon, path: "/Attendance" },
  { title: "Fees", icon: CurrencyRupeeIcon, path: "/Fees" },
  { title: "Exams", icon: PresentationChartBarIcon, path: "/exam" },
  { title: "Timetable", icon: CalendarDaysIcon, path: "/timetable" },
  { title: "Library", icon: LibraryIcon, path: "/librarary" },
  { title: "Transport", icon: LibraryIcon, path: "/transport" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl 
    p-5 border border-cyan-200 flex flex-col gap-4 relative z-10">

      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <div className="text-2xl font-bold text-cyan-600 drop-shadow-sm">
          EDULINK
        </div>
      </div>

      {/* Menu */}
      {menuItems.map(({ title, icon: Icon, path }) => {
        const isActive = pathname === path;

        return (
          <button
            key={title}
            onClick={() => router.push(path)}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl 
            transition-all duration-300 text-gray-700

            hover:bg-cyan-100 hover:shadow-[0_0_10px_#22d3ee80] hover:scale-[1.02]

            ${
              isActive
                ? "bg-cyan-500 text-white shadow-[0_0_15px_#06b6d480] scale-[1.03]"
                : ""
            }
          `}
          >
            <Icon className="w-5 h-5" />
            {title}
          </button>
        );
      })}
    </div>
  );
}
