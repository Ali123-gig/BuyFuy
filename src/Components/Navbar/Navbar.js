import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { composeWithDevTools } from "redux-devtools-extension";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="navItems">
        <div className="navProducts">
          <Link to="/Category">
            <h2>Categories</h2>
          </Link>
        </div>
        <div className="navProducts">
          <Link to="/Authentication">
            <h2>Authentication</h2>
          </Link>
        </div>
        <div className="navProducts">
          <Link to="/test">
            <h2>test</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
