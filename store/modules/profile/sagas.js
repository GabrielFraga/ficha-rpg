import { call, put, select, all, takeLatest } from 'redux-saga/effects';

import { editProfileSuccess } from './actions';

function* editProfileMiddlewere(profile) {
  yield put(editProfileSuccess(profile));
}

export default all([
  takeLatest('@profile/EDIT_REQUEST', editProfileMiddlewere),
]);
