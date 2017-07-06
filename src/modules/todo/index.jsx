import * as React from 'react';
// import PropTypes from 'prop-types';
import Header from './components/Header';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList';

const style = require('./styles.css');

const ToDo = () => (
  <div className={style.container}>
    <Header />
    <AddToDoForm />
    <ToDoList />
  </div>
);

export default ToDo;
