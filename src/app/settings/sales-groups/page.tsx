"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Trash2,
  X,
  Users,
} from "lucide-react";

export default function SalesGroupsPage() {
  const [openModal, setOpenModal] = useState(false);

  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Abitha Group",
      managers: 1,
      users: 1,
    },
    {
      id: 2,
      name: "Amsa Team",
      managers: 1,
      users: 3,
    },
    {
      id: 3,
      name: "Durga Group",
      managers: 1,
      users: 2,
    },
  ]);

  const deleteGroup = (id: number) => {
    setGroups(groups.filter((g) => g.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F8F6EF] p-8">
      {/* Header */}

      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-[#0B2545]">
            Sales Group
          </h1>

          <button
            onClick={() => setOpenModal(true)}
            className="bg-[#0B2545] text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <Plus size={18} />
            Add New Group
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
            placeholder="Search sales group by name"
            className="w-full bg-white border rounded-xl pl-12 py-3"
          />
        </div>

        {/* Table */}

        <div className="bg-white rounded-2xl overflow-hidden shadow">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-4">
                  Name
                </th>

                <th className="text-center p-4">
                  Managers
                </th>

                <th className="text-center p-4">
                  Users
                </th>

                <th className="text-center p-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {groups.map((group) => (
                <tr
                  key={group.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4 font-medium text-[#0B2545]">
                    {group.name}
                  </td>

                  <td className="text-center">
                    {group.managers}
                  </td>

                  <td className="text-center">
                    {group.users}
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() =>
                        deleteGroup(group.id)
                      }
                      className="text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}

      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[900px] rounded-2xl overflow-hidden">
            {/* Top */}

            <div className="border-b p-5 flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                Sales Group
              </h2>

              <button
                onClick={() =>
                  setOpenModal(false)
                }
              >
                <X />
              </button>
            </div>

            <div className="p-6">
              {/* Group Name */}

              <label className="font-medium">
                Name *
              </label>

              <input
                className="w-full border rounded-lg mt-2 mb-4 p-3"
                placeholder="Group Name"
              />

              {/* Description */}

              <label className="font-medium">
                Description
              </label>

              <textarea
                rows={4}
                className="w-full border rounded-lg mt-2 p-3"
                placeholder="Enter sales group description"
              />

              {/* Managers */}

              <div className="mt-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">
                    Managers (1)
                  </h3>

                  <button className="border px-4 py-2 rounded-lg">
                    + Add Managers
                  </button>
                </div>

                <input
                  className="w-full border rounded-lg p-3 mb-4"
                  placeholder="Search managers"
                />

                <div className="border rounded-xl overflow-hidden">
                  <div className="grid grid-cols-4 bg-slate-50 p-3 font-medium">
                    <div>Manager</div>
                    <div>View Leads</div>
                    <div>Edit Fields</div>
                    <div></div>
                  </div>

                  <div className="grid grid-cols-4 p-4 items-center">
                    <div>
                      <p className="font-medium">
                        Abitha
                      </p>

                      <p className="text-sm text-slate-500">
                        abitha@gmail.com
                      </p>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        defaultChecked
                      />
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        defaultChecked
                      />
                    </div>

                    <div>
                      <Trash2
                        size={18}
                        className="text-red-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Users */}

              <div className="mt-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">
                    Users (1)
                  </h3>

                  <button className="border px-4 py-2 rounded-lg">
                    + Add Users
                  </button>
                </div>

                <input
                  className="w-full border rounded-lg p-3 mb-4"
                  placeholder="Search users"
                />

                <div className="flex gap-3 flex-wrap">
                  <div className="bg-slate-100 px-4 py-3 rounded-full flex items-center gap-3">
                    <Users size={18} />

                    Dineshkumar

                    <X
                      size={16}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}

              <div className="flex justify-end gap-3 mt-8">
                <button
                  onClick={() =>
                    setOpenModal(false)
                  }
                  className="border px-5 py-3 rounded-xl"
                >
                  Cancel
                </button>

                <button className="bg-[#0B2545] text-white px-5 py-3 rounded-xl">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}