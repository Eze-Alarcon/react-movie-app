/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */
import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext.jsx'

function useMovies() {
  const {
    filterByCategory,
    setPopular,
    setSeries,
    setPopularMovies,
    setTrending
  } = useContext(MovieContext)

  function loadHomeItems() {
    const newTrending = filterByCategory('trending')
    const newPopular = filterByCategory('popular')
    setTrending(newTrending)
    setPopular(newPopular)
  }

  function loadMovieSection() {
    const newPopularMovies = filterByCategory('movies')
    setPopularMovies(newPopularMovies)
  }

  function loadSeries() {
    const newSeries = filterByCategory('series')
    setSeries(newSeries)
  }

  return {
    loadHomeItems,
    loadMovieSection,
    loadSeries,
  }
}

export { useMovies }
