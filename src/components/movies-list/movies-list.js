import React from "react";
import { connect } from "react-redux";

import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";
import { MovieCard } from "../movie-card/movie-card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../navbar/navbar";
import "./movies-list.css"

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== "") {
    filteredMovies = movies.filter((m) =>
      m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
    );
  }

  if (!movies) return <div className="main-view" />;

  return (
    <>
      <NavBar />
      {/* <div className="spacer">S</div>
      <div className="spacer">S</div>
      <div className="spacer">S</div>
      <div className="spacer">S</div> */}
      <VisibilityFilterInput visibilityFilter={visibilityFilter} className="filter" />
      <div className="movies-list p-2">
        {/* <Container> */}
        <Row>
          <Col className="d-flex flex-wrap justify-content-around">
            {filteredMovies.map((m) => (
              <MovieCard key={m._id} movie={m} />
            ))}
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    </>
  );
}

export default connect(mapStateToProps)(MoviesList);
