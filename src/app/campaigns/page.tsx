"use client";

import {
  Plus,
  Search,
  MessageCircle,
  Mail,
  Phone,
  Eye,
} from "lucide-react";

export default function CampaignsPage() {
  const campaigns = [
    {
      name: "June Tiles Offer",
      type: "WhatsApp",
      createdBy: "Admin",
      leads: 2500,
      status: "Running",
      date: "15 Jun 2026",
    },
    {
      name: "Builders Followup",
      type: "SMS",
      createdBy: "Karthik",
      leads: 1200,
      status: "Completed",
      date: "10 Jun 2026",
    },
    {
      name: "Premium Tiles Launch",
      type: "Email",
      createdBy: "Admin",
      leads: 3400,
      status: "Scheduled",
      date: "20 Jun 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6EF] p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-[#0B2545]">
            Campaign Management
          </h1>

          <p className="text-slate-500 mt-2">
            Manage WhatsApp, SMS and Email Campaigns
          </p>
        </div>

        <button className="bg-[#0B2545] text-white px-5 py-3 rounded-xl flex items-center gap-2">
          <Plus size={18} />
          Create Campaign
        </button>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3>Total Campaigns</h3>
          <p className="text-4xl font-bold mt-2">24</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3>Running</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">8</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3>Scheduled</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">6</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3>Completed</h3>
          <p className="text-4xl font-bold text-purple-600 mt-2">10</p>
        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl p-4 shadow mb-6">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            placeholder="Search Campaign..."
            className="w-full border rounded-xl pl-11 py-3"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="text-left p-4">Campaign</th>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Created By</th>
              <th className="text-left p-4">Target Leads</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Date</th>
              <th className="text-center p-4">Actions</th>
            </tr>

          </thead>

          <tbody>

            {campaigns.map((campaign, index) => (

              <tr
                key={index}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {campaign.name}
                </td>

                <td className="p-4">

                  <div className="flex items-center gap-2">

                    {campaign.type === "WhatsApp" && (
                      <MessageCircle size={16} />
                    )}

                    {campaign.type === "SMS" && (
                      <Phone size={16} />
                    )}

                    {campaign.type === "Email" && (
                      <Mail size={16} />
                    )}

                    {campaign.type}

                  </div>

                </td>

                <td className="p-4">
                  {campaign.createdBy}
                </td>

                <td className="p-4">
                  {campaign.leads}
                </td>

                <td className="p-4">

                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                    {campaign.status}
                  </span>

                </td>

                <td className="p-4">
                  {campaign.date}
                </td>

                <td>

                  <div className="flex justify-center">

                    <button className="p-2 bg-slate-100 rounded-lg">
                      <Eye size={16} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}