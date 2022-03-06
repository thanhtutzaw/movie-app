import React from "react";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

function Movie({ title, poster_path, vote_average,release_date}) {
  if(release_date){
  release_date = release_date.split('-')[0]
  }
  // console.log(release_date)

  const handleVote = (vote) => {
    if(vote >= 8){
      return "green"
    }
    else if(vote >= 6){
      return "orange"
    }
    else if(vote >= 1){
      return "red"
    }
    else{
      return "disable"
    }
  }
  return (
    <div className="movie">
      <div className="movie-container">
        <img src={IMAGE_API + poster_path} alt={title}></img>
          <span className={ `vote-span ${handleVote(vote_average)}`}>{vote_average}</span>
        <div className="movie-info">
          <h3 className="title">{title}</h3>
          <span className="year">{release_date}</span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
