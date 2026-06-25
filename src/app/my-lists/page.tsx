  "use client";

  import { useEffect, useState } from "react";

  interface LeadList {
    id: string;
    name: string;
    createdAt: string;
  }

  export default function MyListsPage() {
    const [lists, setLists] = useState<LeadList[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchLists();
    }, []);

    const fetchLists = async () => {
      try {
        const res = await fetch("/api/lead-lists");

        if (!res.ok) {
          throw new Error("Failed to fetch lists");
        }

        const data = await res.json();

        console.log("Lists:", data);

        setLists(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="p-8 bg-[#F8F6EF] min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0B2545]">
            My Lists
          </h1>

          <p className="text-slate-500 mt-2">
            Uploaded Lead Lists
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            Loading...
          </div>
        ) : lists.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center shadow">
            <h2 className="text-2xl font-bold text-slate-700">
              No Lists Found
            </h2>

            <p className="text-slate-500 mt-2">
              Upload an Excel file to create a lead list.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {lists.map((list) => (
              <div
                key={list.id}
                className="bg-white rounded-3xl shadow-lg p-6"
              >
                <h2 className="text-xl font-bold text-[#0B2545]">
                  {list.name}
                </h2>

                <p className="text-slate-500 mt-3">
                  Created:
                </p>

                <p className="font-medium">
                  {new Date(
                    list.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }