"use client";

import { Bell, Search, CalendarDays } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between mb-8">

      {/* Left */}
      <div>
     

        <p className="text-slate-500 mt-2">
          Welcome to PGS Tile Mart CRM Dashboard
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search Leads..."
            className="w-[300px] rounded-2xl bg-white border border-slate-200 py-3 pl-12 pr-4 shadow-sm focus:outline-none"
          />
        </div>

        {/* Date */}
        <div className="bg-white rounded-2xl px-4 py-3 shadow-sm flex items-center gap-2">
          <CalendarDays size={18} />
          <span className="text-sm font-medium">
            Today
          </span>
        </div>

        {/* Notification */}
        <button className="bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition">
          <Bell size={20} />
        </button>

        {/* Profile */}
        <div className="bg-white rounded-2xl px-4 py-2 shadow-sm flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-[#0B2545] flex items-center justify-center text-white font-bold">
            A
          </div>

          <div>
            <p className="font-semibold text-sm">
              Admin
            </p>

            <p className="text-xs text-slate-500">
              PGS Tile Mart
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}