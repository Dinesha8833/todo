import * as React from 'react';
import PropTypes from 'prop-types';
import linkState from '../../../../utils/linkState';

const styles = require('./styles.css');

class AddToDoForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toDoText: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const isEnterKey = (event.which === 13);
    if (isEnterKey && this.state.toDoText.length > 0) {
      this.props.onAddToDo({
        title: this.state.toDoText,
        sort_index: this.getNextSortIndex(),
        todo_id: this.props.currentList,
      });
      this.setState({ toDoText: '' });
    }
  }

  getNextSortIndex() {
    let nextSortIndex = 1;
    if (this.props.todos.length > 0) {
      nextSortIndex = this.props.todos.reduce((prev, current) => {
        const condition = prev.sort_index > current.sort_index;

        return condition ? prev : current;
      }).sort_index;
    }
    return nextSortIndex + 1;
  }

  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.plusIcon}>+</h4>
        <input
          className={styles.inputText}
          type="text"
          onKeyDown={this.onSubmit}
          {...linkState(this, 'toDoText')}
        />
      </div>
    );
  }
}

AddToDoForm.propTypes = {
  onAddToDo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  currentList: PropTypes.number.isRequired,
};

export default AddToDoForm;
