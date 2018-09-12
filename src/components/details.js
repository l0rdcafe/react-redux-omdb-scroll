import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Nav from "./nav";
import Loading from "./loader";
import MovieDetails from "./movie-details";
import { setQuery } from "../actions/query";
import { fetchMovies } from "../actions/movies";
import { fetchDetails } from "../actions/details";

class Details extends React.Component {
  componentDidMount() {
    this.fetchDetails();
  }
  handleChange = e => {
    this.props.dispatch(setQuery(e.target.value));
  };
  fetchMovies = () => {
    const { page, query } = this.props.state;
    this.props.dispatch(fetchMovies(query, page));
  };
  fetchDetails = () => {
    const id = this.props.location.pathname.substring(1);
    this.props.dispatch(fetchDetails(id));
  };
  render() {
    const { loading, details } = this.props.state;
    return (
      <Fragment>
        <Nav handleChange={this.handleChange} fetchMovies={this.fetchMovies} />
        <Link style={{ position: "absolute", top: "130px", left: "50px", color: "black" }} href="/" to="/">
          <FaArrowLeft />
        </Link>
        {loading && <Loading />}
        {!loading &&
          !details.error && (
            <MovieDetails
              title={details.Title}
              year={details.Year}
              director={details.Director}
              genre={details.Genre}
              plot={details.Plot}
              actors={details.Actors}
              runtime={details.Runtime}
              rating={details.imdbRating}
              votes={details.imdbVotes}
              poster={details.Poster}
              writer={details.Writer}
            />
          )}
        {details.error && (
          <p style={{ fontWeight: "700", color: "red", textAlign: "center", marginTop: "100px" }}>
            {details.error} Please try again later.
          </p>
        )}
      </Fragment>
    );
  }
}

Details.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string
  }).isRequired,
  state: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    details: PropTypes.shape(PropTypes.object).isRequired
  }).isRequired
};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Details);
