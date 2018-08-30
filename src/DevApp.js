import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import { rehydrate, hotRehydrate } from 'rfx-core';
import { isProduction } from './Constants';
import App from './App';
// eslint-disable-next-line no-unused-vars
import stores from './stores';

const store = rehydrate();

class DevApp extends React.Component {
  render() {
    return (
      <AppContainer>
        <Router>
          <Provider store={isProduction ? store : hotRehydrate()}>
            <div className="root-container">
              <App />
            </div>
          </Provider>
        </Router>
      </AppContainer>
    );
  }
}

export default DevApp;
