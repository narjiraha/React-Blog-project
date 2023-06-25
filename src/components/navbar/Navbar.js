import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (

    <div>
      <div className="logoBox">
        <div className="text">
          <span className="the">The</span>
          <span className="siren">Siren</span>
        </div>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bollywoodpage">Bollywood</Link>
          </li>
          <li>
            <Link to="/technologypage">Technology</Link>
          </li>
          <li>
            <Link to="/hollywoodpage">Hollywood</Link>
          </li>
          <li>
            <Link to="/fitnesspage">Fitness</Link>
          </li>
          <li>
            <Link to="/foodpage">Food</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
