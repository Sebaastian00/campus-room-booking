import Link from "next/link";

const reservations = [
  {
    id: 1,
    room: "Sala A1",
    date: "2026-02-10",
    time: "10:00 - 12:00",
    user: "Jan Kowalski",
  },
  {
    id: 2,
    room: "Sala B2",
    date: "2026-02-11",
    time: "08:00 - 09:30",
    user: "Anna Nowak",
  },
];

export default function ReservationsPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Rezerwacje</h1>

        <Link
          href="/reservations/new"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Nowa rezerwacja
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        {reservations.map((r) => (
          <div key={r.id} className="rounded-xl border p-4">
            <h2 className="font-semibold">{r.room}</h2>
            <p className="text-sm text-gray-500">
              {r.date} | {r.time}
            </p>
            <p className="text-sm">Rezerwujący: {r.user}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
