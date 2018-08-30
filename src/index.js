import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/style.scss';
import registerServiceWorker from './registerServiceWorker';
import DevApp from './DevApp';

const renderApp = () => {
  ReactDOM.render(<DevApp />, document.getElementById('root'));
};

renderApp();
registerServiceWorker();
