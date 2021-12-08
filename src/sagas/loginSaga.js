import {put, call} from 'redux-saga/effects';
import {loginApi} from '../api/loginApi';
import * as types from '../actions';

export function* loginSaga(payload) {
  try {
    const response = yield call(loginApi, payload);
    yield put({type: types.LOGIN_USER_SUCCESS, response});
  } catch (error) {
    console.log(error);
    yield put({type: types.LOGIN_USER_ERROR, error});
  }
}
