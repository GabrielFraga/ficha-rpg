export const Habs = [
  { name: 'Força', value: 0, mod: -5 },
  { name: 'Destreza', value: 0, mod: -5 },
  { name: 'Constituição', value: 0, mod: -5 },
  { name: 'Inteligência', value: 0, mod: -5 },
  { name: 'Sabedoria', value: 0, mod: -5 },
  { name: 'Carisma', value: 0, mod: -5 },
];

export const checkModificator = value => {
  let newMod = 0;

  switch (Number(value)) {
    case 1:
      newMod = -5;
      break;
    case 2:
    case 3:
      newMod = -4;
      break;
    case 4:
    case 5:
      newMod = -3;
      break;
    case 6:
    case 7:
      newMod = -2;
      break;
    case 8:
    case 9:
      newMod = -1;
      break;
    case 10:
    case 11:
      newMod = 0;
      break;
    case 12:
    case 13:
      newMod = 1;
      break;
    case 14:
    case 15:
      newMod = 2;
      break;
    case 16:
    case 17:
      newMod = 3;
      break;
    case 18:
    case 19:
      newMod = 4;
      break;
    case 20:
    case 21:
      newMod = 5;
      break;
    case 22:
    case 23:
      newMod = 6;
      break;
    case 24:
    case 25:
      newMod = 7;
      break;
    default:
      newMod = 0;
  }
  return newMod;
};
