import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="container nav__container">
        <ul className="nav__links">
          <Link path="/" className="nav__link nav__link--hover">
            Home
          </Link>
          <Link path="/selection" className="nav__link nav__link--hover">
            Find Your Next Watch
          </Link>
          <button className="nav__btn">Contact</button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
