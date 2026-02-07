import Link from "next/link";
import { currentUser } from "@/lib/auth";

export function TopNav() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold">
          Campus Booking
        </Link>

        <nav className="flex gap-4 text-sm">
          <Link href="/">Dashboard</Link>
          <Link href="/rooms">Sale</Link>
          <Link href="/reservations">Rezerwacje</Link>

          {currentUser.role === "ROOM_OWNER" && (
            <Link href="/owner">Owner Panel</Link>
          )}

          {currentUser.role === "ADMIN" && (
            <Link href="/admin">Admin</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
