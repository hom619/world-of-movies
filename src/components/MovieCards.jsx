/* eslint-disable no-unused-vars */
import React from "react";

export const MovieCards = ({}) => {
  const image = "https://www.omdbapi.com/src/poster.jpg";
  return (
    <div className="container">
      <div className="row   border rounded text-dark p-3 movie-card-display">
        <div className="col-md">
          <img src={image} alt="" />
        </div>
        <div className="col-md">
          <h3>Movie Name</h3>
          <p>IMDB Rating: 6.7</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning">Drama</button>
            <button className="btn btn-info"> Action</button>
          </div>

          <div className="d-grid mt-3">
            <button className="btn btn-danger">Danger</button>
          </div>
        </div>
      </div>
    </div>
  );
};
