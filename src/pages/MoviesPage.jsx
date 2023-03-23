/* eslint space-before-function-paren: 0 */
import React, { useContext } from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'
import { MovieContext } from '../context/MovieContext'

function MoviesPage() {
  const { deleteItem, bookmarkItem, popularMovies, isBookmarked } =
    useContext(MovieContext)
  const hasMovies = popularMovies?.length > 0 ?? false

  const showMovies = isBookmarked(popularMovies)

  return (
    <SectionLayout inputHolder='Search for movies'>
      <Grid title='Movies'>
        {hasMovies &&
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

export { MoviesPage }
