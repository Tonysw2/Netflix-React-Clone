import React from 'react';
import './FeaturedMovie.css';

const FeaturedMovie = ({ featuredMovieInfo }) => {
    const date = new Date(featuredMovieInfo.first_air_date);

    return (
        <>
            {featuredMovieInfo !== null && (
                <section
                    className="featuredMovie"
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovieInfo.backdrop_path})`,
                    }}
                >
                    <div className="backdrop-vertical">
                        <div className="backdrop-horizontal">
                            <div className="wrap-featured-data">
                                <div className="featured-name">
                                    {featuredMovieInfo.name}
                                </div>
                                <div className="featured-info">
                                    <div className="featured-points">
                                        {`${featuredMovieInfo.vote_average.toFixed(
                                            1
                                        )} points`}
                                    </div>
                                    <div className="featured-year">
                                        {date.getFullYear()}
                                    </div>
                                    <div className="featured-seasons">
                                        {`${featuredMovieInfo.number_of_seasons} seasons`}
                                    </div>
                                </div>
                                <div className="featured-description">
                                    {featuredMovieInfo.overview}
                                </div>
                                <div className="featured-buttons">
                                    <button className="btn-play">
                                        <ion-icon name="play"></ion-icon>
                                        <span>Play</span>
                                    </button>
                                    <button className="btn-my-list">
                                        <ion-icon name="add"></ion-icon>
                                        <span>My List</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default FeaturedMovie;
