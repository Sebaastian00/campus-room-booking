import Link from "next/link";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/rooms", label: "Sale" },
  { href: "/reservations", label: "Rezerwacje" },
  { href: "/admin", label: "Admin" },
];

export function TopNav() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <Link href="/" className="text-lg font-bold">
          Campus Booking
        </Link>

        <nav className="flex gap-4 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
