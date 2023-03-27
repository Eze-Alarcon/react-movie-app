/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React, { useState, useMemo } from 'react'
import { IconSearch } from '../../resources/svg/IconSearch'
import { debounceFunction } from '../../utils/debounce'

function SearchBar({ holder, name }) {
  const [val, setVal] = useState('')
  function handleSubmit(event) {
    event.preventDefault()
  }

  const memo = useMemo(function () {
    function checkData(data) {
      console.log(data)
    }

    return debounceFunction(checkData, 350)
  }, [])

  function handleChanges(event) {
    const data = event.target.value
    setVal(data)
    memo(data)
  }

  return (
    <>
      <form action='' className='flex w-full' onSubmit={handleSubmit}>
        <IconSearch />
        <input
          type='text'
          onChange={handleChanges}
          value={val}
          name={name}
          placeholder={holder}
          className='bg-black w-full form-input outline-none border-0 border-b-2 border-transparent focus:ring-0 focus:border-blue hover:cursor-pointer caret-red'
        />
      </form>
      <p>{val}</p>
    </>
  )
}

export { SearchBar }
