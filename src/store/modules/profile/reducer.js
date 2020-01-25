import produce from 'immer';
import { checkModificator } from '../../../services/DefaultHabilities';

const INITIAL_STATE = {
  name: [],
  age: null,
  level: null,
  race: [],
  habilities: [
    { name: 'Força', initialValue: 0, finalValue: 0, mod: -5 },
    { name: 'Destreza', initialValue: 0, finalValue: 0, mod: -5 },
    { name: 'Constituição', initialValue: 0, finalValue: 0, mod: -5 },
    { name: 'Inteligência', initialValue: 0, finalValue: 0, mod: -5 },
    { name: 'Sabedoria', initialValue: 0, finalValue: 0, mod: -5 },
    { name: 'Carisma', initialValue: 0, finalValue: 0, mod: -5 },
  ],
};
export default function editProfile(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@hability/EDIT': {
        const { name, value } = action;
        const modificator = checkModificator(value);

        const habilityIndex = draft.habilities.findIndex(p => p.name === name);

        draft.habilities[habilityIndex].value = value;
        draft.habilities[habilityIndex].mod = modificator;

        break;
      }
      default:
    }
  });
}
