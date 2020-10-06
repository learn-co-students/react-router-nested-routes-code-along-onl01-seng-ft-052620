import React from "react";
import { Link } from "react-router-dom";

const MovieShow = ({ match, movies }) => {
  return (
    <div>
      <h3>{movies[match.params.movieID].title}</h3>
      <Link to={`${match.url}/edit`}>Edit</Link>
    </div>
  );
};

export default MovieShow;
