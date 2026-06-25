"use client";

import { useState } from "react";

export default function ImportExcelPage() {
  const [listName, setListName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const uploadExcel = async () => {
    if (!listName.trim()) {
      alert("Enter List Name");
      return;
    }

    if (!file) {
      alert("Select Excel File");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("listName", listName);
      formData.append("createdById", "admin");
      formData.append("file", file);

      const res = await fetch("/api/import-excel", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      alert("Excel Uploaded Successfully");

      setListName("");
      setFile(null);

      window.location.href = "/my-lists";
    } catch (error) {
      console.error(error);
      alert("Failed to upload excel");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-[#F8F6EF] min-h-screen">
      <h1 className="text-4xl font-bold text-[#0B2545] mb-8">
        Import Excel
      </h1>

      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl">
        <div className="mb-6">
          <label className="block font-medium mb-2">
            List Name
          </label>

          <input
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            placeholder="Facebook Leads"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2">
            Excel File
          </label>

          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
            className="w-full border p-3 rounded-xl"
          />

          {file && (
            <p className="mt-2 text-green-600">
              Selected: {file.name}
            </p>
          )}
        </div>

        <button
          onClick={uploadExcel}
          disabled={loading}
          className="bg-[#0B2545] text-white px-6 py-3 rounded-xl disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Excel"}
        </button>
      </div>
    </div>
  );
}