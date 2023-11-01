import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com?apikey=ac41c6b0";

// Sample movie data (not being used currently)
const movie1 = {
  Title: "A Clockwork Orange",
  Year: "1971",
  imdbID: "tt0066921",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg",
};

const App = () => {
  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState("");
  // State to store the list of movies
  const [movies, setMovies] = useState([]);

  // useEffect to fetch movies on component mount
  useEffect(() => {
    // Initial search with a default term ("Clockwork Orange")
    searchMovies("Clockwork Orange");
  }, []);

  // Function to fetch movies based on the search term
  const searchMovies = async (title) => {
    // Fetch movies from the OMDB API
    const response = await fetch(`${API_URL}&s=${title}`);
    // Parse the response JSON
    const data = await response.json();
    // Update the movies state with the search results
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>FilmLand</h1>

      {/* Search bar with input and search icon */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* Display movies or a message if no movies found */}
      {movies?.length > 0 ? (
        <div className="container">
          {/* Map through movies and render MovieCard for each */}
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
