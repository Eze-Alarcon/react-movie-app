/* eslint-disable space-before-function-paren */

import { useEffect, useState } from 'react'
import { mapData } from '../utils/mapData'

function useFetch(endpoint) {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [controller, setController] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    setController(abortController)
    setLoading(true)

    fetch(endpoint)
      .then(res => res.json())
      .then(rawData => mapData(rawData.results))
      .then(data => setItems(data))
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
    items,
    error,
    loading,
    handleCancelRequest
  }
}

export { useFetch }