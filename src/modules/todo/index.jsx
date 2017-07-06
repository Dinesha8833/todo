import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList';
import { addToDo } from './actions';

const style = require('./styles.css');

const ToDo = props => (
  <div className={style.container}>
    <Header />
    <AddToDoForm onAddToDo={props.onAddToDo} />
    <ToDoList todos={props.todos} />
  </div>
);

ToDo.propTypes = {
  todos: PropTypes.array.isRequired,
  onAddToDo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onAddToDo: todo => dispatch(addToDo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
