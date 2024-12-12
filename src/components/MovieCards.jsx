/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export const MovieCards = ({
  movieSearched,
  deleteMovie,
  handleOnAddedMoviesList,
}) => {
  const { Poster, Title, imdbRating, Plot, genre, imdbID } = movieSearched;
  const image = "https://www.omdbapi.com/src/poster.jpg";
  return (
    <div className="container">
      <div className="row   border rounded text-dark p-3 movie-card-display">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>IMDB Rating: {imdbRating}</p>
          <p>{Plot?.slice(0, 70)}...</p>
          {!genre && (
            <div className="d-flex justify-content-between gap-2">
              <button
                className="btn btn-warning flex-grow-1 gap-2"
                onClick={() => handleOnAddedMoviesList("drama")}
              >
                Drama
              </button>
              <button
                className="btn btn-info flex-grow-1 gap-2"
                onClick={() => handleOnAddedMoviesList("action")}
              >
                {" "}
                Action
              </button>
            </div>
          )}

          <div className="d-grid mt-3">
            <button
              onClick={() => deleteMovie(imdbID)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
