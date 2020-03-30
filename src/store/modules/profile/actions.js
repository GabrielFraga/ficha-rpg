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

export function editOtherFieldLevel(value) {
  return {
    type: '@level/OtherFieldEdit',
    value,
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

export function editOhterFieldResitence(id, value) {
  return {
    type: '@resistence/EDIT_OTHER',
    id,
    value,
  };
}

export function editDamageReduction(value) {
  return {
    type: '@combat/EDIT_DAMAGE_REDUCTION',
    value,
  };
}

export function editActionPoints(value) {
  return {
    type: '@combat/EDIT_ACTION_POINTS',
    value,
  };
}

export function editMeleeAttack(value) {
  return {
    type: '@combat/EDIT_MELEE',
    value,
  };
}

export function editRangeAttack(value) {
  return {
    type: '@combat/EDIT_RANGE',
    value,
  };
}

export function editArmorClas(value) {
  return {
    type: '@armor/EDIT_CLASS',
    value,
  };
}

export function selectSize(size) {
  return {
    type: '@size/SELECT',
    size,
  };
}
