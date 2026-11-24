import React from "react";

const Sort = () => {
  return (
    <section id="interact">
      <div class="container interact__container">
        <div class="row interact__row">
          <div class="interactives">
            <h2 class="search__main">Search Results:</h2>
            <div class="search__filter">
              <h4 class="search__filter--title">Search Filter:</h4>
              <select id="filter" onchange="filteranimeData(event)">
                <option value="" disabled selected>
                  Sort
                </option>
                <option value="LOW_TO_HIGH">Length, Low to High</option>
                <option value="HIGH_TO_LOW">Length, High to Low</option>
                <option value="A_TO_Z">Title, A to Z</option>
                <option value="Z_TO_A">Title, Z to A</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sort;