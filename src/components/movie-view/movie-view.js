import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import "./movie-view.css";
import NavBar from "../navbar/navbar";
import Card from "react-bootstrap/Card";

export class MovieView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  addToFavoriteMovies(movie) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user");
    axios
      .post(
        `https://myflix2020.herokuapp.com/users/${userId}/Movies/${movie._id}`,
        { username: localStorage.getItem("user") },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res);
        alert("This movie has been added to your Favorites.");
      });
  }

  render() {
    const { movie } = this.props;

    if (!movie) return null;

    return (
      <>
        <NavBar />
        <div className="movie-view">
          <div className="movie-view-content">
          <section>
              {" "}
              <div className="movie-description">
                {/* <span className="label">Description: </span> */}
                <span className="value">{movie.Description}</span>
              </div>

              </section>
            <section className="movie-view-card">
              <Card className="movie-card mv-card mt-3 rounded">
                <Card.Title className="movie-title">{movie.Title}</Card.Title>
                <Card.Img
                  variant="top"
                  src={movie.ImagePath}
                  className="movie-view-image"
                />

                <Card.Body className="movie-card-body"></Card.Body>
              </Card>
            </section>
            
              <section>
              <div className="movie-view-buttons">
                <div className="genre-director-buttons">
                  <div className="movie-director">
                    {/* <span className="label">Director: </span>
                <span className="value">{movie.Director.Name}</span> */}
                    <Link to={`/directors/${movie.Director.Name}`}>
                      <Button className="director-button">Director Info</Button>
                    </Link>
                  </div>
                  <div className="movie-genre">
                    {/* <span className="label">Genre: </span>
                <span className="value">{movie.Genre.Name}</span> */}
                    <Link to={`/genres/${movie.Genre.Name}`}>
                      <Button className="genre-button"> Genre Info</Button>
                    </Link>
                  </div>
                </div>
                <Button
                  onClick={() => this.addToFavoriteMovies(movie)}
                  className="button-add-favorite"
                  style={{ background: "#690f38" }}
                >
                  Add to Favorites
                </Button>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
      ImagePath: PropTypes.string,
    }),
  }),
};
