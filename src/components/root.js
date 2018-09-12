import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./app";
import Details from "./details";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route path="/" exact component={App} />
        <Route path="/:id" component={Details} />
      </Fragment>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    replaceReducer: PropTypes.func.isRequired,
    Symbol: PropTypes.func
  }).isRequired
};

export default Root;
