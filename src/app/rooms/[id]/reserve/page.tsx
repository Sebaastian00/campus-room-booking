"use client";

import { useState } from "react";

export default function ReservePage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(\`Rezerwacja: \${date} \${time}\`);
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold">Nowa rezerwacja</h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm">Data</label>
          <input
            type="date"
            className="mt-1 w-full rounded-lg border p-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm">Godzina</label>
          <input
            type="time"
            className="mt-1 w-full rounded-lg border p-2"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <button className="rounded-xl bg-black px-4 py-2 text-white">
          Zarezerwuj
        </button>
      </form>
    </main>
  );
}
