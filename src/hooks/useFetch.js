/* eslint-disable space-before-function-paren */

import { useEffect, useState } from 'react'
import { mapData } from '../utils/mapData'

function useFetch(endpoint, cache) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [controller, setController] = useState(null)

  useEffect(() => {
    if (cache.items.length > 0) {
      console.log('items saved')
      return
    }
    const abortController = new AbortController()
    setController(abortController)
    setLoading(true)

    fetch(endpoint)
      .then(res => res.json())
      .then(rawData => mapData(rawData.results))
      .then(data => cache.save(data))
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
  }, [])

  function handleCancelRequest() {
    if (controller) {
      controller.abort()
    }
  }

  return {
    items: cache.items,
    error,
    loading,
    handleCancelRequest
  }
}

export { useFetch }
