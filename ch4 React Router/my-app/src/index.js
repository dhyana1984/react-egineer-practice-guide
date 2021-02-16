import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import CustomizedHookSample from './customize-hook'
import ControlledComponentSample from './controlled-component'
import UncontrolledComponentSample from './uncontrolled-component'
import UseEffectSample from './useEffect-Sample'


ReactDOM.render(
  <React.StrictMode>
    <UseEffectSample />
  </React.StrictMode>,
  document.getElementById('root')
);

