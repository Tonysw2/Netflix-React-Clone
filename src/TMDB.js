import axios from 'axios';

export const API_KEY = 'a392fb0c4c569d013a8dd14ce3a435df';
export const API_URL = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const res = await axios.get(`${API_URL}${endpoint}`);
    const data = res.data;
    return data;
};

const data = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                categorie_name: 'Originals Netflix',
                items: await basicFetch(
                    `/discover/tv?with_network=213&api_key=${API_KEY}`
                ),
            },
            {
                slug: 'trending',
                categorie_name: 'Trending',
                items: await basicFetch(
                    `/trending/all/week?api_key=${API_KEY}`
                ),
            },
            {
                slug: 'toprated',
                categorie_name: 'Top Rated',
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`),
            },
            {
                slug: 'action',
                categorie_name: 'Action',
                items: await basicFetch(
                    `/discover/movie?with_genres=28&api_key=${API_KEY}`
                ),
            },
            {
                slug: 'comedy',
                categorie_name: 'Comedy',
                items: await basicFetch(
                    `/discover/movie?with_genres=35&api_key=${API_KEY}`
                ),
            },
            {
                slug: 'horror',
                categorie_name: 'Horror',
                items: await basicFetch(
                    `/discover/movie?with_genres=27&api_key=${API_KEY}`
                ),
            },
            {
                slug: 'romance',
                categorie_name: 'Romance',
                items: await basicFetch(
                    `/discover/movie?with_genres=10749&api_key=${API_KEY}`
                ),
            },
            {
                slug: 'documentary',
                categorie_name: 'Documentary',
                items: await basicFetch(
                    `/discover/movie?with_genres=99&api_key=${API_KEY}`
                ),
            },
        ];
    },

    getMovieInfo: async (movie, type) => {
        let info = {};

        if (movie) {
            if (type === 'movie') {
                info = await basicFetch(
                    `/movie/${movie.id}?api_key=${API_KEY}`
                );
            }
            if (type === 'tv') {
                info = await basicFetch(`/tv/${movie.id}?api_key=${API_KEY}`);
            }
        }

        return info;
    },
};

export default data;
