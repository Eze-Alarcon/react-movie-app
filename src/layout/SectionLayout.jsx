/* eslint-disable multiline-ternary */
/* eslint-disable space-before-function-paren */
import React from 'react'
import { SearchBar } from '../components/shared/SearchBar'
import { SearchBookmark } from '../components/shared/SearchBookmark'

function SectionLayout({ children, inputHolder, name }) {
  return (
    <main className='customWidth flex flex-col gap-6 lg:px-0 pb-6 items-start'>
      <div className='flex w-full gap-6 items-center h-min'>
        {name !== 'bookmark' ? (
          <SearchBar holder={inputHolder} name={name} />
        ) : (
          <SearchBookmark holder={inputHolder} />
        )}
      </div>
      <section className='w-full grid gap-6'>{children}</section>
    </main>
  )
}
export { SectionLayout }
