import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import actions from './actions';

function App() {
    // useSelector hook is like connect, receive a callback function, this callback will be called by useSelector
    // the state in store will return to this callback. the return value of callback is the state value which is needed in logic
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <p>react redux hook</p>
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

export default App;
