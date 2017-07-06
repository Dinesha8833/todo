import * as React from 'react';
import PropTypes from 'prop-types';
import linkState from '../../../../utils/linkState';

const styles = require('./styles.css');

class ToDoItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      toDoText: props.todo.text,
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
      this.props.onEditToDo(this.props.todo.id, this.state.toDoText, this.props.todo.checked);
    }

    this.setState({ isEditing: !this.state.isEditing });
  }

  onCheckedClick() {
    this.props.onEditToDo(this.props.todo.id, this.props.todo.text, !this.props.todo.checked);
  }

  onDeleteClick() {
    this.props.onDeleteToDo(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <button className={styles.checked} onClick={this.onCheckedClick}>
            {
              todo.checked ?
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
              {todo.text}
            </h5>
          </div>
        </div>
        { !todo.checked &&
          <div className={styles.buttonContainer}>
            <button className={styles.delete} onClick={this.onEditingClick}>
              <i className={`fa fa-pencil-square-o ${styles.deleteIcon}`} />
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
};

export default ToDoItem;
