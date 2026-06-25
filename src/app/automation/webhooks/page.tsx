"use client";

export default function WebhooksPage() {
  return (
    <div className="p-6 bg-[#F8F6EF] min-h-screen">

      <div className="flex justify-between mb-6">

        <div>

          <h1 className="text-3xl font-bold">
            Webhooks
          </h1>

          <p className="text-slate-500">
            External Integrations
          </p>

        </div>

        <button className="bg-[#0B2545] text-white px-4 py-2 rounded-lg">
          Add Webhook
        </button>

      </div>

      <div className="bg-white rounded-xl border overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                URL
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>

          </thead>

          <tbody>

            <tr className="border-t">

              <td className="p-4">
                Lead Sync
              </td>

              <td className="p-4">
                https://api.example.com
              </td>

              <td className="p-4 text-green-600">
                Active
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}