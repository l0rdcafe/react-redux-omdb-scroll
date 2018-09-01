import { FETCH_DETAILS_SUCCESS, FETCH_DETAILS_ERROR } from "../actions/details";

const details = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DETAILS_SUCCESS:
      return { ...action.response };
    case FETCH_DETAILS_ERROR:
      return { error: action.message };
    default:
      return state;
  }
};

export default details;
