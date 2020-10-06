import React, { Component } from "react";
import { Link } from "react-router-dom";

class MoviesList extends Component {
  renderMovies = () => {
    let movies = this.props.movies;
    return Object.keys(movies).map((movieID) => (
      <Link key={movieID} to={`/movies/${movieID}`}>
        {movies[movieID].title}
      </Link>
    ));
  };

  render() {
    return <div>{this.renderMovies()}</div>;
  }
}

export default MoviesList;
