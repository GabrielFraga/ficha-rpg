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

export function editAge(age) {
  return {
    type: '@age/EDIT',
    age,
  };
}
export function editLevel(level) {
  return {
    type: '@level/EDIT',
    level,
  };
}
export function editName(name) {
  return {
    type: '@name/EDIT',
    name,
  };
}
