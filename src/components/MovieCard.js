import React from 'react';
import { MovieControls } from './MovieControls';


export const MovieCard = ({movie, type}) => {
    return (
        <div class="movie-card">
            <div class="overlay"></div>

            {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title} Poster`} />
                ) : (
                    <div className="filler-poster"></div>
                )}

                <MovieControls movie={movie} type={type}/>


        </div>
    )
}
