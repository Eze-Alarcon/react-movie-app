/* eslint-disable space-before-function-paren */

import { useEffect, useState } from 'react'
import { mapData } from '../utils/mapData'

function useFetchSearch({ endpoint, mediaType, query }) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [controller, setController] = useState(null)

  useEffect(() => {
    if (query.length <= 3) {
      if (controller) {
        controller.abort()
      }
      return
    }
    const abortController = new AbortController()
    setController(abortController)
    setLoading(true)

    const url = `${endpoint}${new URLSearchParams({ query }).toString()}`

    fetch(url)
      .then(res => res.json())
      .then(rawData => mapData(rawData.results, mediaType))
      .then(data => setData(data))
      .catch((e) => setError(true))
      .finally(() => setLoading(false))

    return () => abortController.abort()
  }, [query])

  return {
    items: data,
    error,
    loading
  }
}

export { useFetchSearch }
