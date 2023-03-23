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
  const { trending, popular, deleteItem, bookmarkItem, isBookmarked } =
    useContext(MovieContext)

  const hasTrendingMovies = trending?.length > 0 ?? false
  const hasMovies = popular?.length > 0 ?? false

  const showTrendingMovies = isBookmarked(trending)
  const showPopular = isBookmarked(popular)

  return (
    <HomeLayout inputHolder='Search for movies or TV series'>
      {hasTrendingMovies && (
        <Carrousel>
          {showTrendingMovies.map((movie) => (
            <SwiperSlide key={`${movie.id}-carrousel`}>
              <MoviePoster
                movie={movie}
                deleteItem={deleteItem}
                saveItem={bookmarkItem}
              />
            </SwiperSlide>
          ))}
        </Carrousel>
      )}
      <Grid title='Recommended for you'>
        {hasMovies &&
          showPopular.map((movie) => (
            <MovieCard
              key={`${movie.id}-card`}
              movie={movie}
              deleteItem={deleteItem}
              saveItem={bookmarkItem}
            />
          ))}
      </Grid>
    </HomeLayout>
  )
}

export { HomePage }
