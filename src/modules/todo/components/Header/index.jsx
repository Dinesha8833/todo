import * as React from 'react';
// import PropTypes from 'prop-types';

const styles = require('./styles.css');

const Header = () => (
  <div className={styles.container}>
    <h5 className={styles.title}>Task Manager</h5>
    <button className={styles.addButton}>+</button>
  </div>
);

export default Header;
