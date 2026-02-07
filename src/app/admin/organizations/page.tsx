"use client";

import { useState } from "react";
import { organizations, addOrganization } from "@/lib/organizationStore";

export default function OrganizationsAdminPage() {
  const [, refresh] = useState(0);
  const [name, setName] = useState("");

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Organizacje</h1>

      <div className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nazwa organizacji"
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={() => {
            addOrganization(name);
            setName("");
            refresh(v => v + 1);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Dodaj
        </button>
      </div>

      <div className="space-y-3">
        {organizations.map(o => (
          <div key={o.id} className="border rounded p-4">
            {o.name}
          </div>
        ))}
      </div>
    </main>
  );
}
