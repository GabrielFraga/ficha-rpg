export function editHability(name, value) {
  return {
    type: '@hability/EDIT',
    name,
    value,
  };
}
