/* eslint space-before-function-paren: 0 */
/* eslint-disable comma-dangle */

import React from 'react'
import { useMovies } from '../hooks/useMovies'
import { HomeLayout } from '../layout/HomeLayout'
import { Carrousel } from '../layout/Carrousel'
import { Grid } from '../layout/Grid'
import { useSaveItem } from '../hooks/useSaveItem'
import { MovieCard } from '../components/movies/MovieCard'
import { MoviePoster } from '../components/movies/MoviePoster'

// Swipper slider
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

function HomePage() {
  const { trending, popular } = useMovies()
  const { deleteItem, saveItem } = useSaveItem()

  return (
    <HomeLayout inputHolder='Search for movies or TV series'>
      <Carrousel>
        <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          loop
          breakpoints={{
            0: {
              centeredSlides: true,
              freeMode: true,
            },
            1024: {
              freeMode: false,
              centeredSlides: false,
              navigation: true,
            },
          }}
          slidesPerView='auto'
          spaceBetween={16}
          className='h-full flex flex-shrink-0'
        >
          {trending.map((movie) => (
            <SwiperSlide key={`${movie.id}-carrousel`}>
              <MoviePoster
                movie={movie}
                deleteItem={deleteItem}
                saveItem={saveItem}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Carrousel>
      <Grid title='Recommended for you'>
        {popular.map((movie) => (
          <MovieCard
            key={`${movie.id}-card`}
            movie={movie}
            deleteItem={deleteItem}
            saveItem={saveItem}
          />
        ))}
      </Grid>
    </HomeLayout>
  )
}

export { HomePage }
