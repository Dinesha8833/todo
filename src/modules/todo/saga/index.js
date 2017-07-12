import { fork } from 'redux-saga/effects';
import watchApi from './todoSaga';

export default function* () {
  yield fork(watchApi);
}
