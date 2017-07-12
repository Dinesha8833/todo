import * as React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../ToDoItem';

const style = require('./styles.css');

const ToDoList = ({ todos, onEditToDo, onDeleteToDo, onComplete }) => (
  <div className={style.container}>
    {
      todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onEditToDo={onEditToDo}
          onDeleteToDo={onDeleteToDo}
          onComplete={onComplete}
        />
      ))
    }
  </div>
);

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onEditToDo: PropTypes.func.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default ToDoList;
