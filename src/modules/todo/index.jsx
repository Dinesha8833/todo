import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList';
import Loader from './components/Loader';
import {
  createTodoItemForList,
  editTodoItem,
  // changeSortIndexOfTodoItem,
  changeCompleteStatusTodoItem,
  deleteTodoItem,
  getTodosList,
} from './actions';

const style = require('./styles.css');

class ToDo extends React.Component {

  componentWillMount() {
    this.props.getToDoLists();
  }

  render() {
    return (
      <div className={style.container}>
        <Loader showLoader={this.props.isLoading} />
        <Header />
        <AddToDoForm
          onAddToDo={this.props.onAddToDo}
          currentList={this.props.currentList}
          todos={this.props.todos}
        />
        <ToDoList
          todos={this.props.todos}
          onEditToDo={this.props.onEditToDo}
          onComplete={this.props.onComplete}
          onDeleteToDo={this.props.onDeleteToDo}
        />
      </div>
    );
  }
}

ToDo.propTypes = {
  todos: PropTypes.array.isRequired,
  currentList: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getToDoLists: PropTypes.func.isRequired,
  onAddToDo: PropTypes.func.isRequired,
  onEditToDo: PropTypes.func.isRequired,
  // onChangeSortOrder: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos.items,
  currentList: 1,
  isLoading: state.todos.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getToDoLists: () => dispatch(getTodosList()),
  onAddToDo: todo => dispatch(createTodoItemForList(todo)),
  onEditToDo: todo => dispatch(editTodoItem(todo)),
  // onChangeSortOrder: todo => dispatch(changeSortIndexOfTodoItem(todo)),
  onComplete: todo => dispatch(changeCompleteStatusTodoItem(todo)),
  onDeleteToDo: todo => dispatch(deleteTodoItem(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
