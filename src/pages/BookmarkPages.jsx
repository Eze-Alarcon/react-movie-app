/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */
import React, { Suspense } from 'react'
import { SectionLayout } from '../layout/SectionLayout'
import { Grid } from '../layout/Grid'
import { MovieCard } from '../components/movies/MovieCard'

function BookmarkPages({
  removeBookmark,
  bookmarkItem,
  myBookmarks,
  handleSearch,
  searchBookmark,
  filteredBookmarks,
}) {
  const hasBookmarks = myBookmarks?.length > 0

  return (
    <SectionLayout
      inputHolder='Search for bookmarked movie or TV shows'
      name='bookmark'
      handleSearch={handleSearch}
      searchBookmark={searchBookmark}
    >
      <Grid title='My bookmarks'>
        <Suspense fallback={<p>Loading...</p>}>
          {hasBookmarks &&
            filteredBookmarks.map((movie) => (
              <MovieCard
                key={`${movie.id}-card`}
                movie={movie}
                deleteItem={removeBookmark}
                saveItem={bookmarkItem}
              />
            ))}
        </Suspense>
      </Grid>
    </SectionLayout>
  )
}

export { BookmarkPages }
