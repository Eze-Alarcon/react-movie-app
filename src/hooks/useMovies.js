/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

// import { useState } from 'react'
import { results as apiPopularMovies } from '../mocks/popularMovies.json'
import { results as apiPopular } from '../mocks/popular.json'
import { results as apiPopularSeries } from '../mocks/popularSeries.json'
import { results as apiTrending } from '../mocks/trendingAll.json'
import { mapData } from './useMapData'

function useMovies() {
  function mappedData(rawData) {
    return mapData(rawData)
  }

  const popular = mappedData(apiPopular)
  const popularMovies = mappedData(apiPopularMovies)
  const popularSeries = mappedData(apiPopularSeries)
  const trending = mappedData(apiTrending)

  return {
    popularMovies,
    popular,
    popularSeries,
    trending
  }
}

export { useMovies }
