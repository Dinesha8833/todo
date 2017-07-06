import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './constants';

let nextTodoId = 0;

export const addToDo = (text) => {
  nextTodoId += 1;
  return {
    type: ADD_TODO,
    id: nextTodoId,
    text,
  };
};

export const editToDo = todo => ({
  type: EDIT_TODO,
  todo,
});

export const deleteToDo = id => ({
  type: DELETE_TODO,
  id,
});
