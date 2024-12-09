/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MovieCards } from "./MovieCards";

export default function Display({ movieList }) {
  const [displayMoviesList, setDisplayMoviesList] = useState([]);
  useEffect(() => {
    setDisplayMoviesList(movieList);
  }, [movieList]);
  const handleOnFilteredMovies = (genre) => {
    if (genre === "all") {
      return setDisplayMoviesList(movieList);
    }
    setDisplayMoviesList(movieList.filter((movie) => movie.genre === genre));
  };
  return (
    <div className="container mt-5 rounded">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                onClick={() => handleOnFilteredMovies("all")}
                className="btn btn-primary"
              >
                All
              </button>
              <button
                type="button"
                onClick={() => handleOnFilteredMovies("drama")}
                className="btn btn-warning"
              >
                Drama
              </button>
              <button
                type="button"
                onClick={() => handleOnFilteredMovies("action")}
                className="btn btn-info"
              >
                Action
              </button>
            </div>
            <div className="mt-3 text-light">
              {displayMoviesList.length} movies listed
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md  ">
            <div className="d-flex justify-content-around gap-2 flex-wrap">
              {displayMoviesList.map((item, i) => (
                <div className="" key={i}>
                  <MovieCards movieSearched={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
