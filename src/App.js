import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setQuery } from "./actions/query";
import MovieList from "./movie-list";
import Nav from "./nav";
import { fetchMovies } from "./actions/movies";

class App extends Component {
  fetchMovies = () => {
    const { page, query } = this.props.state;
    this.props.dispatch(fetchMovies(query, page));
  };
  handleChange = e => {
    this.props.dispatch(setQuery(e.target.value));
  };
  render() {
    const { loading, movies } = this.props.state;
    return (
      <Fragment>
        <Nav handleChange={this.handleChange} fetchMovies={this.fetchMovies} />
        {loading && (
          <p style={{ fontWeight: "700", textAlign: "center", marginTop: movies.length === 0 ? "100px" : "0" }}>
            Loading...
          </p>
        )}
        {!loading && !movies.error && <MovieList movies={movies} />}
        {movies.error && (
          <p style={{ fontWeight: "700", color: "red", textAlign: "center", marginTop: "100px" }}>
            {movies.error} Please try again later.
          </p>
        )}
        {movies.length > 0 &&
          movies[0].Response === "False" && (
            <p style={{ fontWeight: "700", color: "red", textAlign: "center", marginTop: "100px" }}>
              {movies[0].Error} Please try again later.
            </p>
          )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ state });

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
};

export default connect(mapStateToProps)(App);
