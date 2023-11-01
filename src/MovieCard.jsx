import React from "react";

// Functional component for rendering a movie card
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      {/* Display movie year */}
      <div>
        <p>{movie.Year}</p>
      </div>

      {/* Display movie poster, fallback to a placeholder if not available */}
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      {/* Display movie type and title */}
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
