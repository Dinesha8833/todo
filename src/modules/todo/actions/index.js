import {
  GET_TODOS_LIST,
  GET_TODOS_LIST_SUCCESS,
  GET_TODOS_LIST_FAILURE,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  EDIT_TODO,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAILURE,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
} from './constants';
import {
  getApiAction,
  postApiAction,
  deleteApiAction,
  patchApiAction,
} from '../../../api/actions';

export const getTodosList = () => getApiAction({
  types: [GET_TODOS_LIST, GET_TODOS_LIST_SUCCESS, GET_TODOS_LIST_FAILURE],
  url: '/todos',
});

export const getTodoItemForList = id => getApiAction({
  types: [GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_FAILURE],
  url: `/todos/${id}/items`,
});

export const createTodoItemForList = todo => postApiAction({
  types: [CREATE_TODO, CREATE_TODO_SUCCESS, CREATE_TODO_FAILURE],
  url: `/todos/${todo.todo_id}/items`,
  body: {
    title: todo.title,
    sort_index: todo.sort_index,
  },
});

export const editTodoItem = todo => patchApiAction({
  types: [EDIT_TODO, EDIT_TODO_SUCCESS, EDIT_TODO_FAILURE],
  url: `/todos/${todo.todo_id}/items/${todo.id}`,
  body: {
    title: todo.title,
  },
});

export const changeSortIndexOfTodoItem = todo => patchApiAction({
  types: [EDIT_TODO, EDIT_TODO_SUCCESS, EDIT_TODO_FAILURE],
  url: `/todos/${todo.todo_id}/items/${todo.id}`,
  body: {
    sort_index: todo.sort_index,
  },
});

export const changeCompleteStatusTodoItem = todo => patchApiAction({
  types: [EDIT_TODO, EDIT_TODO_SUCCESS, EDIT_TODO_FAILURE],
  url: `/todos/${todo.todo_id}/items/${todo.id}/complete`,
});

export const deleteTodoItem = todo => deleteApiAction({
  types: [DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE],
  url: `/todos/${todo.todo_id}/items/${todo.id}`,
});
