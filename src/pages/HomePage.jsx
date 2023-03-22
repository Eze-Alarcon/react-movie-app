/* eslint space-before-function-paren: 0 */
/* eslint-disable comma-dangle */

import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import { HomeLayout } from '../layout/HomeLayout'
import { Carrousel } from '../layout/Carrousel'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { MoviePoster } from '../components/movies/MoviePoster'
import { SwiperSlide } from 'swiper/react'

function HomePage() {
  const { trending, popular } = useContext(MovieContext)
  const carrouselItems = [...trending] ?? null

  const { deleteItem, saveItem } = useContext(MovieContext)

  return (
    <HomeLayout inputHolder='Search for movies or TV series'>
      {carrouselItems.length > 1 && (
        <Carrousel>
          {trending.map((movie) => (
            <SwiperSlide key={`${movie.id}-carrousel`}>
              <MoviePoster
                movie={movie}
                deleteItem={deleteItem}
                saveItem={saveItem}
              />
            </SwiperSlide>
          ))}
        </Carrousel>
      )}
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
