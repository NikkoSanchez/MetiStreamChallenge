import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import styles from './styles';
import { Route, Redirect } from 'react-router-dom';
import SearchPage from './views/Search';

export default class App extends Component {
  render() {
    return (
      <div css={styles.container}>
        <NavigationBar />
        <div
          css={{
            position: 'absolute',
            top: '75px',
            bottom: '0',
            width: '100%'
          }}
        >
          <Route path="/" render={() => <Redirect to="/search" />} />
          <Route path="/search" component={SearchPage} />
          <Route
            path="/insights"
            render={() => (
              <div css={{ fontSize: '30px', textAlign: 'center' }}>
                Coming Soon
              </div>
            )}
          />
          <Route
            path="/data"
            render={() => (
              <div css={{ fontSize: '30px', textAlign: 'center' }}>
                Coming Soon
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}
