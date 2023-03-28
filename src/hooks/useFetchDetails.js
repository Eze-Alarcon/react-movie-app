/* eslint-disable space-before-function-paren */

import { useEffect, useState } from 'react'
import { mapDetails } from '../utils/mapData'

function useFetchDetails(endpoint, cache, itemsType) {
  const [data, setData] = useState()
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
      .then(rawData => mapDetails(rawData, itemsType))
      .then(data => setData(data))
      .catch((e) => setError(true))
      .finally(() => setLoading(false))

    return () => {
      abortController.abort()
      setData({})
    }
  }, [])

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

export { useFetchDetails }
