import { createStore, combineReducers } from "redux";
import pageReducer from "./page-reducer";
import narcoticsReducer from "./narcotics-reducer";
import {reducer as reduxFormReducer} from 'redux-form'

let reducers = combineReducers({
    pageReducer: pageReducer,
    narcoticsReducer: narcoticsReducer,
    form: reduxFormReducer,
});

let store = createStore(reducers);

window.store = store;
export default store;