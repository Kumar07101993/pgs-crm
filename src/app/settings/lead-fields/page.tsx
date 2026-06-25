"use client";

import {
  Search,
  Pencil,
  EyeOff,
  Plus,
  ChevronDown,
} from "lucide-react";

export default function LeadFieldsPage() {
  const fields = [
    ["Address", "Text"],
    ["Alternate Name 1", "Text"],
    ["Alternate Name 2", "Text"],
    ["Alternate Name 3", "Text"],
    ["Alternate Name 4", "Text"],
    ["Alternate Name 5", "Text"],
    ["Alternate Number 1", "Phone"],
    ["Alternate Number 2", "Phone"],
    ["Alternate Number 3", "Phone"],
    ["Alternate Number 4", "Phone"],
    ["Alternate Number 5", "Phone"],
    ["Bill Date", "Date"],
    ["Birthday", "Date"],
    ["Builder Name", "Text"],
    ["Construction Stage", "Dropdown"],
    ["Contact Role", "Dropdown"],
    ["Lead Source", "Dropdown"],
    ["Quotation", "Text"],
    ["Remark", "Text"],
    ["Remark 2", "Text"],
    ["Revisit", "Date"],
    ["Salesman", "Text"],
    ["Sq Ft", "Number"],
    ["Taken", "Number"],
    ["Tiles Preference", "Dropdown"],
    ["Visit", "Text"],
    ["Wedding Day", "Date"],
  ];

  return (
    <div className="min-h-screen bg-[#F8F6EF] p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold text-[#0B2545]">
            Fields Settings
          </h1>

          <p className="text-slate-500">
            Manage CRM Lead Fields
          </p>
        </div>

        <button className="bg-[#0B2545] text-white px-5 py-3 rounded-xl flex items-center gap-2">
          <Plus size={18} />
          Add New Field
        </button>

      </div>

      {/* Lead ID */}

      <div className="bg-white rounded-2xl p-5 shadow mb-4">

        <p className="text-slate-500 text-sm">
          Lead ID
        </p>

        <h3 className="font-bold text-lg">
          address name
        </h3>

        <p className="text-slate-400 text-sm">
          000001, 000002
        </p>

      </div>

      {/* Primary Fields */}

      <div className="bg-white rounded-2xl shadow mb-5">

        <div className="p-4 border-b">
          <h3 className="font-semibold">
            PRIMARY FIELDS
          </h3>
        </div>

        <div className="p-4 border-b flex justify-between">
          <span>H1 : Customer Name</span>
          <Pencil size={16} />
        </div>

        <div className="p-4 flex justify-between">
          <span>H2 : Phone</span>
          <Pencil size={16} />
        </div>

      </div>

      {/* Search */}

      <div className="flex gap-4 mb-5">

        <div className="flex-1 relative">

          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            placeholder="Search Fields..."
            className="w-full pl-11 py-3 rounded-xl border bg-white"
          />

        </div>

        <button className="bg-white px-4 rounded-xl border flex items-center gap-2">
          All
          <ChevronDown size={16} />
        </button>

        <button className="bg-white px-4 rounded-xl border flex items-center gap-2">
          Active Fields
          <ChevronDown size={16} />
        </button>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="text-left p-4">
                Field Name
              </th>

              <th className="text-left p-4">
                Type
              </th>

              <th className="text-left p-4">
                Created On
              </th>

              <th className="text-left p-4">
                Last Modified
              </th>

              <th className="text-left p-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {fields.map((field, index) => (
              <tr
                key={index}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4">
                  {field[0]}
                </td>

                <td className="p-4">
                  {field[1]}
                </td>

                <td className="p-4">
                  3 Months Ago
                </td>

                <td className="p-4">
                  2 Months Ago
                </td>

                <td className="p-4">

                  <div className="flex gap-4">

                    <button className="text-blue-600 flex items-center gap-1">
                      <Pencil size={14} />
                      Edit
                    </button>

                    <button className="text-red-500 flex items-center gap-1">
                      <EyeOff size={14} />
                      Hide
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