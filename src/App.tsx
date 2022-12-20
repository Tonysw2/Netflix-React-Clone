import { FeaturedMovie } from './components/FeaturedMovie'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { MoviesContextProvider } from './contexts/moviesContext'

export function App() {
  return (
    <div>
      <Header />
      <MoviesContextProvider>
        <FeaturedMovie />
        <Main />
      </MoviesContextProvider>

      <Footer />
    </div>
  )
}
