/* eslint space-before-function-paren: 0 */
import React, { useContext } from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { MovieContext } from '../context/MovieContext'

function SeriesPage() {
  const { popularSeries, deleteItem, bookmarkItem } = useContext(MovieContext)

  console.log('Home page - popularSeries.length', popularSeries.length)
  const hasSeries = popularSeries?.length > 0 ?? false

  return (
    <SectionLayout inputHolder='Search for TV series'>
      <Grid title='TV Series'>
        {hasSeries &&
          popularSeries.map((movie) => (
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
