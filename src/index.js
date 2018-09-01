import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers";
import "./index.css";
import Root from "./root";

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
