import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";
import Movie from "./movie";

const MovieList = ({ movies }) => (
  <Box m={3} mt={6}>
    {movies.map(
      movie =>
        movie.Title ? (
          <Movie key={movie.imdbID} title={movie.Title} year={movie.Year} id={movie.imdbID} poster={movie.Poster} />
        ) : null
    )}
  </Box>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MovieList;
