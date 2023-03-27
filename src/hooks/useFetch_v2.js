/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */
import { mapData } from '../utils/mapData'

function getSuspender(promise) {
  let status = 'pending'
  let response

  const suspender = promise.then(
    (res) => {
      status = 'success'
      response = res
    },
    (err) => {
      status = 'error'
      response = err
    }
  )

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return { read }
}

function useFetch(endpoint) {
  const promise = fetch(endpoint)
    .then(res => res.json())
    .then(rawData => mapData(rawData.results))
    .then(data => data)

  return getSuspender(promise)
}

export { useFetch }
