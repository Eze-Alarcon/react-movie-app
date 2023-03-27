/* eslint-disable space-before-function-paren */

import { useEffect, useState } from 'react'
import { mapData } from '../utils/mapData'

function useFetchSearch(endpoint, itemsType, search) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [controller, setController] = useState(null)

  useEffect(() => {
    if (search.length <= 3) {
      return
    }
    const abortController = new AbortController()
    setController(abortController)
    setLoading(true)

    const url = `${endpoint}${new URLSearchParams({ query: search }).toString()}`
    console.log(url)

    fetch(url)
      .then(res => res.json())
      .then(rawData => mapData(rawData.results, itemsType))
      .then(data => setData(data))
      .catch((e) => {
        if (e.name === 'AbortError') {
          console.log('Request Cancelled')
        } else {
          setError(true)
          console.log(e)
        }
      })
      .finally(() => setLoading(false))

    return () => abortController.abort()
  }, [search])

  function handleCancelRequest() {
    if (controller) {
      controller.abort()
    }
  }

  return {
    items: data,
    error,
    loading,
    handleCancelRequest
  }
}

export { useFetchSearch }
