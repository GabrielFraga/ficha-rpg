import produce from 'immer';
import { checkModificator } from '../../../services/DefaultHabilities';

const INITIAL_STATE = {
  name: [],
  age: null,
  level: null,
  race: [],
  habilities: [
    {
      id: 1,
      name: 'Força',
      initialValue: 0,
      raceMod: 0,
      finalValue: 0,
      mod: -5,
    },
    {
      id: 2,
      name: 'Destreza',
      initialValue: 0,
      raceMod: 0,
      finalValue: 0,
      mod: -5,
    },
    {
      id: 3,
      name: 'Constituição',
      initialValue: 0,
      raceMod: 0,
      finalValue: 0,
      mod: -5,
    },
    {
      id: 4,
      name: 'Inteligência',
      initialValue: 0,
      raceMod: 0,
      finalValue: 0,
      mod: -5,
    },
    {
      id: 5,
      name: 'Sabedoria',
      initialValue: 0,
      raceMod: 0,
      finalValue: 0,
      mod: -5,
    },
    {
      id: 6,
      name: 'Carisma',
      initialValue: 0,
      raceMod: 0,
      finalValue: 0,
      mod: -5,
    },
  ],
};
export default function editProfile(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@hability/EDIT': {
        const { name, value } = action;

        const habilityIndex = draft.habilities.findIndex(p => p.name === name);

        const hability = draft.habilities[habilityIndex];

        const modificator = checkModificator(value + hability.raceMod);

        hability.initialValue = value;
        hability.mod = modificator;
        hability.finalValue = value + hability.raceMod;

        break;
      }
      case '@race/EDIT': {
        const { race } = action;

        draft.race = race.value;

        const newHabs = state.habilities.map((r, i) => ({
          ...r,
          raceMod: race.habilities[i].value,
          finalValue: r.initialValue + race.habilities[i].value,
          mod: checkModificator(r.initialValue + race.habilities[i].value),
        }));
        draft.habilities = newHabs;

        break;
      }

      default:
    }
  });
}
