import React from "react";

const Landing = () => {
  return (
    <section id="landing">
      <div class="container landing__container">
        <div class="row landing__row">
          <h1 class="search-bar__title">Browse an Endless Array of Anime</h1>
          <form class="search__form">
            <input
              type="search"
              placeholder="Browse Anime Here..."
              id="search-area"
              class="search__area"
            />
            <button
              class="search__btn btn"
              id="search-button"
              onclick="searchAPI(event)"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Landing;