"use client";

import {
  Phone,
  Search,
  Calendar,
  FileText,
  Eye,
} from "lucide-react";

export default function CallsPage() {
  const calls = [
    {
      name: "Ramesh",
      phone: "9876543210",
      assigned: "Karthik",
      status: "Connected",
      followup: "16 Jun 2026",
    },
    {
      name: "Suresh",
      phone: "9876543211",
      assigned: "Abitha",
      status: "No Answer",
      followup: "17 Jun 2026",
    },
    {
      name: "Prakash",
      phone: "9876543212",
      assigned: "Dinesh",
      status: "Interested",
      followup: "18 Jun 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6EF] p-6">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-[#0B2545]">
          Calls Management
        </h1>

        <p className="text-slate-500 mt-2">
          Manage call activities and followups
        </p>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-slate-500">
            Todays Calls
          </h3>

          <p className="text-4xl font-bold mt-2">
            125
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-slate-500">
            Connected
          </h3>

          <p className="text-4xl font-bold mt-2 text-green-600">
            89
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-slate-500">
            Pending
          </h3>

          <p className="text-4xl font-bold mt-2 text-yellow-600">
            24
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-slate-500">
            Missed
          </h3>

          <p className="text-4xl font-bold mt-2 text-red-600">
            12
          </p>
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
            placeholder="Search Calls..."
            className="w-full border rounded-xl pl-11 py-3"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="text-left p-4">
                Customer
              </th>

              <th className="text-left p-4">
                Mobile
              </th>

              <th className="text-left p-4">
                Assigned User
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Followup Date
              </th>

              <th className="text-center p-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {calls.map((call, index) => (

              <tr
                key={index}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4">
                  {call.name}
                </td>

                <td className="p-4">
                  {call.phone}
                </td>

                <td className="p-4">
                  {call.assigned}
                </td>

                <td className="p-4">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {call.status}
                  </span>

                </td>

                <td className="p-4">
                  {call.followup}
                </td>

                <td>

                  <div className="flex justify-center gap-2">

                    <button className="p-2 bg-blue-100 rounded-lg">
                      <Phone size={16} />
                    </button>

                    <button className="p-2 bg-yellow-100 rounded-lg">
                      <Calendar size={16} />
                    </button>

                    <button className="p-2 bg-green-100 rounded-lg">
                      <FileText size={16} />
                    </button>

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