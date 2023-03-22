/* eslint space-before-function-paren: 0 */
import React from 'react'
import { useMovies } from '../hooks/useMovies'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { useSaveItem } from '../hooks/useSaveItem'
import { MovieCard } from '../components/movies/MovieCard'

function SeriesPage() {
  const { popularSeries } = useMovies()
  const { deleteItem, saveItem } = useSaveItem()

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
