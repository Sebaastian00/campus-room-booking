import Link from "next/link";
import { rooms } from "@/lib/roomsStore";
import { currentUser } from "@/lib/auth";

export default function RoomsPage() {
  const visibleRooms =
    currentUser.role === "ADMIN"
      ? rooms
      : rooms.filter((r) => r.ownerId === currentUser.id);

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold">Sale</h1>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {visibleRooms.map((r) => (
          <Link
            key={r.id}
            href={`/rooms/${r.id}`}
            className="rounded-xl border p-4"
          >
            <h2 className="font-semibold">{r.name}</h2>
            <p className="text-sm text-gray-500">
              Pojemność: {r.capacity}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
