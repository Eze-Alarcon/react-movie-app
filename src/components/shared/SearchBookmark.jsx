/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React, { useContext } from 'react'
import { IconSearch } from '../../resources/svg/IconSearch'
import { MovieContext } from '../../context/MovieContext'

function SearchBookmark({ holder }) {
  const { handleSearch, searchedValue } = useContext(MovieContext)

  return (
    <>
      <form action='' className='flex w-full'>
        <IconSearch />
        <input
          onChange={handleSearch}
          value={searchedValue}
          type='text'
          placeholder={holder}
          className='bg-black w-full form-input outline-none border-0 border-b-2 border-transparent focus:ring-0 focus:border-blue hover:cursor-pointer caret-red'
        />
      </form>
    </>
  )
}

export { SearchBookmark }
