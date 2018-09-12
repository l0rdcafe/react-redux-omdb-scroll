import React from "react";
import { Fixed, Input, Caps, ButtonCircle } from "rebass";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = ({ fetchMovies, handleChange }) => (
  <Fixed p={2} bg="black" color="white" top={0} style={{ width: "100%" }}>
    <Caps ml={2} fontSize={2} letterSpacing={2}>
      OMDB Scroll
    </Caps>
    <Input onChange={handleChange} m={2} bg="white" color="black" placeholder="Search a movie" width={[1 / 2, 1 / 5]} />
    <Link href="/" to="/">
      <ButtonCircle style={{ cursor: "pointer" }} color="black" bg="white" onClick={fetchMovies}>
        Search
      </ButtonCircle>
    </Link>
  </Fixed>
);

Nav.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Nav;
