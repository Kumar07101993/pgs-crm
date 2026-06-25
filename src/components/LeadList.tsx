"use client";

type Lead = {
  id: number;
  name: string;
  phone: string;
  village: string;
};

interface LeadListProps {
  selectedLead: Lead;
  setSelectedLead: (lead: Lead) => void;
}

export default function LeadList({
  selectedLead,
  setSelectedLead,
}: LeadListProps) {
  const leads = [
    { id: 1, name: "Suresh", phone: "918939898437", village: "70015" },
    { id: 2, name: "Sathees Kumar", phone: "918939898438", village: "70013" },
    { id: 3, name: "Pal Kannan", phone: "918939898439", village: "70012" },
    { id: 4, name: "Kalirajan", phone: "918939898440", village: "70011" },
    { id: 5, name: "Kannan", phone: "918939898441", village: "70010" },
    { id: 6, name: "Nagaraj", phone: "918939898442", village: "70009" },
  ];

  return (
    <div className="w-[380px] bg-white border-r border-slate-200 flex flex-col">

      {/* Search Header */}
      <div className="p-4 border-b">

        <h2 className="font-semibold text-lg mb-3">
          Search Leads
        </h2>

        <input
          placeholder="Search Leads..."
          className="w-full border rounded-xl px-4 py-2 outline-none"
        />

        <div className="flex gap-2 mt-3">

          <button className="px-3 py-1 bg-[#6C63FF] text-white rounded-full text-sm">
            Auto
          </button>

          <button className="px-3 py-1 border rounded-full text-sm">
            Text
          </button>

          <button className="px-3 py-1 border rounded-full text-sm">
            Phone
          </button>

        </div>

        <p className="mt-3 text-sm text-gray-500">
          6 matching leads
        </p>

      </div>

      {/* Lead List */}
      <div className="overflow-y-auto flex-1">

        {leads.map((lead) => (
          <div
            key={lead.id}
            onClick={() => setSelectedLead(lead)}
            className={`cursor-pointer p-4 border-b transition ${
              selectedLead.id === lead.id
                ? "bg-blue-50"
                : "hover:bg-slate-50"
            }`}
          >
            <div className="flex justify-between">

              <div>
                <h3 className="font-semibold text-[#4F46E5]">
                  {lead.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Address Name:
                  <span className="ml-1 font-medium">
                    {lead.village}
                  </span>
                </p>
              </div>

              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600">
                VE
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}