/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */
import React from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'

function BookmarkPages({
  removeBookmark,
  bookmarkItem,
  myBookmarks,
  handleSearch,
  searchBookmark,
}) {
  const hasBookmarks = myBookmarks?.length > 0
  console.log({
    searchBookmark,
  })

  return (
    <SectionLayout
      inputHolder='Search for bookmarked movie or TV shows'
      name='bookmark'
      handleSearch={handleSearch}
      searchBookmark={searchBookmark}
    >
      <Grid title='My bookmarks'>
        {hasBookmarks &&
          myBookmarks.map((movie) => (
            <MovieCard
              key={`${movie.id}-card`}
              movie={movie}
              deleteItem={removeBookmark}
              saveItem={bookmarkItem}
            />
          ))}
      </Grid>
    </SectionLayout>
  )
}

export { BookmarkPages }
