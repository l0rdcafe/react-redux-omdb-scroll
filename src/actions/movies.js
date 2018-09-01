const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

const fetchMoviesRequest = query => ({
  type: FETCH_MOVIES_REQUEST,
  query
});
const fetchMoviesSuccess = response => ({
  type: FETCH_MOVIES_SUCCESS,
  response
});

const fetchMoviesError = e => ({
  type: FETCH_MOVIES_ERROR,
  message: e.message
});

const fetchMovies = (query, page) => async dispatch => {
  dispatch(fetchMoviesRequest(query));
  const url = `https://omdbapi.com/?apiKey=843baf87&s=${query}&=${page}`;
  let data;

  try {
    data = await fetch(url);
    data = await data.json();
    data = data.Search || data;
    dispatch(fetchMoviesSuccess(data));
  } catch (e) {
    dispatch(fetchMoviesError(e));
  }
};

export { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR, FETCH_MOVIES_REQUEST, fetchMovies };
