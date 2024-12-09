import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import { Hero } from "./components/Hero";
function App() {
  const [movieList, setMovieList] = useState([]);
  const addMoviesToList = (movie) => {
    const filteredMovieList = movieList.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setMovieList([...filteredMovieList, movie]);
  };
  return (
    <div className="wrapper">
      {/* Hero section */}
      <Hero addMoviesToList={addMoviesToList} />
      {/* Display section */}
      <Display movieList={movieList} />
    </div>
  );
}

export default App;
