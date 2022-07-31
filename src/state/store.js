import {
    applyMiddleware,
    createStore
} from "redux";
import {
    rootReducer
} from "./reducers";
import {
    initialState
} from "./constants";
import thunk from 'redux-thunk'
export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));