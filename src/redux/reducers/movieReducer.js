import * as ActionTypes from "../constants/action-types";
const initialState = {
  movies: [],
  favourites: [],
  moviedetail: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      return { ...state, movies: payload };

    case ActionTypes.FAVOURITES:
      // const item = state.movies.find((product) => product.id === payload.id);
      // Check if Item is in cart already
      const infav = state.favourites.find((m) =>
        m.id === payload.id ? true : false
      );

      return {
        ...state,
        favourites: infav ? state.favourites : [...state.favourites, payload],
      };

    case ActionTypes.VIEW_DETAIL:
      return { ...state, moviedetail: payload };

    default:
      return state;
  }
};

// return {
//   ...state,
//   ...{
//     favourites: [...state.favourites, payload],
//   },
// };
