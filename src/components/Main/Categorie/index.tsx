// import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Arrow } from '../../Arrow'
import { CategorieContainer, Slider, SliderContainer } from './styles'

interface CategorieProps {
  categorieName: string
  items: {
    backdrop_path: string
    title: string
  }[]
}

export function Categorie({ categorieName, items }: CategorieProps) {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 6,
      spacing: 5,
    },
    loop: true,
    breakpoints: {
      '(max-width: 1200px)': {
        slides: {
          perView: 5,
          spacing: 6,
        },
      },
    },
  })

  return (
    <CategorieContainer key={uuid()}>
      <div>
        <h1>{categorieName}</h1>

        <SliderContainer>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                direction="left"
                onClick={(e) => {
                  e.stopPropagation() || instanceRef.current?.prev()
                }}
              />
              <Arrow
                direction="right"
                onClick={(e) => {
                  e.stopPropagation() || instanceRef.current?.next()
                }}
              />
            </>
          )}
          <Slider ref={sliderRef} className="keen-slider">
            {items.map((item) => {
              console.log(item)
              return item.backdrop_path !== null ? (
                <img
                  className="keen-slider__slide"
                  key={uuid()}
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt={item.title}
                  title={item.title}
                />
              ) : null
            })}
          </Slider>
        </SliderContainer>
      </div>
    </CategorieContainer>
  )
}
