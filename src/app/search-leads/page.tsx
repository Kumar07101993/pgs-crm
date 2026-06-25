"use client";

import { useEffect, useState } from "react";

interface Lead {
  id: number;
  customerName: string;
  phone: string;
  city?: string;
  district?: string;
  address?: string;
  leadSource?: string;
  builderName?: string;
  remarks?: string;
}

export default function SearchLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] =
    useState<Lead | null>(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();

      setLeads(data);

      if (data.length > 0) {
        setSelectedLead(data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleCall = async (lead: Lead) => {
  try {
    await fetch("/api/calls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        leadId: lead.id,
        userId: "admin",
        callType: "outgoing",
        duration: 0,
        status: "attempted",
      }),
    });

    window.location.href = `tel:${lead.phone}`;
  } catch (error) {
    console.error(error);
  }
};

  const filteredLeads = leads.filter(
    (lead) =>
      lead.customerName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      lead.phone?.includes(search)
  );

  return (
    <div className="flex h-screen bg-[#F8F6EF]">

      {/* LEFT SIDE */}
      <div className="w-[380px] bg-white border-r overflow-y-auto">

        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold text-[#0B2545]">
            Search Leads
          </h1>

          <input
            type="text"
            placeholder="Search Name or Mobile..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border p-3 rounded-xl mt-4"
          />
        </div>

        {filteredLeads.map((lead) => (
          <div
            key={lead.id}
            onClick={() =>
              setSelectedLead(lead)
            }
            className={`p-4 border-b cursor-pointer hover:bg-slate-100 ${
              selectedLead?.id === lead.id
                ? "bg-slate-100"
                : ""
            }`}
          >
            <h3 className="font-bold">
              {lead.customerName}
            </h3>

            <p className="text-sm text-slate-500">
              {lead.phone}
            </p>

            <p className="text-sm">
              {lead.city}
            </p>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 p-8 overflow-y-auto">

        {!selectedLead ? (
          <div>Select a Lead</div>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-[#0B2545]">
              {selectedLead.customerName}
            </h1>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="bg-white p-6 rounded-3xl shadow">
                <h2 className="font-bold mb-4">
                  Lead Information
                </h2>

                <p>
                  <strong>Phone:</strong>{" "}
                  {selectedLead.phone}
                </p>

                <p>
                  <strong>City:</strong>{" "}
                  {selectedLead.city || "-"}
                </p>

                <p>
                  <strong>District:</strong>{" "}
                  {selectedLead.district || "-"}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {selectedLead.address || "-"}
                </p>

                <p>
                  <strong>Source:</strong>{" "}
                  {selectedLead.leadSource || "-"}
                </p>

                <p>
                  <strong>Builder:</strong>{" "}
                  {selectedLead.builderName || "-"}
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow">
                <h2 className="font-bold mb-4">
                  Actions
                </h2>

                <div className="flex flex-wrap gap-3">

                 <button
  onClick={() => handleCall(selectedLead)}
  className="bg-green-600 text-white px-5 py-3 rounded-xl"
>
  Call
</button>
                  <a
                    href={`https://wa.me/91${selectedLead.phone}`}
                    target="_blank"
                    className="bg-green-500 text-white px-5 py-3 rounded-xl"
                  >
                    WhatsApp
                  </a>

                  <button className="bg-[#0B2545] text-white px-5 py-3 rounded-xl">
                    Assign User
                  </button>

                </div>

                <div className="mt-6">
                  <h3 className="font-bold mb-2">
                    Remarks
                  </h3>

                  <p>
                    {selectedLead.remarks ||
                      "No Remarks"}
                  </p>
                </div>
              </div>

            </div>
          </>
        )}

      </div>

    </div>
  );
}