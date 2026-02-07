export const rooms: any[] = [
  { id: "A1", name: "Sala A1", capacity: 20, ownerId: "2" },
  { id: "B2", name: "Sala B2", capacity: 40, ownerId: "3" },
];

export function addRoom(room: any) {
  rooms.push(room);
}
