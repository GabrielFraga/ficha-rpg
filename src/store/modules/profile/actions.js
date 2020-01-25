export function editHability(name, value) {
  return {
    type: '@hability/EDIT',
    name,
    value,
  };
}
export function editRace(race) {
  return {
    type: '@race/EDIT',
    race,
  };
}
