import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <p className="h2 p-2">Where in the World!</p>
          </Link>
          <div className="d-flex">
            <button type="button" className="btn btn-light me-5">
              Dark Mode
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
