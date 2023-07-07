import { HomeLayout } from '../layout/HomeLayout'
import { Carrousel } from '../layout/Carrousel'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { MoviePoster } from '../components/movies/MoviePoster'
import { SwiperSlide } from 'swiper/react'
import { useFetch } from '../hooks/useFetch'
import { API_ENDPOINTS, SEARCH_ENDPOINTS } from '../storage/contants'
import { useSearch } from '../hooks/useSearch'
import { useFetchSearch } from '../hooks/useFetchSearch'

function HomePage ({
  removeBookmark,
  bookmarkItem,
  isBookmarked,
  carrouselCache,
  gridCache
}) {
  const { handleSearch, searchedValue, query } = useSearch()
  let searchedItems = []

  const SEARCH_FETCH = useFetchSearch({
    endpoint: SEARCH_ENDPOINTS.MULTI_SEARCH,
    query
  })

  const CARROUSEL_ITEMS = useFetch(API_ENDPOINTS.TRENDING_DAY, carrouselCache)
  const GRID_ITEMS = useFetch(API_ENDPOINTS.TRENDING_WEEK, gridCache)

  const carrouselItems = isBookmarked(CARROUSEL_ITEMS.items)
  const gridItems = isBookmarked(GRID_ITEMS.items)

  if (SEARCH_FETCH.items.length > 0) {
    searchedItems = isBookmarked(SEARCH_FETCH.items)
  }

  const searching = searchedValue.length > 3

  return (
    <HomeLayout
      inputHolder='Search for movies or TV series'
      multiSearch={handleSearch}
      searchedValue={searchedValue}
    >
      {CARROUSEL_ITEMS.error && <p>There was an error...</p>}
      {CARROUSEL_ITEMS.loading && <p>Loading...</p>}
      {!CARROUSEL_ITEMS.loading && !searching && (
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
      )}
      <Grid title='Recommended for you'>
        {GRID_ITEMS.error && <p>There was an error....</p>}
        {GRID_ITEMS.loading && <p>Loading...</p>}
        {!GRID_ITEMS.loading &&
          !searching &&
          gridItems?.map((movie) => (
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
    </HomeLayout>
  )
}

export { HomePage }
