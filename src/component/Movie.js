import React from "react";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

function Movie({ title, poster_path, vote_average }) {
  return (
    <div className="movie">
      <div className="movie-container">
        <img src={IMAGE_API + poster_path} title={title}></img>
        <div className="movie-info">
          <h3>{title}</h3>
          <span>{vote_average}</span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
