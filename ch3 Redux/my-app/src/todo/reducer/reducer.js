import actions from "../actions/actions";

function reducer(state = [], action) {
    let item
    switch (action.type) {
        case actions.TODO_ADD:
            return [...state, { id: Date.now(), title: action.title, done: false }]
        case actions.TODO_DONE:
            item = state.find(t => t.id === action.id)
            item.done = action?.done
            return [...state]
        case actions.TODO_EDIT:
            item = state.find(t => t.id === action.id)
            item.title = action.title
            return [...state]
        case actions.TODO_REMOVE:
            return state.filter(t => t.id !== action.id)
        case actions.TODO_REMOVE_DONE:
            return state.filter(t => !t.done)
        default:
            return state
    }
}

export default reducer