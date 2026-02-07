"use client";

import { rooms } from "@/lib/mock/rooms";
import { currentUser } from "@/lib/auth";

export default function OwnerPage() {

  const myRooms = rooms.filter(r => r.ownerId === currentUser.id);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Panel właściciela sal
      </h1>

      <div className="space-y-4">
        {myRooms.map(r => (
          <div key={r.id} className="border rounded p-4">
            <div className="font-semibold">{r.name}</div>
            <div>Pojemność: {r.capacity}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
