import { useState } from 'react'
import { mapDetails } from '../utils/mapData'
import { GET_DETAILS } from '../storage/contants'

function useFetchDetails () {
  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [controller, setController] = useState(null)

  async function callAPI (movieID, itemsType) {
    const abortController = new AbortController()
    setController(abortController)
    setLoading(true)

    const endpoint = `${GET_DETAILS.BASE_URL}${itemsType}/${movieID}${GET_DETAILS.END}`

    try {
      const res = await fetch(endpoint)
      const json = await res.json()
      const mappedData = mapDetails(json, itemsType)
      setData(mappedData)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  function handleCancelRequest () {
    if (controller) {
      controller.abort()
    }
  }

  return {
    items: data,
    error,
    loading,
    handleCancelRequest,
    callAPI
  }
}

export { useFetchDetails }
