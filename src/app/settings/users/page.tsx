"use client";

import { useState } from "react";
import {
  Search,
  RefreshCw,
  Download,
  UserPlus,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";

export default function UsersPage() {
  const [openUserModal, setOpenUserModal] = useState(false);

  const users = [
    {
      name: "Abitha",
      role: "Caller",
      permission: "Default Caller Permissions",
      expiry: "06 Jul 2026",
      license: "Core CRM",
    },
    {
      name: "Amsa",
      role: "Sales Executive",
      permission: "Default Sales Permissions",
      expiry: "06 Jul 2026",
      license: "Core CRM",
    },
    {
      name: "Dinesh",
      role: "Team Head",
      permission: "Default Team Head Permissions",
      expiry: "06 Jul 2026",
      license: "Core CRM",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6EF] p-6">

      {/* Header */}

      <div className="flex justify-between items-start mb-6">

        <div>

          <div className="flex items-center gap-2">

            <h1 className="text-3xl font-bold text-slate-700">
              User Management
            </h1>

            <RefreshCw
              size={18}
              className="text-black cursor-pointer"
            />

          </div>

          <p className="text-slate-500 mt-1">
            Manage your team
          </p>

        </div>

        <div className="flex gap-3">

          <button className="border bg-[#0B2545] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Download size={16} />
            Export
          </button>

          <button
            onClick={() => setOpenUserModal(true)}
            className="bg-[#0B2545] text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <UserPlus size={16} />
            Add User
          </button>

          <button className="border bg-[#0B2545] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <ShoppingCart size={16} />
            Buy Licenses
          </button>

        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl border p-4 mb-6">

        <div className="flex justify-between items-center">

          <div className="relative w-[700px]">

            <Search
              size={18}
              className="absolute left-4 top-3.5 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search by Name, Email or Phone Number"
              className="w-full border rounded-lg pl-11 pr-4 py-3 outline-none"
            />

          </div>

          <div className="flex gap-6 text-white">

            <button className="flex items-center gap-2">
              <Users size={16} />
              Role
            </button>

            <button>Status</button>

            <button>License</button>

          </div>

        </div>

      </div>

      {/* Users Table */}

      <div className="bg-white rounded-xl border overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="text-left px-4 py-4">
                Name
              </th>

              <th className="text-left px-4 py-4">
                Role
              </th>

              <th className="text-left px-4 py-4">
                Permission Template
              </th>

              <th className="text-left px-4 py-4">
                License Expiry
              </th>

              <th className="text-left px-4 py-4">
                License Type
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user, index) => (

              <tr
                key={index}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-4 py-4">
                  {user.name}
                </td>

                <td className="px-4 py-4">
                  {user.role}
                </td>

                <td className="px-4 py-4">
                  {user.permission}
                </td>

                <td className="px-4 py-4">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {user.expiry}
                  </span>

                </td>

                <td className="px-4 py-4">
                  {user.license}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Add User Modal */}

      {openUserModal && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl w-[750px] p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                Add User
              </h2>

              <button
                onClick={() => setOpenUserModal(false)}
              >
                <X />
              </button>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <input
                placeholder="Full Name"
                className="border rounded-xl p-3"
              />

              <input
                placeholder="Email"
                className="border rounded-xl p-3"
              />

              <input
                placeholder="Phone Number"
                className="border rounded-xl p-3"
              />

              <input
                placeholder="Password"
                className="border rounded-xl p-3"
              />

              <select className="border rounded-xl p-3">
                <option>Caller</option>
                <option>Sales Executive</option>
                <option>Team Head</option>
                <option>Admin</option>
              </select>

              <select className="border rounded-xl p-3">
                <option>Madurai Group</option>
                <option>Trichy Group</option>
                <option>Salem Group</option>
              </select>

              <select className="border rounded-xl p-3">
                <option>Default Caller Permissions</option>
                <option>Default Sales Permissions</option>
                <option>Default Team Head Permissions</option>
              </select>

              <select className="border rounded-xl p-3">
                <option>Core CRM</option>
                <option>CRM + WhatsApp</option>
                <option>CRM + AI</option>
              </select>

            </div>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setOpenUserModal(false)}
                className="border px-5 py-2 rounded-xl"
              >
                Cancel
              </button>

              <button className="text-white text-white px-5 py-2 rounded-xl">
                Save User
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}