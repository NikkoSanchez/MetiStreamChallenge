import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Dropdown extends Component {
  state = {
    show: false
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  setRef = node => {
    this.dropdownRef = node;
  };

  handleOutsideClick = ({ target }) => {
    if (this.dropdownRef && !this.dropdownRef.contains(target)) {
      this.setState({ show: false });
    }
  };

  handleSelected = value => () => {
    this.setState({ selected: value });
  };

  toggleDropdownMenu = event => {
    event.preventDefault();
    this.setState(prev => ({ show: !prev.show }));
  };

  render() {
    const { data, handleFilter, type } = this.props;
    const { show } = this.state;
    return (
      <div ref={this.setRef} css={styles.dropdown}>
        <div css={styles.button} onClick={this.toggleDropdownMenu}>
          {type}
        </div>
        {show ? (
          <ul css={styles.dropdownUl}>
            {data.map(val => (
              <li
                css={styles.item}
                key={val}
                name={val}
                onClick={handleFilter(type, 'add', val)}
              >
                {val}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFilter: PropTypes.func,
  type: PropTypes.string.isRequired
};

Dropdown.defaultProps = {
  handleFilter: () => {}
};
