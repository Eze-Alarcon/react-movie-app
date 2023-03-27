/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
import { IconSearch } from '../../resources/svg/IconSearch'

function SearchBar({ holder, name }) {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <>
      <form action='' className='flex w-full' onSubmit={handleSubmit}>
        <IconSearch />
        <input
          type='text'
          name={name}
          placeholder={holder}
          className='bg-black w-full form-input outline-none border-0 border-b-2 border-transparent focus:ring-0 focus:border-blue hover:cursor-pointer caret-red'
        />
      </form>
    </>
  )
}

export { SearchBar }
