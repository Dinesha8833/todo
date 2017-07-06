import * as React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../ToDoItem';

const style = require('./styles.css');

const ToDoList = ({ todos, onEditToDo, onDeleteToDo }) => (
  <div className={style.container}>
    {
      todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onEditToDo={onEditToDo}
          onDeleteToDo={onDeleteToDo}
        />
      ))
    }
  </div>
);

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onEditToDo: PropTypes.func.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
};

export default ToDoList;
