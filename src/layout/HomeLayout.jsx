import React from 'react'
import { SearchBar } from '../components/shared/SearchBar'

function HomeLayout ({ children, inputHolder, multiSearch, searchedValue }) {
  return (
    <main className='customWidth grid gap-6 lg:px-0 pb-6'>
      <div className='flex gap-6 items-center'>
        <SearchBar
          holder={inputHolder}
          multiSearch={multiSearch}
          searchedValue={searchedValue}
        />
      </div>
      <section className='w-full grid gap-6'>{children}</section>
    </main>
  )
}

export { HomeLayout }
