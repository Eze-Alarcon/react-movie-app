/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { useFetch } from '../hooks/useFetch'
import { useSearch } from '../hooks/useSearch'
import { useFetchSearch } from '../hooks/useFetchSearch'
import {
  API_ENDPOINTS,
  SEARCH_ENDPOINTS,
  MEDIA_TYPES,
} from '../storage/contants'

function MoviesPage({ removeBookmark, bookmarkItem, isBookmarked, cache }) {
  const { handleSearch, searchedValue, query } = useSearch()
  let searchedItems = []

  const SEARCH_FETCH = useFetchSearch({
    endpoint: SEARCH_ENDPOINTS.MOVIES,
    mediaType: MEDIA_TYPES.MOVIE,
    query,
  })
  const DATA = useFetch(API_ENDPOINTS.MOVIES, cache)
  const showMovies = isBookmarked(DATA.items)

  if (SEARCH_FETCH.items.length > 0) {
    searchedItems = isBookmarked(SEARCH_FETCH.items)
  }

  const searching = searchedValue.length > 3

  return (
    <SectionLayout
      inputHolder='Search for movies'
      multiSearch={handleSearch}
      searchedValue={searchedValue}
    >
      <Grid title='Movies'>
        {DATA.error && <p>There was an error...</p>}
        {!DATA.loading &&
          !searching &&
          showMovies?.map((movie) => (
            <MovieCard
              key={`${movie.id}-card`}
              movie={movie}
              deleteItem={removeBookmark}
              saveItem={bookmarkItem}
            />
          ))}
        {!SEARCH_FETCH.loading &&
          searching &&
          searchedItems?.map((movie) => (
            <MovieCard
              key={`${movie.id}-card`}
              movie={movie}
              deleteItem={removeBookmark}
              saveItem={bookmarkItem}
            />
          ))}
      </Grid>
    </SectionLayout>
  )
}

export { MoviesPage }
