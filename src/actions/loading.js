const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";
const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";

const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST
});

const fetchMoviesError = error => ({
  type: FETCH_MOVIES_ERROR,
  message: error.message
});

export { FETCH_MOVIES_ERROR, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, fetchMoviesRequest, fetchMoviesError };
