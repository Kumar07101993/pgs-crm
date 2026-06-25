"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Search,
  PlusCircle,
  Phone,
  Megaphone,
  Filter,
  List,
  BarChart3,
  Bot,
  Sparkles,
  Link2,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    { icon: LayoutDashboard, name: "Dashboard", href: "/dashboard" },
    { icon: Search, name: "Search Leads", href: "/search-leads" },
    { icon: PlusCircle, name: "Add Lead", href: "/add-lead" },
    { icon: Phone, name: "Calls", href: "/calls" },
    { icon: Megaphone, name: "Campaigns", href: "/campaigns" },
    { icon: Filter, name: "All Leads", href: "/all-leads" },
    { icon: List, name: "My Lists", href: "/my-lists" },
    { icon: BarChart3, name: "Reports", href: "/reports" },
    { icon: Bot, name: "Automation", href: "/automation" },
    { icon: Sparkles, name: "AI Agents", href: "/ai-agents" },
    { icon: Link2, name: "MCP", href: "/mcp" },
    
  ];

  return (
    <aside className="w-20 min-h-screen bg-[#0B2545] flex flex-col items-center py-4 shadow-2xl">

      <Image
        src="/logo.png"
        alt="PGS"
        width={45}
        height={45}
        className="rounded-xxl mb-6"
      />

      <div className="flex flex-col gap-3">

        {menu.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={item.href}
              title={item.name}
              className="
                w-12 h-12
                flex items-center justify-center
                rounded-xl
                text-slate-300
                hover:bg-[#133C67]
                hover:text-white
                transition-all
                duration-300
              "
            >
              
              <Icon size={22} />
            </Link>
          );
        })}

      </div>

      <div className="mt-auto flex flex-col gap-3">

        <Link
          href="/settings"
          className="w-12 h-12 flex items-center justify-center rounded-xl text-slate-300 hover:bg-[#133C67]"
        >
          <Settings size={22} />
        </Link>

        <Link
          href="/logout"
          className="w-12 h-12 flex items-center justify-center rounded-xl text-red-300 hover:bg-red-500 hover:text-white"
        >
          <LogOut size={22} />
        </Link>

      </div>
    </aside>
  );
}