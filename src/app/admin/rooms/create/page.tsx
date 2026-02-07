"use client";

import { useState } from "react";
import { addRoom } from "@/lib/roomsStore";
import { organizations } from "@/lib/organizationStore";

export default function CreateRoomPage() {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState(20);
  const [orgId, setOrgId] = useState("1");

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dodaj salę</h1>

      <input
        placeholder="Nazwa sali"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <input
        type="number"
        placeholder="Pojemność"
        value={capacity}
        onChange={(e) => setCapacity(Number(e.target.value))}
        className="border p-2 rounded w-full"
      />

      <select
        value={orgId}
        onChange={(e) => setOrgId(e.target.value)}
        className="border p-2 rounded w-full"
      >
        {organizations.map(o => (
          <option key={o.id} value={o.id}>{o.name}</option>
        ))}
      </select>

      <button
        onClick={() => {
          addRoom(name, capacity, orgId);
          setName("");
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Dodaj salę
      </button>
    </main>
  );
}
