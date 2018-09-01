const FETCH_DETAILS_REQUEST = "FETCH_DETAILS_REQUEST";
const FETCH_DETAILS_SUCCESS = "FETCH_DETAILS_SUCCESS";
const FETCH_DETAILS_ERROR = "FETCH_DETAILS_ERROR";

const fetchDetailsRequest = id => ({
  type: FETCH_DETAILS_REQUEST,
  id
});

const fetchDetailsSuccess = response => ({
  type: FETCH_DETAILS_SUCCESS,
  response
});

const fetchDetailsError = e => ({
  type: FETCH_DETAILS_ERROR,
  message: e.message
});

const fetchDetails = id => async dispatch => {
  dispatch(fetchDetailsRequest(id));
  const url = `https://omdbapi.com/?apiKey=843baf87&i=${id}`;
  let data;

  try {
    data = await fetch(url);
    data = await data.json();
    dispatch(fetchDetailsSuccess(data));
  } catch (e) {
    dispatch(fetchDetailsError(e));
  }
};

export { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_ERROR, fetchDetails };
