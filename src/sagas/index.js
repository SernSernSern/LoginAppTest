import {fork} from 'redux-saga/effects';
import watchUserAuthentication from './watcher';

export default function* startForm() {
  yield fork(watchUserAuthentication);
}
