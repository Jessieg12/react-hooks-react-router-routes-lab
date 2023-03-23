import React from "react";
import { directors } from "../data";

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


let mappedDirectors = directors.map((director) =>
  <div key={director.name} style={MovieTitleStyle}>
    Director Name: " {director.name} "
      <ul style={MovieLiStyle}>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
)
function Directors() {
  return (
    <div>
      <h1 style={moviePageStyle}>
        Directors Page
      </h1>
        {mappedDirectors}
    </div>
  )
}
export default Directors;
