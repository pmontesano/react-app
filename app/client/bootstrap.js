/* eslint-env browser */
/* eslint-disable no-underscore-dangle */
const React = require('react');
const ReactDOM = require('react-dom');

module.exports = function bootstrap(Component) {
  const preloadedState = window.__PRELOADED_STATE__;
  ReactDOM.hydrate(<Component {...preloadedState} />, document.getElementById('root-app'));
};