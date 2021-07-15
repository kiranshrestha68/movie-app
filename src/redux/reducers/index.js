import {combineReducers} from "redux";
import {movieReducer} from "./movieReducer"



const reducers = combineReducers({
    allmovies: movieReducer,
})

export default reducers;