import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fakeBookReducer } from "./reducers/fakeBookReducer";
import { phimReducer } from "./reducers/phimReducer";

// cài đặt Middleware
const rootReducer = combineReducers({
    // khai bao reducer
    fakeBookReducer,
    phimReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));