import * as React from 'react';
import PropTypes from 'prop-types';

const styles = require('./styles.css');

const Loader = props => (props.showLoader &&
  <div className={styles.container}>
    <div className={styles.spinnerWrapper}>
      <i className={`fa fa-gear fa-spin ${styles.spinner}`} />
    </div>
  </div>
);

Loader.propTypes = {
  showLoader: PropTypes.bool.isRequired,
};

export default Loader;
