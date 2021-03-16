import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import NavBar from "../navbar/navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import "./director-view.css";

export class DirectorView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { director } = this.props;

    if (!director) return <div className="main-view" />;

    let id = localStorage.getItem("id");

    return (
      <>
        <NavBar />
        <div className="director-view">
          <Card style={{ width: "45 rem" }} className="director-card">
            <Card.Body className="dir-card-body">
              <Card.Title className="dir-name">{director.Name}</Card.Title>
              <Card.Text className="dir-bio">{director.Bio}</Card.Text>
              
              <Card.Text className="dir-born">Born: {director.Birth}</Card.Text>
              <Card.Text className="dir-died">Died: {director.Death}</Card.Text>
            </Card.Body>
            {/* <Link to={"/"}> */}
            <div className="dirview-button-container">
              <Link to={`/movies/${id}`}>
                <Button className="dirview-back-button">Back</Button>
              </Link>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

DirectorView.propTypes = {
  Director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Birth: PropTypes.string.isRequired,
    Death: PropTypes.string,
  }),
};
