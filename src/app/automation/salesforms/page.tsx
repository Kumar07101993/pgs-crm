"use client";

export default function SalesformsPage() {
  return (
    <div className="p-6 bg-[#F8F6EF] min-h-screen">

      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Salesforms
        </h1>

        <button className="bg-[#0B2545] text-white px-4 py-2 rounded-lg">
          Create Salesform
        </button>

      </div>

      <div className="bg-white rounded-xl border">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Event
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>

          </thead>

          <tbody>

            <tr className="border-t">

              <td className="p-4">
                New Lead Form
              </td>

              <td className="p-4">
                Manual Lead Add
              </td>

              <td className="p-4">
                OFF
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}