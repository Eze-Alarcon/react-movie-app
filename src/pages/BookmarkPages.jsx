/* eslint space-before-function-paren: 0 */
import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'

function BookmarkPages() {
  const { bookmarks, deleteItem, saveItem } = useContext(MovieContext)

  return (
    <SectionLayout inputHolder='Search for bookmarked movie or TV shows'>
      <Grid title='My bookmarks'>
        {bookmarks.map((movie) => (
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

export { BookmarkPages }
