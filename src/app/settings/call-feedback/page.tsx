"use client";

import { Plus, Pencil, Trash2 } from "lucide-react";

export default function CallFeedbackPage() {
  const feedbacks = [
    "Connected",
    "No Answer",
    "Busy",
    "Call Later",
    "Switched Off",
    "Wrong Number",
    "Out Of Service",
    "Interested",
    "Not Interested",
    "Follow Up Required",
  ];

  return (
    <main className="p-8 bg-[#F8F6EF] min-h-screen">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-[#0B2545]">
            Call Feedback
          </h1>

          <p className="text-slate-500 mt-2">
            Manage call outcomes and feedback options
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#0B2545] text-white px-5 py-3 rounded-xl">
          <Plus size={18} />
          Add Feedback
        </button>

      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="text-left p-4">
                Feedback Name
              </th>

              <th className="text-center p-4">
                Actions
              </th>
            </tr>

          </thead>

          <tbody>

            {feedbacks.map((feedback, index) => (
              <tr
                key={index}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4 font-medium">
                  {feedback}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                      <Pencil size={16} />
                    </button>

                    <button className="p-2 bg-red-100 text-red-700 rounded-lg">
                      <Trash2 size={16} />
                    </button>

                  </div>

                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}