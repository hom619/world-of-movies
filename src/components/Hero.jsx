/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useEffect, useState, useRef } from "react";
import { MovieCards } from "./MovieCards";
import { fetchMovieFromApi } from "../Utils/axios";
import { randomChar } from "../Utils/random";
export const Hero = ({ addMoviesToList }) => {
  const [movieSearched, setMovieSearched] = useState({});
  const [bgImage, setbgImage] = useState("");
  const loadingState = useRef(true); //this prevents multiple api calls due to rendering by useEffect
  const searchRef = useRef("");
  const [searchState, setSearchState] = useState(false);
  useEffect(() => {
    if (loadingState.current) {
      fetchMovie(randomChar());
      loadingState.current = false;
    }
  }, []);
  const fetchMovie = async (str) => {
    const movie = await fetchMovieFromApi(str);
    setMovieSearched(movie);
    setbgImage(movie.Poster);
    setSearchState(false);
  };
  const handleOnDelete = () => {
    setMovieSearched({});
    setSearchState(true);
  };
  const handleOnButtonSearch = () => {
    fetchMovie(searchRef.current.value);
    searchRef.current.value = "";
  };
  const handleOnAddedMoviesList = (genre) => {
    addMoviesToList({ ...movieSearched, genre });
    setMovieSearched({});
    setSearchState(true);
  };
  const movieCSS = {
    backgroundImage: `url(${bgImage})`,
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
          <div className={searchState ? "form-center" : "form-top"}>
            {searchState && (
              <div className="text-center">
                <h1>This is the world of Movies</h1>
                <p>Find the details before watching them</p>
              </div>
            )}
            <div className="input-group my-5">
              <input
                ref={searchRef}
                onFocus={() => setSearchState(true)}
                type="text"
                className="form-control"
                placeholder="Search Movie Name"
                aria-label="Search Movie Name"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button
                  onClick={handleOnButtonSearch}
                  className="btn btn-danger"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          {!searchState && (
            <div className="movie-card-display displayMovie mt-5">
              <MovieCards
                movieSearched={movieSearched}
                deleteMovie={handleOnDelete}
                handleOnAddedMoviesList={handleOnAddedMoviesList}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
