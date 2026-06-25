"use client";

import { useState } from "react";

export default function TestUsers() {
  const [name, setName] = useState("");

  const createUser = async () => {
    await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email: `${Date.now()}@crm.com`,
        role: "Admin",
      }),
    });

    alert("User Created");
  };

  return (
    <div className="p-10">
      <input
        className="border p-3"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button
        onClick={createUser}
        className="ml-3 bg-blue-500 text-white px-4 py-3"
      >
        Save
      </button>
    </div>
  );
}