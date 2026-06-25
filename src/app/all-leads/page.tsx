"use client";

import { Search } from "lucide-react";

export default function AllLeadsPage() {
  const leads = [
    {
      id: "LD001",
      customer: "Ramesh",
      mobile: "9876543210",
      city: "Madurai",
      source: "Facebook",
      status: "Interested",
    },
    {
      id: "LD002",
      customer: "Karthik",
      mobile: "9876543211",
      city: "Trichy",
      source: "Google",
      status: "Follow Up",
    },
    {
      id: "LD003",
      customer: "Suresh",
      mobile: "9876543212",
      city: "Salem",
      source: "Reference",
      status: "Quotation Sent",
    },
  ];

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold text-[#0B2545]">
          All Leads
        </h1>

        <button className="bg-[#0B2545] text-white px-5 py-3 rounded-xl">
          Export Excel
        </button>

      </div>

      {/* Filters */}

      <div className="bg-white rounded-3xl p-6 shadow-lg mb-6">

        <div className="grid md:grid-cols-5 gap-4">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              placeholder="Search Lead..."
              className="w-full pl-12 pr-4 py-3 border rounded-xl"
            />

          </div>

          <select className="border rounded-xl p-3">
            <option>All Status</option>
            <option>Interested</option>
            <option>Follow Up</option>
            <option>Converted</option>
          </select>

          <select className="border rounded-xl p-3">
            <option>All Sources</option>
            <option>Facebook</option>
            <option>Google</option>
            <option>Reference</option>
          </select>

          <input
            type="date"
            className="border rounded-xl p-3"
          />

          <button className="bg-[#0B2545] text-white rounded-xl">
            Apply Filter
          </button>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="text-left p-4">
                Lead ID
              </th>

              <th className="text-left p-4">
                Customer
              </th>

              <th className="text-left p-4">
                Mobile
              </th>

              <th className="text-left p-4">
                City
              </th>

              <th className="text-left p-4">
                Source
              </th>

              <th className="text-left p-4">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4">
                  {lead.id}
                </td>

                <td className="p-4">
                  {lead.customer}
                </td>

                <td className="p-4">
                  {lead.mobile}
                </td>

                <td className="p-4">
                  {lead.city}
                </td>

                <td className="p-4">
                  {lead.source}
                </td>

                <td className="p-4">

                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                    {lead.status}
                  </span>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}