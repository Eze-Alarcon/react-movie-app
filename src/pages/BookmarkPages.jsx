/* eslint space-before-function-paren: 0 */
import React from 'react'
import { useSaveItem } from '../hooks/useSaveItem'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'

function BookmarkPages() {
  const { myBookmarks, deleteItem, saveItem } = useSaveItem()

  return (
    <SectionLayout inputHolder='Search for bookmarked movie or TV shows'>
      <Grid title='My bookmarks'>
        {myBookmarks.map((movie) => (
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
