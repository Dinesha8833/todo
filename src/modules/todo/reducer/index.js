import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../actions/constants';

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          checked: action.id % 2 === 0,
        },
      ];
    case EDIT_TODO:
      return state.map(todo => (todo.id === action.id
          ? { ...todo, text: action.text, checked: action.checked }
          : todo
      ));
    case DELETE_TODO:
      return state.map(todo => (todo.id === action.id
          ? { ...todo, text: action.text, checked: action.checked }
          : todo
      ));
    default:
      return state;
  }
};

export default todos;
