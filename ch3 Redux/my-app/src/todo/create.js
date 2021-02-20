import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import actions from './actions/actions'

function Create() {
    const [val, setVal] = useState("")
    const dispatch = useDispatch()

    const onChange = e => {
        setVal(e.target.value)
    }

    const onKeyDown = e => {
        const keyCode = e.key
        if (keyCode === 'Enter' && !!val.trim()) {
            dispatch({
                type: actions.TODO_ADD,
                title: val
            })
            setVal("")
        }
    }

    return (
        <div id="create-todo">
            <input
                id="new-todo"
                placeholder="Please input item"
                autoComplete="off"
                type="text"
                value={val}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}



export default Create