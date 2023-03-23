import React from "react";
import { movies } from "../data";

const MovieTitleStyle = {
  border: "14px solid #000",
  padding: "12px",
  textAlign: "center",
  fontSize: "large",
}

const MovieLiStyle = {
  textAlign: "left",
  fontSize: "large",
}

const moviePageStyle = {
  textAlign: "center",
  fontSize: "x-large"
}


let mappedMovies = movies.map((movie) =>
  <div key={movie.title} style={MovieTitleStyle}>
    Title of Movie: " {movie.title} "
      <div>
        Movie Run Time: {movie.time}
      </div>
      <ul style={MovieLiStyle}>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
)
function Movies() {
  return (
    <div>
      <h1 style={moviePageStyle}>
        Movies Page
      </h1>
        {mappedMovies}
    </div>
  )
}

export default Movies;
