/* eslint-disable space-before-function-paren */

import { useState } from 'react'

function useSearch() {
  const [searchedValue, setSearchedValue] = useState()

  function handleSearch(event) {
    event.preventDefault()
    const query = Object.fromEntries(new FormData(event.target))
    if (query.search === '') return
    setSearchedValue(query.search)
  }

  return { handleSearch, searchedValue, setSearchedValue }
}

export { useSearch }
