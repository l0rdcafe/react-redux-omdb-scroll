import React from "react";
import { Container, Drawer, Subhead, Image, Heading, Blockquote, Small, Text, Divider } from "rebass";
import PropTypes from "prop-types";

const MovieDetails = ({ title, year, director, actors, genre, plot, poster, writer, rating, votes, runtime }) => (
  <Container mt={6} style={{ paddingRight: "25%" }}>
    <Drawer p={4} open side="right" bg="black">
      <Image src={poster} alt={`Movie poster for ${title}`} />
      <Subhead mt={4} style={{ textAlign: "center" }}>
        Starring:
      </Subhead>
      {actors &&
        actors.split(", ").map(actor => (
          <p key={actor} style={{ textAlign: "center" }}>
            {actor}
          </p>
        ))}
    </Drawer>
    <Heading>
      {title} <Small>{year}</Small>{" "}
    </Heading>
    <Blockquote style={{ maxWidth: "70%" }}>{plot}</Blockquote>
    <Divider borderColor="black" />
    <Text>
      <span style={{ fontWeight: "bold" }}>Directed by</span> {director}
    </Text>
    <Text style={{ maxWidth: "70%" }}>
      <span style={{ fontWeight: "bold" }}>Written by</span> {writer}
    </Text>
    <Divider borderColor="black" />
    <Text>
      <span style={{ fontWeight: "bold" }}>Runtime:</span> {runtime} –{" "}
      <span style={{ fontWeight: "bold" }}>Genre:</span> {genre}
    </Text>
    <Text>
      <span style={{ fontWeight: "bold" }}>Rating:</span> {rating}/10 –{" "}
      <span style={{ fontWeight: "bold" }}>Votes:</span> {votes}
    </Text>
  </Container>
);

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  votes: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired
};

export default MovieDetails;
