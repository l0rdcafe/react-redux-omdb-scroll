import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_ERROR, FETCH_MOVIES_SUCCESS } from "../actions/loading";
import { FETCH_DETAILS_REQUEST, FETCH_DETAILS_ERROR, FETCH_DETAILS_SUCCESS } from "../actions/details";

const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
    case FETCH_DETAILS_REQUEST:
      return true;
    case FETCH_MOVIES_ERROR:
    case FETCH_MOVIES_SUCCESS:
    case FETCH_DETAILS_ERROR:
    case FETCH_DETAILS_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default loading;
