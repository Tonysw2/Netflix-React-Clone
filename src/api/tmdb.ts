import { api } from './api'

const basicFetch = async (endpoint: string) => {
  const res = await api.get(`${endpoint}`)
  const data = res.data
  return data
}

export const TMDB = {
  getHomeList: async () => {
    const originalsPromise = basicFetch(
      `/discover/tv?with_network=213&api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`,
    )
    const trendingPromise = basicFetch(
      `/trending/all/week?api_key=${import.meta.env.VITE_APP_API_KEY}`,
    )
    const topratedPromise = basicFetch(
      `/movie/top_rated?api_key=${import.meta.env.VITE_APP_API_KEY}`,
    )

    const actionPromise = basicFetch(
      `/discover/movie?with_genres=28&api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`,
    )
    const comedyPromise = basicFetch(
      `/discover/movie?with_genres=35&api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`,
    )
    const horrorPromise = basicFetch(
      `/discover/movie?with_genres=27&api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`,
    )
    const romancePromise = basicFetch(
      `/discover/movie?with_genres=10749&api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`,
    )
    const documentaryPromise = basicFetch(
      `/discover/movie?with_genres=99&api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`,
    )

    const [
      originals,
      trending,
      toprated,
      action,
      comedy,
      horror,
      romance,
      documentary,
    ] = await Promise.all([
      originalsPromise,
      trendingPromise,
      topratedPromise,
      actionPromise,
      comedyPromise,
      horrorPromise,
      romancePromise,
      documentaryPromise,
    ])

    return [
      {
        slug: 'originals',
        categorieName: 'Originals Netflix',
        items: originals.results,
      },
      {
        slug: 'trending',
        categorieName: 'Trending',
        items: trending.results,
      },
      {
        slug: 'toprated',
        categorieName: 'Top Rated',
        items: toprated.results,
      },
      {
        slug: 'action',
        categorieName: 'Action',
        items: action.results,
      },
      {
        slug: 'comedy',
        categorieName: 'Comedy',
        items: comedy.results,
      },
      {
        slug: 'horror',
        categorieName: 'Horror',
        items: horror.results,
      },
      {
        slug: 'romance',
        categorieName: 'Romance',
        items: romance.results,
      },
      {
        slug: 'documentary',
        categorieName: 'Documentary',
        items: documentary.results,
      },
    ]
  },

  getMovieInfo: async (movie: { id: string }, type: string) => {
    let info = {}

    if (movie) {
      if (type === 'movie') {
        info = await basicFetch(
          `/movie/${movie.id}?api_key=${import.meta.env.VITE_APP_API_KEY}`,
        )
      }
      if (type === 'tv') {
        info = await basicFetch(
          `/tv/${movie.id}?api_key=${import.meta.env.VITE_APP_API_KEY}`,
        )
      }
    }

    return info
  },
}
