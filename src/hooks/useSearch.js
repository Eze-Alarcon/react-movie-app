/* eslint-disable space-before-function-paren */

import { useMemo, useState } from 'react'
import { debounceFunction } from '../utils/debounce'

function useSearch() {
  const [searchedValue, setSearchedValue] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    const query = event.target.value.toLowerCase().trimStart()
    setSearchedValue(query)
    // memo(query)
  }

  // const memo = useMemo(function () {
  //   function checkData(query) {
  //     setSearchedValue(query)
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
