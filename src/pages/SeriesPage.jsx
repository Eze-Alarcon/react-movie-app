import React from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { useFetch } from '../hooks/useFetch'
import { useSearch } from '../hooks/useSearch'
import { useFetchSearch } from '../hooks/useFetchSearch'
import {
  API_ENDPOINTS,
  MEDIA_TYPES,
  SEARCH_ENDPOINTS
} from '../storage/contants'

function SeriesPage ({ removeBookmark, bookmarkItem, isBookmarked, cache }) {
  const { handleSearch, searchedValue, query } = useSearch()
  let searchedItems = []

  const SEARCH_FETCH = useFetchSearch({
    endpoint: SEARCH_ENDPOINTS.SERIES,
    mediaType: MEDIA_TYPES.SERIE,
    query
  })
  const DATA = useFetch(API_ENDPOINTS.SERIES, cache, MEDIA_TYPES.SERIE)

  const showSeries = isBookmarked(DATA.items)

  if (SEARCH_FETCH.items.length > 0) {
    searchedItems = isBookmarked(SEARCH_FETCH.items)
  }

  const searching = searchedValue.length > 3

  return (
    <SectionLayout
      inputHolder='Search for TV series'
      multiSearch={handleSearch}
      searchedValue={searchedValue}
    >
      <Grid title='TV Series'>
        {DATA.error && <p>There was an error...</p>}
        {!DATA.loading &&
          !searching &&
          showSeries?.map((movie) => (
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

export { SeriesPage }
