/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React, { useContext } from 'react'
import { IconSearch } from '../../resources/svg/IconSearch'
import { MovieContext } from '../../context/MovieContext'

function SearchBar({ holder }) {
  const { handleSearch } = useContext(MovieContext)

  return (
    <>
      <form action='' className='flex w-full' onSubmit={handleSearch}>
        <IconSearch />
        <input
          type='text'
          name='search'
          placeholder={holder}
          className='bg-black w-full form-input outline-none border-0 border-b-2 border-transparent focus:ring-0 focus:border-blue hover:cursor-pointer caret-red'
        />
      </form>
    </>
  )
}

export { SearchBar }
