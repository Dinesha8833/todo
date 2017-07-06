import * as React from 'react';
import PropTypes from 'prop-types';

const styles = require('./styles.css');

const ToDoItem = ({ todo }) => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <button className={styles.checked}>
        {
          todo.checked ?
            <i className={`fa fa-check-circle ${styles.checkedIcon}`} /> :
            <i className={`fa fa-check-circle-o ${styles.unCheckedIcon}`} />
        }
      </button>
      <h5 className={todo.checked ? styles.textChecked : styles.textUnChecked}>
        {todo.text}
      </h5>
    </div>
    { !todo.checked &&
      <div className={styles.buttonContainer}>
        <button className={styles.delete}>
          <i className={`fa fa-pencil-square-o ${styles.deleteIcon}`} />
        </button>
        <button className={styles.delete}>
          <i className={`fa fa-trash ${styles.deleteIcon}`} />
        </button>
      </div>
    }
  </div>
);

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ToDoItem;
