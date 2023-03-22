/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

// import { useState } from 'react'
import apiPopularMovies from '../mocks/popularMovies.json'
import apiPopular from '../mocks/popular.json'
import apiPopularSeries from '../mocks/popularSeries.json'
import apiTrending from '../mocks/trendingAll.json'
// import witoutResults from '../mocks/withoutResults.json'
import { mapData } from './useMapData'

function useMovies() {
  const popularResults = apiPopular.results
  const popularMoviesResults = apiPopularMovies.results
  const popularSeriesResults = apiPopularSeries.results
  const trendingResults = apiTrending.results

  function mappedData(rawData) {
    return mapData(rawData)
  }

  const popular = mappedData(popularResults)
  const popularMovies = mappedData(popularMoviesResults)
  const popularSeries = mappedData(popularSeriesResults)
  const trending = mappedData(trendingResults)

  return {
    popularMovies,
    popular,
    popularSeries,
    trending
  }
}

export { useMovies }
