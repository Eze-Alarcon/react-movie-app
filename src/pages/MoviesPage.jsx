/* eslint space-before-function-paren: 0 */
import React, { useContext } from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { MovieContext } from '../context/MovieContext'

function MoviesPage() {
  const { deleteItem, bookmarkItem, popularMovies } = useContext(MovieContext)

  console.log('Home page - popularMovies.length', popularMovies?.length)
  const hasMovies = popularMovies?.length > 0 ?? false

  return (
    <SectionLayout inputHolder='Search for movies'>
      <Grid title='Movies'>
        {hasMovies &&
          popularMovies.map((movie) => (
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

export { MoviesPage }
