import { put, takeEvery } from 'redux-saga/effects';
import { GET_TODOS_LIST_SUCCESS } from '../actions/constants';
import { getTodoItemForList } from '../actions';

function* getTodoItemForFirstList() {
  yield put(getTodoItemForList(1));
}
export default function* watchApi() {
  yield takeEvery(GET_TODOS_LIST_SUCCESS, getTodoItemForFirstList);
}
