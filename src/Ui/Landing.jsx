import React from "react";

const Landing = () => {
  return (
    <section id="landing">
      <div className="container landing__container">
        <div className="row landing__row">
          <h1 className="search-bar__title">Browse an Endless Array of Anime</h1>
          {/* <form className="search__form">
            <input
              type="search"
              placeholder="Browse Anime Here..."
              id="search-area"
              className="search__area"
            />
            <button
              className="search__btn btn"
              id="search-button"
              onclick="searchAPI(event)"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Landing;