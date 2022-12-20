import { useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { MoviesContext } from '../../contexts/moviesContext'
import { Categorie } from './Categorie'
import { MainContainer } from './styles'

export function Main() {
  const { allCategoriesAndMovies } = useContext(MoviesContext)

  return (
    <MainContainer>
      {allCategoriesAndMovies.length > 0
        ? allCategoriesAndMovies.map((item) => {
            return (
              <Categorie
                key={uuid()}
                categorieName={item.categorieName}
                items={item.items}
              />
            )
          })
        : null}
    </MainContainer>
  )
}
