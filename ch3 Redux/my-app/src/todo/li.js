import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import actions from './actions/actions'


function Li(props) {
    let { id, title, done } = props
    const [isEdit, changeEdit] = useState(false)
    const dispatch = useDispatch()
    let edit = useRef()
    let [val, setVal] = useState(title)
    // when double click item, useEffect listen the isEdit changing
    // if isEdit is changing, the edit input will trigger focus event
    useEffect(() => {
        if (isEdit) {
            edit.current.focus()
        }
    }, [isEdit])

    // when add new todo item, the data dispatch to store directly
    const onAddItemTitle = (e) => {
        dispatch({
            type: actions.TODO_DONE,
            id,
            done: e.target.checked
        })
    }

    //when edit todo item, the data was saved in val state without dispatch to store directly
    //the data dispatch to store when onblur
    const onEditItemTitle = (e) => {
        setVal(e.target.value)
    }

    const onDestoryItem = () => {
        dispatch({
            type: actions.TODO_REMOVE,
            id
        })
    }

    const onEditItemBlur = () => {
        // if the value after edit is not empty, dispatch to store
        if (val.trim()) {
            dispatch({
                type: actions.TODO_EDIT,
                id,
                title: val
            })
        } else {
            // revert the item value if it's empty
            setVal(title)
        }
        changeEdit(false)
    }

    return (
        <li className={isEdit ? "editing" : ""}>
            <div className={`todo ${done && "done"}`}>
                <div className="display">
                    <input
                        className="check"
                        type="checkbox"
                        checked={done}
                        onChange={onAddItemTitle}
                    />
                    <div
                        className="todo-content"
                        onDoubleClick={() => changeEdit(true)}
                    >
                        {title}
                    </div>
                    <span
                        className="todo-destroy"
                        onClick={onDestoryItem}
                    >
                    </span>
                </div>
                <div className="edit">
                    <input
                        className="todo-input"
                        type="text"
                        //using edit ref to manage onfocus event
                        ref={edit}
                        //using val state to manage the title value
                        value={val}
                        onChange={onEditItemTitle}
                        onBlur={onEditItemBlur}
                    />
                </div>
            </div>
        </li>
    )
}

export default Li