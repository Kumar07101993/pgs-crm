"use client";

export default function ApiTemplatesPage() {
  return (
    <div className="p-6 bg-[#F8F6EF] min-h-screen">

      <div className="flex justify-between mb-6">

        <div>

          <h1 className="text-3xl font-bold">
            API Templates
          </h1>

          <p className="text-slate-500">
            Create API templates
          </p>

        </div>

        <button className="bg-[#0B2545] text-white px-4 py-2 rounded-lg">
          Create New
        </button>

      </div>

      <div className="bg-white rounded-xl border p-10 text-center">

        <h3 className="text-xl font-semibold">
          No API Templates Found
        </h3>

      </div>

    </div>
  );
}