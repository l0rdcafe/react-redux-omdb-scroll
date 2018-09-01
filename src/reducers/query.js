import { SET_QUERY } from "../actions/query";

const query = (state = "", action) => {
  switch (action.type) {
    case SET_QUERY:
      return action.query;
    default:
      return state;
  }
};

export default query;
