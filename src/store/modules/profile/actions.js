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

export function editLevel(level, xp) {
  return {
    type: '@level/EDIT',
    level,
    xp,
  };
}

export function editUseXP(value) {
  return {
    type: '@level/USEXP',
    value,
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

export function editClass(
  id,
  name,
  initialLifePoints,
  lifePointsEachLevel,
  trainedExpertise,
) {
  return {
    type: '@class/EDIT',
    id,
    name,
    initialLifePoints,
    lifePointsEachLevel,
    trainedExpertise,
  };
}

export function editClassLevel(id, level) {
  return {
    type: '@class/LEVEL_EDIT',
    id,
    level,
  };
}

export function deleteClass(id) {
  return {
    type: '@class/DELETE',
    id,
  };
}
