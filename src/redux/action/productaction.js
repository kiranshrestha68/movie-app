import * as  ActionTypes  from "../constants/action-types";

export const getMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
  };
};

export const favourites = (movieID) => {
  return {
    type: ActionTypes.FAVOURITES,
    payload: movieID,
  }
};


export const viewdetail = (movie) => {
  return {
    type: ActionTypes.VIEW_DETAIL,
    payload: movie,
  }
};



