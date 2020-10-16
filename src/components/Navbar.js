import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <HomeIcon /> BPD
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
