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
} from '../actions/constants';

const initialState = {
  lists: [],
  items: [],
  isLoading: false,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_LIST_SUCCESS:
      return {
        ...state,
        lists: action.data,
        isLoading: false,
      };
    case GET_TODOS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        items: action.data,
        isLoading: false,
      };
    }
    case CREATE_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        items: [
          ...state.items,
          action.data,
        ],
        isLoading: false,
      };
    case EDIT_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        items: state.items.map((todo) => {
          const isItem = todo.id === action.data.id && todo.todo_id === action.data.todo_id;
          return isItem ? action.data : todo;
        }),
        isLoading: false,
      };
    case DELETE_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        items: state.items.filter(todo => (
          todo.id !== action.data.id || todo.todo_id !== action.data.todo_id
        )),
        isLoading: false,
      };
    case GET_TODOS_LIST_FAILURE:
    case GET_TODOS_FAILURE:
    case CREATE_TODO_FAILURE:
    case EDIT_TODO_FAILURE:
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default todos;
