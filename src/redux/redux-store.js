import { createStore, combineReducers } from "redux";
import pageReducer from "./page-reducer";
import narcoticsReducer from "./narcotics-reducer";

let reducers = combineReducers({
    pageReducer: pageReducer,
    narcoticsReducer: narcoticsReducer
});

let store = createStore(reducers);

window.store = store;
export default store;