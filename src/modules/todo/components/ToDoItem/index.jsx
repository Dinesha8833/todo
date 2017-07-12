import * as React from 'react';
import PropTypes from 'prop-types';
import linkState from '../../../../utils/linkState';

const styles = require('./styles.css');

class ToDoItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      toDoText: props.todo.title,
    };

    this.onEditingClick = this.onEditingClick.bind(this);
    this.onCheckedClick = this.onCheckedClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidUpdate() {
    if (this.state.isEditing) {
      this.textInput.focus();
    }
  }

  onEditingClick() {
    if (this.state.isEditing) {
      this.props.onEditToDo({
        todo_id: this.props.todo.todo_id,
        id: this.props.todo.id,
        title: this.state.toDoText,
      });
    }

    this.setState({ isEditing: !this.state.isEditing });
  }

  onCheckedClick() {
    this.props.onComplete(this.props.todo);
  }

  onDeleteClick() {
    this.props.onDeleteToDo(this.props.todo);
  }

  render() {
    const { todo } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <button className={styles.checked} onClick={this.onCheckedClick} disabled={todo.aasm_state === 'completed'}>
            {
              todo.aasm_state === 'completed' ?
                <i className={`fa fa-check-circle ${styles.checkedIcon}`} /> :
                <i className={`fa fa-check-circle-o ${styles.unCheckedIcon}`} />
            }
          </button>
          <input
            ref={input => (this.textInput = input)}
            className={`${styles.inputText} ${this.state.isEditing ? '' : styles.hide}`}
            type="text"
            onKeyDown={this.onSubmit}
            {...linkState(this, 'toDoText')}
          />
          <div className={this.state.isEditing ? styles.hide : styles.showText}>
            <h5 className={todo.checked ? styles.textChecked : styles.textUnChecked}>
              {this.state.toDoText}
            </h5>
          </div>
        </div>
        { todo.aasm_state !== 'completed' &&
          <div className={styles.buttonContainer}>
            <button className={styles.delete} onClick={this.onEditingClick}>
              <i
                className={`${this.state.isEditing ?
                  'fa fa-floppy-o' :
                  'fa fa-pencil-square-o'} ${styles.deleteIcon}`}
              />
            </button>
            <button className={styles.delete} onClick={this.onDeleteClick}>
              <i className={`fa fa-trash ${styles.deleteIcon}`} />
            </button>
          </div>
        }
      </div>
    );
  }
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onEditToDo: PropTypes.func.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default ToDoItem;
