/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import { useFetch } from './useFetch'
import { useSessionStorage } from './useSessionStorage'

function useMovies(endpoint, DB_NAME) {
  const STORAGE = useSessionStorage([], DB_NAME)

  // if (true) {
  //   const DATA = useFetch(endpoint)
  // }

  return {

  }
}

export { useMovies }
