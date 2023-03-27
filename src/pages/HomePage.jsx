/* eslint space-before-function-paren: 0 */
/* eslint-disable comma-dangle */

import { Suspense } from 'react'
import { HomeLayout } from '../layout/HomeLayout'
import { Carrousel } from '../layout/Carrousel'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { MoviePoster } from '../components/movies/MoviePoster'
import { SwiperSlide } from 'swiper/react'
import { useFetch } from '../hooks/useFetch'
import { API_ENDPOINTS } from '../storage/enpoints'

function HomePage({
  removeBookmark,
  bookmarkItem,
  isBookmarked,
  carrouselCache,
  gridCache,
}) {
  const CARROUSEL_ITEMS = useFetch(API_ENDPOINTS.TRENDING_DAY, carrouselCache)
  const GRID_ITEMS = useFetch(API_ENDPOINTS.TRENDING_WEEK, gridCache)

  const carrouselItems = isBookmarked(CARROUSEL_ITEMS.items)
  const gridItems = isBookmarked(GRID_ITEMS.items)

  return (
    <HomeLayout inputHolder='Search for movies or TV series'>
      {CARROUSEL_ITEMS.error && <p>There was an error...</p>}
      {!CARROUSEL_ITEMS.loading && (
        <Suspense fallback={<p>Loading...</p>}>
          <Carrousel>
            {carrouselItems?.map((movie) => (
              <SwiperSlide key={`${movie.id}-carrousel`}>
                <MoviePoster
                  movie={movie}
                  deleteItem={removeBookmark}
                  saveItem={bookmarkItem}
                />
              </SwiperSlide>
            ))}
          </Carrousel>
        </Suspense>
      )}
      <Grid title='Recommended for you'>
        {GRID_ITEMS.error && <p>There was an error....</p>}
        <Suspense fallback={<p>Loading...</p>}>
          {!GRID_ITEMS.loading &&
            gridItems?.map((movie) => (
              <MovieCard
                key={`${movie.id}-card`}
                movie={movie}
                deleteItem={removeBookmark}
                saveItem={bookmarkItem}
              />
            ))}
        </Suspense>
      </Grid>
    </HomeLayout>
  )
}

export { HomePage }
