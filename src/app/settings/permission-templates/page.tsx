"use client";

import { useState } from "react";
import {
  Shield,
  Search,
  Plus,
  Eye,
  Pencil,
  Copy,
  Trash2,
  RefreshCw,
} from "lucide-react";

export default function PermissionsPage() {
  const [templates] = useState([
    {
      id: 1,
      name: "Default Admin Permissions",
      assigned: 1,
      modified: "3M ago",
    },
    {
      id: 2,
      name: "Default Manager Permissions",
      assigned: 4,
      modified: "3M ago",
    },
    {
      id: 3,
      name: "Default Caller Permissions",
      assigned: 12,
      modified: "3M ago",
    },
    {
      id: 4,
      name: "Marketing Staff",
      assigned: 17,
      modified: "2M ago",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#F8F6EF] p-8">

      {/* Header */}

      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-8">

          <div className="flex items-center gap-3">

            <Shield
              size={32}
              className="text-[#0B2545]"
            />

            <div>

              <div className="flex items-center gap-2">

                <h1 className="text-4xl font-bold text-[#0B2545]">
                  Permission Templates
                </h1>

                <RefreshCw
                  size={18}
                  className="cursor-pointer text-[#0B2545]"
                />

              </div>

            </div>

          </div>

          <button
            className="
              bg-[#0B2545]
              text-white
              px-5
              py-3
              rounded-xl
              flex
              items-center
              gap-2
            "
          >
            <Plus size={18} />
            Add New
          </button>

        </div>

        {/* Tabs */}

        <div className="flex gap-8 border-b mb-5">

          <button className="pb-3 border-b-2 border-[#0B2545] font-semibold">
            All
          </button>

          <button className="pb-3 text-slate-500">
            Defaults
          </button>

        </div>

        {/* Search */}

        <div className="relative mb-5">

          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-full
              bg-white
              border
              rounded-xl
              pl-12
              py-3
              outline-none
            "
          />

        </div>

        <p className="text-slate-500 text-sm mb-3">
          {templates.length} templates found
        </p>

        {/* Table */}

        <div className="bg-white rounded-2xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="text-left p-4">
                  Name
                </th>

                <th className="text-center p-4">
                  Assigned To
                </th>

                <th className="text-center p-4">
                  Last Modified
                </th>

                <th className="text-center p-4">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {templates.map((item) => (

                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-4 font-medium text-[#0B2545]">
                    {item.name}
                  </td>

                  <td className="text-center">
                    {item.assigned}
                  </td>

                  <td className="text-center">
                    {item.modified}
                  </td>

                  <td>

                    <div className="flex justify-center gap-4">

                      <button>
                        <Eye
                          size={18}
                          className="text-slate-600"
                        />
                      </button>

                      <button>
                        <Pencil
                          size={18}
                          className="text-blue-600"
                        />
                      </button>

                      <button>
                        <Copy
                          size={18}
                          className="text-green-600"
                        />
                      </button>

                      <button>
                        <Trash2
                          size={18}
                          className="text-red-600"
                        />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}