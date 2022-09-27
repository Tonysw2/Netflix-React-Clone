import React from 'react';
import './MovieListRow.css';

const MovieListRow = (props) => {
    return (
        <div className="container">
            <h3>{props.categorieName}</h3>
            <div className="movie-list">
                <div className="arrow-left">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </div>

                {props.moviesList.length > 0 &&
                    props.moviesList.map((movie, key) => (
                        <div className="img-wrap">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt={movie.title}
                            />
                        </div>
                    ))}

                <div className="arrow-right">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
};

export default MovieListRow;
