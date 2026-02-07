export type Role = "ADMIN" | "ROOM_OWNER" | "USER";

export type User = {
  id: string;
  name: string;
  role: Role;
};

export let users: User[] = [
  { id: "1", name: "Admin User", role: "ADMIN" },
  { id: "2", name: "Jan Kowalski", role: "USER" },
  { id: "3", name: "Anna Nowak", role: "USER" }
];

export function setUserRole(id: string, role: Role) {
  users = users.map(u =>
    u.id === id ? { ...u, role } : u
  );
}
