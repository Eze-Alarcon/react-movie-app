/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

// import { useState } from 'react'
import { results as apiPopularMovies } from '../mocks/popularMovies.json'
import { results as apiPopular } from '../mocks/popular.json'
import { results as apiPopularSeries } from '../mocks/popularSeries.json'
import { results as apiTrending } from '../mocks/trendingAll.json'
import { images as config } from '../storage/config.json'
import { useSaveItem } from './useSaveItem'

function useMovies() {
  const { base_url, backdrop_sizes } = config
  const { isSaved } = useSaveItem()

  function mapData(rawData) {
    if (!Array.isArray(rawData)) throw new Error('Wrong data type entry')

    const mapData = rawData.map((item) => {
      const mappedDate = item.release_date ?? item.first_air_date
      const mappedTitle = item.title ?? item.name
      const mappedType = item.media_type ?? 'movie'
      const mappedVotes = item.vote_average.toFixed(1)
      const mappedSaved = isSaved(item.id)
      let mappedImg = ''

      if (item.backdrop_path === null && item.poster_path === null) {
        mappedImg = '/images/image-not-found.jpg'
      } else {
        const img = item.backdrop_path ?? item.poster_path
        // backdrop_sizes or poster_sizes must be original! this is hardcoded
        mappedImg = `${base_url}${backdrop_sizes.at(-1)}${img}`
      }

      return {
        imgPath: mappedImg,
        date: mappedDate.substring(0, 4),
        votes: mappedVotes,
        title: mappedTitle,
        type: mappedType,
        saved: mappedSaved,
        id: item.id,
      }
    })
    return mapData
  }

  const popular = mapData(apiPopular)
  const popularMovies = mapData(apiPopularMovies)
  const popularSeries = mapData(apiPopularSeries)
  const trending = mapData(apiTrending)

  return {
    popularMovies,
    popular,
    popularSeries,
    trending
  }
}

export { useMovies }
