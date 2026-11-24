import axios from "axios";
import React, { useEffect, useState } from "react";

const Selections = () => {
  const [anime, setAnime] = useState([]);

  async function fetchAnime() {
    const { data } = await axios.get("https://kitsu.io/api/edge/anime");
    setAnime(data.data);
  }

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <section id="anime__selection">
      <div className="container anime__selection--container">
        <div className="row anime__selection--row">
          <div className="anime__display anime-elements">
            <div className="display__card">
              {anime.slice(0, 12).map((anime) => (
                <>
                  <img
                    src={anime.attributes.posterImage.small}
                    className="anime__cover"
                    alt=""
                  />
                  <div className="show__details">
                    <p className="show__detail">
                      <i>Title:</i> {anime.attributes.canonicalTitle}
                    </p>
                    <p className="show__detail">
                      <i>Rating:</i> {anime.attributes.ageRatingGuide}
                    </p>
                    <button className="watch__btn">
                      Watch Now! <i className="fa-regular fa-circle-play"></i>
                    </button>
                  </div>
                </>
              ))}
            </div>
            {/* <i className="fa-solid fa-arrows-spin anime__loading anime__loading-icon"></i> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Selections;
