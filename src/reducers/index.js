import { combineReducers } from "redux";
import movies from "./movies";
import loading from "./loading";
import query from "./query";
import details from "./details";

export default combineReducers({ movies, loading, query, details });
