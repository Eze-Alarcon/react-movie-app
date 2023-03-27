/* eslint-disable comma-dangle */
/* eslint-disable multiline-ternary */
/* eslint-disable space-before-function-paren */
import React from 'react'
import { SearchBar } from '../components/shared/SearchBar'
import { SearchBookmark } from '../components/shared/SearchBookmark'

function SectionLayout({
  children,
  inputHolder,
  name,
  handleSearch,
  searchBookmark,
  multiSearch,
  searchedValue,
}) {
  return (
    <main className='customWidth flex flex-col gap-6 lg:px-0 pb-6 items-start'>
      <div className='flex w-full gap-6 items-center h-min'>
        {name !== 'bookmark' ? (
          <SearchBar
            holder={inputHolder}
            name={name}
            multiSearch={multiSearch}
            searchedValue={searchedValue}
          />
        ) : (
          <SearchBookmark
            holder={inputHolder}
            handleSearch={handleSearch}
            searchBookmark={searchBookmark}
          />
        )}
      </div>
      <section className='w-full grid gap-6'>{children}</section>
    </main>
  )
}
export { SectionLayout }
