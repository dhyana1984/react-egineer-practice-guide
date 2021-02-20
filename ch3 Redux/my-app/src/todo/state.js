import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from './actions/actions'
function State() {
    const data = useSelector(state => state)
    const unDone = data.filter(item => (!item.done))
    const done = data.filter(item => item.done)
    const dispatch = useDispatch()

    const onRemoveDoneItem = () => {
        dispatch({
            type: actions.TODO_REMOVE_DONE
        })
    }
    return (
        <div id="todo-stats">
            <span className="todo-count">
                <span className="number">{unDone?.length}</span>
                <span className="word">Uncompleted</span>
            </span>
            {
                done?.length > 0 &&
                <span className="todo-clear">
                    <a
                        href="#"
                        onClick={onRemoveDoneItem}
                    >
                        Clear
                    <span> {done?.length} Completed</span>
                    </a>
                </span>
            }

        </div>
    )
}

export default State