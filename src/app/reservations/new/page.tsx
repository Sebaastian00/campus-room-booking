"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewReservationPage() {
  const router = useRouter();
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Rezerwacja zapisana: ${room} ${date} ${time}`);
    router.push("/reservations");
  };

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="text-2xl font-bold">Nowa rezerwacja</h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <select
          className="w-full border p-2 rounded"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option value="">Wybierz salę</option>
          <option value="A1">Sala A1</option>
          <option value="B2">Sala B2</option>
          <option value="C3">Sala C3</option>
        </select>

        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="w-full border p-2 rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Zarezerwuj
        </button>
      </form>
    </main>
  );
}
