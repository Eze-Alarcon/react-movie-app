/* eslint-disable space-before-function-paren */

import { useState } from 'react'

function useSearch() {
  const [searchedValue, setSearchedValue] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    const { search } = Object.fromEntries(new FormData(event.target))
    if (search === '') return
    setSearchedValue(search.toLowerCase())
  }

  function filterArray(arr) {
    if (searchedValue.length < 3) return arr

    const filter = arr.filter((item) =>
      item.title.toLowerCase().includes(searchedValue)
    )
    return filter
  }

  return { handleSearch, searchedValue, setSearchedValue, filterArray }
}

export { useSearch }
