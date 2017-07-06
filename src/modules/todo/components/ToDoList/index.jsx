import * as React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../ToDoItem';

const style = require('./styles.css');

const ToDoList = props => (
  <div className={style.container}>
    {
      props.todos.map(todo => <ToDoItem key={todo.id} todo={todo} />)
    }
  </div>
);

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default ToDoList;
