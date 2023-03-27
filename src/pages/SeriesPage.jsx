/* eslint space-before-function-paren: 0 */
import React, { Suspense } from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { API_ENDPOINTS } from '../storage/enpoints'
import { useFetch } from '../hooks/useFetch'

function SeriesPage({ removeBookmark, bookmarkItem, isBookmarked, cache }) {
  const mediaType = 'tv'
  const DATA = useFetch(API_ENDPOINTS.SERIES, cache, mediaType)
  const showSeries = isBookmarked(DATA.items)

  return (
    <SectionLayout inputHolder='Search for TV series'>
      <Grid title='TV Series'>
        {DATA.error && <p>There was an error...</p>}
        <Suspense fallback={<p>Loading...</p>}>
          {!DATA.loading &&
            showSeries?.map((movie) => (
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

export { SeriesPage }
