import { createStore } from "redux"
import actions from "./actions";
function countFn(state = { count: 1 }, action) {
    switch (action.type) {
        case actions.COUNT_PLUS:
            return { count: state.count + 1 }
        case actions.COUNT_REDUCE:
            return { count: state.count - 1 }
    }
    return state
}

const store = createStore(countFn)
export default store