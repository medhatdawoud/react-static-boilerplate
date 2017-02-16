import 'babel-polyfill';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';

import store from './store';
import routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('container')
);

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
FastClick.attach(document.body);

