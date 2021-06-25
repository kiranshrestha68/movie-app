import {ActionTypes} from "../constants/action-types";

export const getMovies = (movies) => {
return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
}
}