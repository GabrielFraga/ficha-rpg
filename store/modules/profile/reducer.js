import produce from 'immer';

const INITIAL_STATE = {
  name: '',
  age: null,
  level: null,
  race: [],
  habilities: {
    habs: [],
  },
};
export default function editProfile(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@profile/EDIT_SUCCESS': {
        const { profile } = action;
        draft.push(profile);
        break;
      }
      default:
    }
  });
}
