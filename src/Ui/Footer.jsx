import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="container footer__container">
        <div class="row footer__row">
          <div class="footer__links">
            <Link Path="" className="footer__link footer__link--hover">
              Home
            </Link>
            <Link path="" className="footer__link footer__link--hover">
              Find Your Next Watch
            </Link>
            <Link className="footer__link footer__link--hover contact__link">
              Contact
            </Link>
          </div>
          <p class="footer__copyright">
            &copy; 2026 Anime Paradise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
