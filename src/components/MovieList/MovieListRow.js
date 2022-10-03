import React, { useState } from 'react';
import './MovieListRow.css';

const MovieListRow = ({ categorieName, moviesList }) => {
    const [translate, setTranslate] = useState(1);

    const translateFunc = () => {
        if (moviesList.length / translate > 5 && translate > 0) {
            return `translateX(calc(${translate} * (-100% + 5rem)))`;
        } else if (moviesList.length / translate < 5) {
            setTranslate(1);
            return 'translateX(0%)';
        }
    };

    return (
        <>
            <h3 className="categorie-name">{categorieName}</h3>
            <div className="container">
                <div
                    className="arrow arrow-left"
                    onClick={() => {
                        setTranslate((prev) => prev - 1);
                    }}
                >
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
                <div
                    className="slider"
                    style={{
                        transform: translateFunc(),
                    }}
                >
                    {moviesList.map((movie) => (
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={`${movie}`}
                        />
                    ))}
                </div>
                <div
                    className="arrow arrow-right"
                    onClick={() => {
                        setTranslate((prev) => prev + 1);
                    }}
                >
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
            </div>
        </>
    );
};

export default MovieListRow;
