"use client";

import Link from "next/link";
import {
  Users,
  Shield,
  Layers3,
  Phone,
  Settings,
  Users2,
  CreditCard,
  Receipt,
} from "lucide-react";

export default function SettingsPage() {
  const settings = [
    {
      title: "Users",
      icon: Users,
      href: "/settings/users",
    },
    {
      title: "Permission Templates",
      icon: Shield,
      href: "/settings/permission-templates",
    },
    {
      title: "Sales Groups",
      icon: Users2,
      href: "/settings/sales-groups",
    },
    {
      title: "Lead Fields",
      icon: Layers3,
      href: "/settings/lead-fields",
    },
    {
      title: "Lead Stages",
      icon: Settings,
      href: "/settings/lead-stages",
    },
    {
      title: "Call Feedback",
      icon: Phone,
      href: "/settings/call-feedback",
    },
    {
      title: "Buy License",
      icon: CreditCard,
      href: "/settings/buy-license",
    },
    {
      title: "Transaction History",
      icon: Receipt,
      href: "/settings/transactions",
    },
  ];

  return (
    <main className="p-8 bg-[#F8F6EF] min-h-screen">

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-[#0B2545]">
          Settings
        </h1>

        <p className="text-slate-500 mt-2">
          Configure CRM settings and permissions
        </p>

      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        {settings.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                transition-all
                hover:-translate-y-1
              "
            >
              <Icon
                size={34}
                className="text-[#0B2545]"
              />

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-500">
                Open {item.title}
              </p>
            </Link>
          );
        })}

      </div>

    </main>
  );
}