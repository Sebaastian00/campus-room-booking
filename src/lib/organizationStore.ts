export type Organization = {
  id: string;
  name: string;
};

export let organizations: Organization[] = [
  { id: "1", name: "Uniwersytet Demo" }
];

export function addOrganization(name: string) {
  organizations.push({
    id: Date.now().toString(),
    name
  });
}
