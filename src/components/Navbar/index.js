import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h2 className="nav-item navbar-brand">
        {/* <Link to="/" className={window.location.pathname === "/"}> */}
        Clicky Game
        {/* </Link> */}
      </h2>
      <span className="navbar-text directions ml-auto">
        Click an image to begin!
      </span>
      <span className="navbar-text scores ml-auto">Score: | Top Score:</span>
    </nav>
  );
}

export default Navbar;
