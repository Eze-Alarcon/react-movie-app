/* eslint space-before-function-paren: 0 */
import React, { useContext } from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { MovieContext } from '../context/MovieContext'

function MoviesPage() {
  const { deleteItem, saveItem, popularMovies } = useContext(MovieContext)

  return (
    <SectionLayout inputHolder='Search for movies'>
      <Grid title='Movies'>
        {popularMovies.map((movie) => (
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

export { MoviesPage }
