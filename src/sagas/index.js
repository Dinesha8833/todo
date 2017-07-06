import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store';
import apiSagas from '../api/saga';
import startup from '../modules/startup/sagas/startupSaga';

function* root() {
  yield fork(startup);
  yield fork(apiSagas);
}

const runRootSaga = () => sagaMiddleware.run(root);

export default runRootSaga;
