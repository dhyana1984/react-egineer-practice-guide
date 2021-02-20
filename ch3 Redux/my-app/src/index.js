import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import AppWithHooks from './AppWithHooks'
import App_TODO from './todo/App_TODO'
import './todo/index.css'
import todoStore from './todo/store/store'


ReactDOM.render(
  <Provider store={todoStore}>
    <App_TODO />
  </Provider>,
  document.getElementById('root')
);

