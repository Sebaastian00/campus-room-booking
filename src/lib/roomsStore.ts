export type Room = {
  id: string;
  name: string;
  capacity: number;
  organizationId: string;
  ownerId?: string;
};

export let rooms: Room[] = [
  {
    id: "1",
    name: "Sala A1",
    capacity: 30,
    organizationId: "1",
    ownerId: "1"
  }
];

export function addRoom(name: string, capacity: number, organizationId: string) {
  rooms.push({
    id: Date.now().toString(),
    name,
    capacity,
    organizationId
  });
}
