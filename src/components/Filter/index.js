import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Filter = ({ type, name, handleFilter }) => {
  return (
    <div css={styles.tag}>
      {name}
      <button css={styles.button} onClick={handleFilter(type, 'remove', name)}>
        x
      </button>
    </div>
  );
};

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired
};

export default Filter;
