import {  LayoutDashboard, LogOut, School, Settings, Users, VerifiedIcon } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      isActive
        ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-300 font-bold"
        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
    }`;

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between p-4">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3 px-2">
          <School className="text-white h-8 w-8" />
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">EduPlatform</h1>
        </div>
        <div className="flex flex-col gap-2">

          <NavLink to="/admin/students-management" className={linkClasses}>
            <Users className="h-5 w-5" />
            <p className="text-sm font-medium">Students Management</p>
          </NavLink>

          <NavLink to="/admin/verification" className={linkClasses}>
            <VerifiedIcon className="h-5 w-5" />
            <p className="text-sm font-medium">Verifications</p>
          </NavLink>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-4">
        <div className="border-t border-slate-200 dark:border-slate-800 my-2"></div>
        <div className="flex items-center gap-3 px-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD24f4M5j5gaE7EMM7W7cZQ_rd-Ul1RVBMBBK8owpD2ZbZYr9Lqs4EyoJGaIKmkmMp_b-JG9HYTA7LWmSMHohNjp9p6z5YISv70xd2ecojVpgSSqACpBP3VNvNRjZ3fFO0t5cBzlyc0OpgpE1I2Yygvgm2pOyneJBLrZMZvvLyzldvYJ7dGQtaWPXXZuJx5xpXPc_gT4UtmonmiFfk6gsmtoPkDx1DnZshm2LF4xJQxgrQAIamEjdpwARD6I36mCxaLzP7UrETZhSo")',
            }}
          />
          <div className="flex flex-col">
            <h1 className="text-slate-900 dark:text-white text-base font-medium leading-normal">Admin</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
              admin@school.edu
            </p>
          </div>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium leading-normal">
          <LogOut className="h-4 w-4" />
          <span className="truncate">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
