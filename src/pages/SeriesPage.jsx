/* eslint space-before-function-paren: 0 */
import React, { useContext } from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { MovieContext } from '../context/MovieContext'

function SeriesPage() {
  const { popularSeries, deleteItem, saveItem } = useContext(MovieContext)

  return (
    <SectionLayout inputHolder='Search for TV series'>
      <Grid title='TV Series'>
        {popularSeries.map((movie) => (
          <MovieCard
            key={`${movie.id}-card`}
            movie={movie}
            deleteItem={deleteItem}
            saveItem={saveItem}
          />
        ))}
      </Grid>
    </SectionLayout>
  )
}

export { SeriesPage }
