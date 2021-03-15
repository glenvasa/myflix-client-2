import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "./navbar.css";

function NavBar() {
  function onLogOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.open("/", "_self");
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="fixed-top navbar-main">
        <Navbar.Brand as={Link} to="/" className="brand-myflix">
          MyFlix!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="navbar-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/users/:Username" className="navbar-link">
              Profile
            </Nav.Link>
          </Nav>
          <button
            onClick={onLogOut}
            variant="dark"
            type="submit"
            className="button log-out-button"
          >
            {" "}
            Log Out
          </button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
