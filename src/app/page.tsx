import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-slate-600">
        Starter aplikacji do rezerwacji sal (uczelnia / mała firma).
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link
          href="/rooms"
          className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">Sale</h2>
          <p className="mt-1 text-slate-600">Przeglądaj dostępne sale.</p>
        </Link>

        <Link
          href="/reservations"
          className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">Rezerwacje</h2>
          <p className="mt-1 text-slate-600">
            Lista rezerwacji i tworzenie nowych.
          </p>
        </Link>

        <Link
          href="/admin"
          className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">Admin</h2>
          <p className="mt-1 text-slate-600">
            Zarządzanie salami i użytkownikami.
          </p>
        </Link>
      </div>
    </main>
  );
}
