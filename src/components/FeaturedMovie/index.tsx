import { Play, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { MoviesContext } from '../../contexts/moviesContext'
import {
  ActionsContainer,
  FeatureMovieContainer,
  InformationContainer,
  Overlay,
  StatusContainer,
} from './styles'

export function FeaturedMovie() {
  const { featuredMovie } = useContext(MoviesContext)

  const { backdropPath, name, overview, voteAverage } = featuredMovie

  return (
    <FeatureMovieContainer
      backdrop={`https://image.tmdb.org/t/p/original/${backdropPath}`}
    >
      <Overlay>
        <InformationContainer>
          <h1>{name}</h1>

          <StatusContainer>
            <p>
              <span>{voteAverage}</span> pontos
            </p>
            <p>2011</p>
            <p>8 temporadas</p>
          </StatusContainer>

          <p>{overview}</p>

          <ActionsContainer>
            <button>
              <Play weight="fill" size={16} />
              Watch
            </button>
            <button>
              <Plus weight="fill" size={16} />
              My List
            </button>
          </ActionsContainer>
        </InformationContainer>
      </Overlay>
    </FeatureMovieContainer>
  )
}
