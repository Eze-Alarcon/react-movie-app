/* eslint space-before-function-paren: 0 */
import React, { Suspense } from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { API_ENDPOINTS, SEARCH_ENDPOINTS } from '../storage/enpoints'
import { useFetch } from '../hooks/useFetch'
import { useSearch } from '../hooks/useSearch'
import { useFetchSearch } from '../hooks/useFetchSearch'

function MoviesPage({ removeBookmark, bookmarkItem, isBookmarked, cache }) {
  const { handleSearch, searchedValue } = useSearch()
  const mediaType = 'movie'
  const SEARCH_FETCH = useFetchSearch(
    SEARCH_ENDPOINTS.MOVIES,
    mediaType,
    searchedValue
  )
  const DATA = useFetch(API_ENDPOINTS.MOVIES, cache)
  const showMovies = isBookmarked(DATA.items)

  let searchedItems = []

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
      <p>{searchedValue}</p>
      <Grid title='Movies'>
        {DATA.error && <p>There was an error...</p>}
        <Suspense fallback={<p>Loading...</p>}>
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
        </Suspense>
      </Grid>
    </SectionLayout>
  )
}

export { MoviesPage }
