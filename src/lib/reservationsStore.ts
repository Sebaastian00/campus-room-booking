export const reservations: any[] = [
  {
    id: 1,
    roomId: "A1",
    room: "Sala A1",
    date: "2026-02-10",
    time: "10:00 - 12:00",
    user: "Jan Kowalski",
    status: "pending",
  },
  {
    id: 2,
    roomId: "B2",
    room: "Sala B2",
    date: "2026-02-11",
    time: "08:00 - 09:30",
    user: "Anna Nowak",
    status: "pending",
  },
];

export function updateReservationStatus(id: number, status: string) {
  const res = reservations.find((r) => r.id === id);
  if (res) res.status = status;
}
