import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from "../actions/movies";

const movies = (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return [...action.response];
    case FETCH_MOVIES_ERROR:
      return {
        error: action.message
      };
    default:
      return state;
  }
};

export default movies;
