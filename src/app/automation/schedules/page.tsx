"use client";

export default function SchedulesPage() {
  return (
    <div className="p-6 bg-[#F8F6EF] min-h-screen">

      <div className="flex justify-between mb-6">

        <div>

          <h1 className="text-3xl font-bold">
            Schedules
          </h1>

          <p className="text-slate-500">
            Automated Followups
          </p>

        </div>

        <button className="bg-[#0B2545] text-white px-4 py-2 rounded-lg">
          Create Schedule
        </button>

      </div>

      <div className="bg-white rounded-xl p-6 shadow">

        <h3 className="font-bold">
          Daily Followup Reminder
        </h3>

        <p className="text-slate-500 mt-2">
          Every day 10:00 AM
        </p>

      </div>

    </div>
  );
}