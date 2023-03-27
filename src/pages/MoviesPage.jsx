/* eslint space-before-function-paren: 0 */
import React, { Suspense } from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { API_ENDPOINTS } from '../storage/enpoints'
import { useFetch } from '../hooks/useFetch'

function MoviesPage({ removeBookmark, bookmarkItem, isBookmarked }) {
  const DATA = useFetch(API_ENDPOINTS.MOVIES)
  const showMovies = isBookmarked(DATA.items)

  return (
    <SectionLayout inputHolder='Search for movies'>
      <Grid title='Movies'>
        {DATA.error && <p>There was an error...</p>}
        <Suspense fallback={<p>Loading...</p>}>
          {!DATA.loading &&
            showMovies?.map((movie) => (
              <MovieCard
                key={`${movie.id}-card`}
                movie={movie}
                deleteItem={removeBookmark}
                saveItem={bookmarkItem}
              />
            ))}
        </Suspense>
      </Grid>
    </SectionLayout>
  )
}

export { MoviesPage }
