import { combineReducers } from 'redux';
import todos from '../modules/todo/reducer';

const reducers = {
  todos,
};

export default combineReducers(reducers);
