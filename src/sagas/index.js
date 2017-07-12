import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store';
import apiSagas from '../api/saga';
import startup from '../modules/startup/sagas/startupSaga';
import todo from '../modules/todo/saga';

function* root() {
  yield fork(startup);
  yield fork(apiSagas);
  yield fork(todo);
}

const runRootSaga = () => sagaMiddleware.run(root);

export default runRootSaga;
