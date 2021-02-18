import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import AppWithHooks from './AppWithHooks'


ReactDOM.render(
  <Provider store={store}>
    <AppWithHooks />
  </Provider>,
  document.getElementById('root')
);

