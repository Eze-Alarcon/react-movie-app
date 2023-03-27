/* eslint-disable space-before-function-paren */

import { useMemo, useState } from 'react'
import { debounceFunction } from '../utils/debounce'

function useSearch() {
  const [searchedValue, setSearchedValue] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    const { search } = Object.fromEntries(new FormData(event.target))
    if (search === '') return
    setSearchedValue(search.toLowerCase())
  }

  // const memo = useMemo(function () {
  //   function checkData(data) {
  //     console.log(data)
  //   }

  //   return debounceFunction(checkData, 350)
  // }, [])

  // function handleChanges(event) {
  //   const data = event.target.value
  //   setVal(data)
  //   memo(data)
  // }

  return { handleSearch, searchedValue, setSearchedValue }
}

export { useSearch }
