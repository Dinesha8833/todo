import * as React from 'react';
// import PropTypes from 'prop-types';
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
      this.setState({ toDoText: '' });
    }
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

export default AddToDoForm;
