import { createStore, combineReducers } from "redux";
import pageReducer from "./page-reducer";
import narcoticsReducer from "./narcotics-reducer";
import aboutUsReducer from "./aboutUs-reducer";
import { reducer as reduxFormReducer } from 'redux-form';
import faqPagereducer from "./faqPage-reducer";
import bookLectureReducer from "./bookLecture-reducer";

let reducers = combineReducers({
    pageReducer: pageReducer,
    narcoticsReducer: narcoticsReducer,
    aboutUsreducer: aboutUsReducer,
    faqPagereducer: faqPagereducer,
    bookLectureReducer: bookLectureReducer,
    form: reduxFormReducer,
});

let reduxStore = createStore(reducers);

export default reduxStore;