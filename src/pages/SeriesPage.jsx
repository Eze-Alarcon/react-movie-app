/* eslint space-before-function-paren: 0 */
import React, { useContext } from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { MovieContext } from '../context/MovieContext'

function SeriesPage() {
  const { popularSeries, deleteItem, bookmarkItem, isBookmarked } =
    useContext(MovieContext)

  const hasSeries = popularSeries?.length > 0 ?? false

  const showMovies = isBookmarked(popularSeries)

  return (
    <SectionLayout inputHolder='Search for TV series'>
      <Grid title='TV Series'>
        {hasSeries &&
          showMovies.map((movie) => (
            <MovieCard
              key={`${movie.id}-card`}
              movie={movie}
              deleteItem={deleteItem}
              saveItem={bookmarkItem}
            />
          ))}
      </Grid>
    </SectionLayout>
  )
}

export { SeriesPage }
