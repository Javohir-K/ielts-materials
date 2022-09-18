import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav__logo">
        <p>ielts</p>
        material
      </div>
      <div className="nav__links">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="knowmore">
          <p>Know more</p>
        </Link>
        <Link to="about">
          <p>About</p>
        </Link>
        <Link to="questions">
          <p>Ask question?</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
