/* eslint space-before-function-paren: 0 */
import React from 'react'
import { SearchBar } from '../components/shared/SearchBar'
import { Grid } from '../components/shared/Grid'
import { useSaveItem } from '../hooks/useSaveItem'

function BookmarkPages() {
  const { myBookmarks } = useSaveItem()
  return (
    <main className='customWidth grid gap-6 lg:px-0 pb-6'>
      <div className='flex gap-6 items-center'>
        <SearchBar />
      </div>
      <section className='w-full grid gap-6'>
        <Grid gridItems={myBookmarks ?? []} title='My bookmarks' />
      </section>
    </main>
  )
}

export { BookmarkPages }
