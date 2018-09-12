import React from "react";
import { Card, Image, Subhead, Small, Row, Column } from "rebass";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ title, year, poster, id }) => (
  <Card>
    <Row>
      <Column flex={1}>
        <Image width={128} src={poster} alt={`Movie poster for ${title}`} />
      </Column>
      <Column flex={1}>
        <Link href={`/${id}`} to={`/${id}`}>
          <Subhead style={{ display: "inline-block" }} color="black">
            {title}
          </Subhead>
        </Link>
      </Column>
      <Column flex={1}>
        <Small>Year: {year}</Small>
      </Column>
    </Row>
  </Card>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Movie;
