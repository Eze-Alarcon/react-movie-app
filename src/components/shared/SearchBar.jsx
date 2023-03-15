/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
import { IconSearch } from '../../resources/svg/IconSearch'

function SearchBar() {
  return (
    <>
      <div>
        <IconSearch />
      </div>
      <input
        type='text'
        placeholder='Search for movies or TV series'
        className='bg-black w-full form-input outline-none border-0 border-b-2 border-transparent focus:ring-0 focus:border-blue hover:cursor-pointer caret-red'
      />
    </>
  )
}

export { SearchBar }
