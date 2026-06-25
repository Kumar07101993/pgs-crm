"use client";

import Link from "next/link";
import {
  Workflow,
  CalendarDays,
  FileSpreadsheet,
  Webhook,
  Code2,
} from "lucide-react";

export default function AutomationHome() {
  const items = [
    {
      title: "Workflows",
      desc: "Create lead automations",
      href: "/automation/workflows",
      icon: Workflow,
    },
    {
      title: "Schedules",
      desc: "Scheduled followups",
      href: "/automation/schedules",
      icon: CalendarDays,
    },
    {
      title: "Salesforms",
      desc: "Auto lead capture forms",
      href: "/automation/salesforms",
      icon: FileSpreadsheet,
    },
    {
      title: "API Templates",
      desc: "External integrations",
      href: "/automation/api-templates",
      icon: Code2,
    },
    {
      title: "Webhooks",
      desc: "Realtime notifications",
      href: "/automation/webhooks",
      icon: Webhook,
    },
  ];

  return (
    <div className="p-6 bg-[#F8F6EF] min-h-screen">
      <h1 className="text-4xl font-bold text-[#0B2545] mb-8">
        Automation Center
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
            >
              <Icon
                size={40}
                className="text-[#0B2545] mb-4"
              />

              <h2 className="font-bold text-xl">
                {item.title}
              </h2>

              <p className="text-slate-500 mt-2">
                {item.desc}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}