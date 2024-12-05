/* eslint-disable no-unused-vars */
import { React, useEffect } from "react";
import { MovieCards } from "./MovieCards";
import { fetchMovieFromApi } from "../Utils/axios";
import { randomChar } from "../Utils/random";
export const Hero = () => {
  useEffect(() => {
    fetchMovie(randomChar());
  }, []);
  const fetchMovie = async (str) => {
    const movie = await fetchMovieFromApi(str);
    console.log(movie);
  };
  const movieCSS = {
    backgroundImage: `url("https://www.omdbapi.com/src/poster.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
  };
  return (
    <div>
      <nav className="py-3 text-danger fixed-top">
        <h2 className="container">The world of Movies</h2>
      </nav>
      <div
        className="hero d-flex justify-content-center align-items-center text-light"
        style={movieCSS}
      >
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center">
              <h1>This is the world of Movies</h1>
              <p>Find the details before watching them</p>
            </div>
          </div>
          <div className="input-group my-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search Movie Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-danger" type="button">
                Button
              </button>
            </div>
          </div>
          <div className="movie-card-display">
            <MovieCards />
          </div>
        </div>
      </div>
    </div>
  );
};
