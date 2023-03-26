/* eslint-disable space-before-function-paren */

// import { useEffect, useState } from 'react'
// import { mapData } from '../utils/mapData'

function useFetch(endpoint) {
  // const [data, setData] = useState([])
  console.log('hola desde el useFetch')
  // const [error, setError] = useState(null)
  // const [loading, setLoading] = useState(false)
  // // const [controller, setController] = useState(null)

  // useEffect(() => {
  //   // const abortController = new AbortController()
  //   // setController(abortController)
  //   setLoading(true)

  //   fetch(endpoint)
  //     .then(res => res.json())
  //     .then(rawData => mapData(rawData))
  //     .then(console.log)
  //     // .then(data => setData(data))
  //     .catch((e) => {
  //       if (e.name === 'AbortError') {
  //         console.log('Request Cancelled')
  //       } else {
  //         setError(true)
  //       }
  //     })
  //     .finally(() => setLoading(false))

  //   // return () => abortController.abort()
  // }, [])

  // // function handleCancelRequest() {
  // //   if (controller) {
  // //     controller.abort()
  // //   }
  // // }

  // return {
  //   data,
  //   error,
  //   loading
  //   // handleCancelRequest
  // }
}

export { useFetch }
