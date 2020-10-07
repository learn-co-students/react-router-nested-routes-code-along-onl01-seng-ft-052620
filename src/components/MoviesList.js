import React from 'react';
import { Link } from 'reac-routing-dom';

const MoviesList = ({ movies }) => {
    const renderMovies = Object.keys(movies).map(movieID => 
        <Link key={movieID} to={`/movies/${movieID}`}> {movies[movieID].title} </Link>
        );

    return (
        <div>
            {renderMovies}
        </div>
    );
};
export default MoviesList;