import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./component/Movie";
import Searchbar from "./component/Searchbar";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=9067de426c06859fb8ee665837ace52e&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
//  https://api.themoviedb.org/3/discover/movie?api_key=9067de426c06859fb8ee665837ace52e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setmovies(data.results);
      });
  });

  return (
    <div className="App">

      <div class="container">
        <Searchbar />
        <div className="main row">
          {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
      </div>


    </div>
  );
}

export default App;
