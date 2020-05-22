import { combineReducers, createStore } from "redux";
import { getSearchInitialState, searchReducer } from "../reducers/search";

const store = createStore(combineReducers({search: searchReducer}), {search: getSearchInitialState()});

export default store;