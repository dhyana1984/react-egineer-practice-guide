import React from 'react'
import { connect } from "react-redux"
import actions from './actions';

function App(props) {
  const { count, dispatch } = props
  return (
    <div>
      <button
        onClick={() => dispatch({ type: actions.COUNT_REDUCE })}
      >
        -
      </button>
      <span style={{ marginLeft: 10, marginRight: 10 }}>{count}</span>
      <button
        onClick={() => dispatch({ type: actions.COUNT_PLUS })}
      >
        +
      </button>
    </div>
  )
}
// connect(state => state) connect has a callback function as param  
// connect will return state to the callback function from store
// connect return a function which receive a param, the param is the Component who need state and dispatch
// this Component will receive the props from parent and state/dispatch from store
// then connect return a new Component
App = connect(state => state)(App)
export default App;
