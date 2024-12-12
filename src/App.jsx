import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import { Hero } from "./components/Hero";
import { accessFromLocalStorage, storeInLocalStorage } from "./Utils/localDb";
function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const movieListFromLocalDb = accessFromLocalStorage();
    movieListFromLocalDb?.length && setMovieList(movieListFromLocalDb);
  }, []);
  const addMoviesToList = (movie) => {
    const filteredMovieList = movieList.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setMovieList([...filteredMovieList, movie]);
    storeInLocalStorage([...filteredMovieList, movie]);
  };
  const handleOnMoviesDelete = (imdbID) => {
    confirm("Are you sure you want to delete the movie?") &&
      setMovieList(movieList.filter((movie) => movie.imdbID !== imdbID));
  };
  return (
    <div className="wrapper">
      {/* Hero section */}
      <Hero addMoviesToList={addMoviesToList} />
      {/* Display section */}
      <Display
        movieList={movieList}
        handleOnMoviesDelete={handleOnMoviesDelete}
      />
    </div>
  );
}

export default App;
