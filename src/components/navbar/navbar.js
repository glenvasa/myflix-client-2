import React, { useEffect } from "react";
// import { ModalBody } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

import "./navbar.css";

function NavBar() {
  function onLogOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.open("/", "_self");
  }

  useEffect(() => {
    const toggler = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelector(".nav-links");
    toggler.addEventListener("click", () => {
      navLinks.classList.toggle("dropdown");
    });
  }, []);

  let Username = localStorage.getItem("user");

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="fixed-top navbar-main">
        <Navbar.Brand as={Link} to="/" className="brand-myflix">
          MYFLIX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links ml-auto">
            {/* {  
            
            (document.querySelectorAll('.movies-list').length === 0)
              ? 
             ( <Nav.Link as={Link} to="/" className="navbar-link">
              Home
            </Nav.Link>)
            : ''
            } */}

            <Nav.Link
              as={Link}
              to={`/users/${Username}`}
              className="navbar-link"
            >
              {window.location.pathname.includes("Username") ? "" : "Profile"}
            </Nav.Link>
            <Nav.Link onClick={onLogOut} className="navbar-link log-out">
              {" "}
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
