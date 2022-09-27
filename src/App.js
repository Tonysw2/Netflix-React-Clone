import React, { useEffect, useState } from 'react';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MovieListRow from './components/MovieList/MovieListRow';
import TMDB from './TMDB';

const App = () => {
    const [movieSet, setMovieSet] = useState([]);
    const [featuredMovieInfo, setFeaturedMovieInfo] = useState(null);
    const [backgroundDark, setBackgroundDark] = useState(false);

    const loadAllMovies = async () => {
        // TOTAL LIST
        const list = await TMDB.getHomeList();

        // FEATURED LIST
        const originals = list.filter((set) => set.slug === 'originals');
        const randomIndex = Math.floor(
            Math.random() * originals[0].items.results.length
        );
        const randomFeaturedMovie = originals[0].items.results[randomIndex];
        const movieInfo = await TMDB.getMovieInfo(randomFeaturedMovie, 'tv');
        console.log(movieInfo);
        console.log(list);
        setMovieSet(list);
        setFeaturedMovieInfo(movieInfo);
    };

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 10) {
                setBackgroundDark(true);
            } else {
                setBackgroundDark(false);
            }
        };
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    useEffect(() => {
        loadAllMovies();
    }, []);

    return (
        <>
            <Header backgroundDark={backgroundDark} />

            <div className="wrap-content">
                {featuredMovieInfo && (
                    <FeaturedMovie featuredMovieInfo={featuredMovieInfo} />
                )}
                <div className="page">
                    <section className="lists">
                        {movieSet.map((item, key) => {
                            return (
                                <MovieListRow
                                    key={key}
                                    categorieName={item.categorie_name}
                                    moviesList={item.items.results}
                                />
                            );
                        })}
                    </section>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default App;
