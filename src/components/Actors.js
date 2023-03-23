import React from "react";
import { actors } from "../data";

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


let mappedActors = actors.map((actor) =>
  <div key={actor.name} style={MovieTitleStyle}>
    Name of Actor: " {actor.name} "
      <ul style={MovieLiStyle}>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
)
function Actors() {
  return (
    <div>
      <h1 style={moviePageStyle}>
        Actors Page
      </h1>
        {mappedActors}
    </div>
  )
}

export default Actors;
