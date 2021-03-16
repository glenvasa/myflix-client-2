import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NavBar from "../navbar/navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import "./genre-view.css";

export class GenreView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { genre } = this.props;
    if (!genre) return <div className="main-view" />;

    let id = localStorage.getItem("id");

    return (
      <>
        <NavBar />
        <div className="genre-view">
          <Card style={{ width: "45 rem" }} className="genre-card">
            <Card.Body>
              <Card.Title className="genre-name">{genre.Name}</Card.Title>
              <Card.Text className="genre-description">
                {genre.Description}
              </Card.Text>
            </Card.Body>

            <Link to={`/movies/${id}`}>
              <Button
                className="genreview-back-button"
                // onClick={(() => {
                //   Router.history.back()})}
              >
                Back
              </Button>
            </Link>
          </Card>
        </div>
      </>
    );
  }
}

GenreView.propTypes = {
  Genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }),
};
