import { combineReducers, createStore } from "redux";
import { fakeBookReducer } from "./reducers/fakeBookReducer";
const rootReducer = combineReducers({
    // khai bao reducer
    fakeBookReducer
})

export const store = createStore(rootReducer);