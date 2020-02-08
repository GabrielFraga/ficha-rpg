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
export function editOtherMod({ id, value }) {
  return {
    type: '@otherMod/EDIT',
    id,
    value,
  };
}

export function editLevelMod({ id, level }) {
  return {
    type: '@levelMod/EDIT',
    id,
    inputLevel: level,
  };
}

export function createClass() {
  return {
    type: '@class/CREATE',
  };
}

export function editClass(id, name) {
  return {
    type: '@class/EDIT',
    id,
    name,
  };
}

export function editClassLevel(id, level) {
  return {
    type: '@class/LEVEL_EDIT',
    id,
    level,
  };
}
