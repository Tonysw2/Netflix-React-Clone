import { createContext, ReactNode, useEffect, useState } from 'react'
import { TMDB } from '../api/tmdb'

interface AllCategoriesAndMoviesType {
  slug: string
  categorieName: string
  items: {
    backdrop_path: string
    title: string
  }[]
}

interface FeaturedMovieInfoType {
  backdropPath: string
  firstAirDate: string
  overview: string
  name: string
  voteAverage: string
}

interface MoviesContextType {
  allCategoriesAndMovies: AllCategoriesAndMoviesType[]
  featuredMovie: FeaturedMovieInfoType
}

export const MoviesContext = createContext({} as MoviesContextType)

interface MoviesContextProviderProps {
  children: ReactNode
}

export function MoviesContextProvider({
  children,
}: MoviesContextProviderProps) {
  const [allCategoriesAndMovies, setAllCategoriesAndMovies] = useState<
    AllCategoriesAndMoviesType[]
  >([])
  const [featuredMovie, setFeaturedMovie] = useState<FeaturedMovieInfoType>(
    {} as FeaturedMovieInfoType,
  )

  async function loadAllCategoriesAndMovies() {
    // Main List
    const data = await TMDB.getHomeList()

    // Featured Movie
    const originals = data.filter((set) => set.slug === 'originals')
    const randomIndex = Math.floor(Math.random() * originals[0].items.length)
    const featuredMovieInfo: any = await TMDB.getMovieInfo(
      originals[0].items[randomIndex],
      'tv',
    )
    const featuredMovieInfoData = {
      backdropPath: featuredMovieInfo.backdrop_path,
      firstAirDate: featuredMovieInfo.first_air_date,
      overview: featuredMovieInfo.overview,
      name: featuredMovieInfo.name,
      voteAverage: featuredMovieInfo.vote_average,
    }

    setFeaturedMovie(featuredMovieInfoData)
    setAllCategoriesAndMovies(data)
  }

  useEffect(() => {
    loadAllCategoriesAndMovies()
  }, [])

  return (
    <MoviesContext.Provider value={{ allCategoriesAndMovies, featuredMovie }}>
      {children}
    </MoviesContext.Provider>
  )
}
