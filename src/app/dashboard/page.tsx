"use client";

import Link from "next/link";

export default function DashboardPage() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const quickActions = [
    {
      title: "Add Team",
      desc: "Collaborate with your sales team",
      btn: "Add Team",
      href: "/users",
    },
    {
      title: "Excel Upload",
      desc: "Import leads from Excel",
      btn: "Import",
      href: "/import-excel",
    },
    {
      title: "Add Lead",
      desc: "Create a new customer lead",
      btn: "Add Lead",
      href: "/add-lead",
    },
    {
      title: "Reports",
      desc: "Analyze performance",
      btn: "View Reports",
      href: "/reports",
    },
    {
      title: "Lead Fields",
      desc: "Manage custom lead fields",
      btn: "Manage",
      href: "/lead-fields",
    },
  ];

  return (
    <main className="flex-1 p-8 overflow-auto bg-gradient-to-br from-[#F8F6EF] via-[#FCFBF8] to-[#F3EBD2]">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-black text-[#0B2545]">
          {greeting}, Admin 👋
        </h1>

        <p className="text-slate-500 mt-3 text-lg">
          Welcome to PGS Tile Mart CRM Dashboard
        </p>

        <p className="text-slate-400 mt-2">
          {new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid xl:grid-cols-5 md:grid-cols-2 gap-6 mb-10">
        {quickActions.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-3xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-lg text-[#0B2545]">
              {card.title}
            </h3>

            <p className="text-slate-500 mt-2">
              {card.desc}
            </p>

            <Link
              href={card.href}
              className="inline-block mt-4 bg-[#0B2545] hover:bg-[#12365f] text-white px-5 py-3 rounded-xl"
            >
              {card.btn}
            </Link>
          </div>
        ))}
      </div>

      {/* Integrations */}
      <h2 className="text-3xl font-bold text-[#0B2545] mb-5">
        Integrations
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="font-bold text-xl">
            Facebook Leads
          </h3>

          <p className="text-slate-500 mt-2">
            Capture leads directly from Meta Ads.
          </p>

          <Link
            href="/facebook"
            className="inline-block mt-4 bg-[#0B2545] text-white px-5 py-3 rounded-xl"
          >
            Connect
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="font-bold text-xl">
            Google Sheets
          </h3>

          <p className="text-slate-500 mt-2">
            Sync leads automatically.
          </p>

          <Link
            href="/google-sheet"
            className="inline-block mt-4 bg-[#0B2545] text-white px-5 py-3 rounded-xl"
          >
            Connect
          </Link>
        </div>
      </div>

      {/* Important Links */}
      <h2 className="text-3xl font-bold text-[#0B2545] mb-5">
        Important Links
      </h2>

      <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-wrap gap-3 mb-10">
        <Link
          href="/calls"
          className="px-5 py-3 rounded-full bg-slate-100"
        >
          Configure Calling
        </Link>

        <Link
          href="/whatsapp"
          className="px-5 py-3 rounded-full bg-slate-100"
        >
          WhatsApp API
        </Link>

        <Link
          href="/automation"
          className="px-5 py-3 rounded-full bg-slate-100"
        >
          Automation
        </Link>

        <Link
          href="/reports"
          className="px-5 py-3 rounded-full bg-slate-100"
        >
          Reports
        </Link>

        <Link
          href="/import-excel"
          className="px-5 py-3 rounded-full bg-slate-100"
        >
          Import Excel
        </Link>
      </div>

      {/* Recent Leads */}
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-[#0B2545] mb-6">
          Recent Leads
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4">Customer</th>
              <th className="text-left py-4">Mobile</th>
              <th className="text-left py-4">Location</th>
              <th className="text-left py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-4">Ramesh</td>
              <td>9876543210</td>
              <td>Madurai</td>
              <td>Interested</td>
            </tr>

            <tr className="border-b">
              <td className="py-4">Karthik</td>
              <td>9876543211</td>
              <td>Trichy</td>
              <td>Follow Up</td>
            </tr>

            <tr>
              <td className="py-4">Suresh</td>
              <td>9876543212</td>
              <td>Salem</td>
              <td>Quotation Sent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}