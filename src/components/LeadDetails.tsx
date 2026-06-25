"use client";

import {
  Phone,
  MessageCircle,
  ClipboardCheck,
  FileText,
  NotebookPen,
} from "lucide-react";

type Lead = {
  id: number;
  name: string;
  phone: string;
  village: string;
};

interface LeadDetailsProps {
  lead: Lead;
}

export default function LeadDetails({
  lead,
}: LeadDetailsProps) {
  return (
    <div className="flex-1 bg-[#FAFAFA] p-5 overflow-auto">

      {/* Warning */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-yellow-700 text-sm mb-4">
        ⚠ Duplicate leads found
      </div>

      {/* Lead Header */}
      <div className="bg-white rounded-2xl border shadow-sm">

        <div className="p-5 border-b">

          <h2 className="text-2xl font-bold text-[#0B2545]">
            {lead.name}
          </h2>

          <div className="mt-2 flex items-center gap-3">

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm">
              Interested
            </span>

            <span className="text-yellow-500">
              ★★★★★
            </span>

          </div>
        </div>

        {/* Lead Info */}
        <div className="grid grid-cols-2 gap-8 p-5">

          <div>
            <p className="text-xs text-slate-500">
              Phone
            </p>

            <p className="font-medium mt-1">
              +91 {lead.phone}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Address
            </p>

            <p className="font-medium mt-1">
              Tirumangalam
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Builder Name
            </p>

            <p className="font-medium mt-1">
              Empty
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Lead Source
            </p>

            <p className="font-medium mt-1">
              Manual
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Address Name
            </p>

            <p className="font-medium mt-1">
              {lead.village}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Construction Stage
            </p>

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm">
              Finished
            </span>
          </div>

        </div>

        {/* Action Bar */}
        <div className="grid grid-cols-5 border-t">

          <button className="flex flex-col items-center py-4 hover:bg-slate-50">
            <Phone size={18} />
            <span className="text-xs mt-1">
              CALL
            </span>
          </button>

          <button className="flex flex-col items-center py-4 hover:bg-slate-50">
            <ClipboardCheck size={18} />
            <span className="text-xs mt-1">
              TASK
            </span>
          </button>

          <button className="flex flex-col items-center py-4 hover:bg-slate-50">
            <MessageCircle size={18} />
            <span className="text-xs mt-1">
              WHATSAPP
            </span>
          </button>

          <button className="flex flex-col items-center py-4 hover:bg-slate-50">
            <FileText size={18} />
            <span className="text-xs mt-1">
              SMS
            </span>
          </button>

          <button className="flex flex-col items-center py-4 hover:bg-slate-50">
            <NotebookPen size={18} />
            <span className="text-xs mt-1">
              NOTE
            </span>
          </button>

        </div>
      </div>

      {/* Activity History */}
      <div className="mt-5 bg-white rounded-2xl border shadow-sm">

        <div className="border-b px-5 py-4 flex gap-6">

          <button className="font-semibold text-[#4F46E5] border-b-2 border-[#4F46E5] pb-2">
            Activity History
          </button>

          <button className="text-slate-500">
            Tasks
          </button>

        </div>

        <div className="divide-y">

          {[
            "CONNECTED - 10s",
            "CONNECTED - 35s",
            "CONNECTED - 47s",
            "CONNECTED - 46s",
            "CONNECTED - 20s",
          ].map((item, index) => (
            <div
              key={index}
              className="px-5 py-4 flex justify-between"
            >
              <div>
                <p className="font-medium">
                  {item}
                </p>

                <p className="text-xs text-slate-400">
                  Note not added
                </p>
              </div>

              <span className="text-sm text-slate-400">
                1M
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}