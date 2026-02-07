"use client";

import { users, setUserRole } from "@/lib/usersStore";

export default function AdminPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Panel admina</h1>

      {users.map(u => (
        <div
          key={u.id}
          className="border p-4 mb-3 rounded flex justify-between"
        >
          <div>
            {u.name} — {u.role}
          </div>

          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-blue-600 rounded"
              onClick={() => setUserRole(u.id, "ROOM_OWNER")}
            >
              ROOM_OWNER
            </button>

            <button
              className="px-3 py-1 bg-green-600 rounded"
              onClick={() => setUserRole(u.id, "USER")}
            >
              USER
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
