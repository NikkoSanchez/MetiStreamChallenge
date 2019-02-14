import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';
import gear from '../../assets/gearIcon.svg';
import user from '../../assets/user.svg';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // buttonArr will store the value of Button
      buttonArr: ['search', 'insights', 'data'],
      selected: 'search'
    };
  }

  handleSelected = ({ target: { value } }) => {
    this.setState({ selected: value });
  };

  render() {
    const { buttonArr, selected } = this.state;

    return (
      <div css={styles.navBar}>
        <span css={styles.logo}>Ember</span>
        <div css={styles.buttonsGroup}>
          {buttonArr.map(val => {
            const isSelected = val === selected;
            return (
              <Link to={`/${val}`} key={val}>
                <button
                  value={val}
                  css={[
                    styles.button,
                    isSelected ? styles.selectedButton : null
                  ]}
                  onClick={this.handleSelected}
                >
                  {val}
                </button>
              </Link>
            );
          })}
        </div>
        <div css={styles.settings}>
          <span css={{ color: 'gray', marginRight: '5px' }}>|</span>
          <img css={styles.gear} src={gear} />
          <span css={{ color: 'gray', marginLeft: '5px', marginRight: '5px' }}>
            |
          </span>
          <span css={styles.username}>Username</span>
          <img css={styles.user} src={user} />
        </div>
      </div>
    );
  }
}
