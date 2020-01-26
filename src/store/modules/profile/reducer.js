import produce from 'immer';
import { checkModificator } from '../../../services/DefaultHabilities';

const INITIAL_STATE = {
  name: null,
  age: null,
  level: null,
  race: [{ name: null, info: null }],
  habilities: [
    {
      id: 1,
      name: 'Força',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
    },
    {
      id: 2,
      name: 'Destreza',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
    },
    {
      id: 3,
      name: 'Constituição',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
    },
    {
      id: 4,
      name: 'Inteligência',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
    },
    {
      id: 5,
      name: 'Sabedoria',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
    },
    {
      id: 6,
      name: 'Carisma',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
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

        const totalValue =
          value +
          hability.modificators.raceMod +
          hability.modificators.ageMod +
          hability.modificators.levelMod +
          hability.modificators.modelMod +
          hability.modificators.othersMod;

        const modificator = checkModificator(totalValue);

        hability.initialValue = value;
        hability.mod = modificator;
        hability.finalValue = totalValue;

        break;
      }
      case '@race/EDIT': {
        const { race } = action;
        draft.race = {
          name: race.value,
          info: race.racialInfo,
        };
        // draft.race.push({ name: race.value });
        // draft.race.push({ info: race.racialInfo });
        const newHabs = state.habilities.map((r, i) => ({
          ...r,
          finalValue: r.initialValue + race.habilities[i].value,
          mod: checkModificator(r.initialValue + race.habilities[i].value),
          modificators: {
            ...r.modificators,
            raceMod: race.habilities[i].value,
          },
        }));
        draft.habilities = newHabs;

        console.tron.log(draft);
        break;
      }

      case '@age/EDIT': {
        const { age } = action;

        draft.age = age;
        break;
      }

      case '@level/EDIT': {
        const { level } = action;

        draft.level = level;

        break;
      }
      case '@name/EDIT': {
        const { name } = action;

        draft.name = name;

        break;
      }
      default:
    }
  });
}
