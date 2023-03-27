/* eslint-disable space-before-function-paren */

import { useEffect, useState } from 'react'
import { mapData } from '../utils/mapData'

function useFetch(endpoint, cache, itemsType) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [controller, setController] = useState(null)

  useEffect(() => {
    if (cache.items.length > 0) { return }

    const abortController = new AbortController()
    setController(abortController)
    setLoading(true)

    fetch(endpoint)
      .then(res => res.json())
      .then(rawData => mapData(rawData.results, itemsType))
      .then(data => cache.save(data))
      .catch((e) => setError(true))
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
