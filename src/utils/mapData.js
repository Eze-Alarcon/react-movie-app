/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */

import config from '../storage/config.json'
const backupImage = '/images/image-not-found.jpg'

function mapData(rawData, type = 'movie') {
  const { images } = config

  if (!Array.isArray(rawData)) throw new Error('Wrong data type entry')

  const mapData = rawData.map((item) => {
    const mappedDate = item.release_date?.substring(0, 4) ?? item.first_air_date?.substring(0, 4) ?? 'In development'
    const mappedTitle = item.title ?? item.name
    const mappedType = item.media_type ?? type
    const mappedVotes = item.vote_average.toFixed(1)
    const mappedSaved = false
    let mappedImg = ''

    if (item.backdrop_path === null && item.poster_path === null) {
      mappedImg = backupImage
    } else {
      const img = item.backdrop_path ?? item.poster_path
      mappedImg = `${images.secure_base_url}${images.backdrop_sizes.at(-1)}${img}`
    }

    return {
      imgPath: mappedImg,
      date: mappedDate,
      votes: mappedVotes,
      title: mappedTitle,
      type: mappedType,
      saved: mappedSaved,
      id: item.id,
    }
  })
  return mapData
}

function mapDetails(rawData, type = 'movie',) {
  const { images } = config

  const mappedDate = rawData.release_date?.substring(0, 4) ?? rawData.first_air_date?.substring(0, 4)
  const mappedTitle = rawData.original_title ?? rawData.original_name
  const mappedType = type
  const mappedVotes = rawData.vote_average.toFixed(1)
  const language = rawData.original_language
  const description = rawData.overview
  const duration = rawData.runtime ?? rawData.episode_run_time.toString()
  const itemStatus = rawData.status
  const voteCount = rawData.vote_count
  const itemgenres = rawData.genres.map((gen) => gen.name)
  let mappedImg = ''

  let serieSeasons = ''
  let serieEpisodes = ''

  if (type !== 'movie') {
    serieSeasons = rawData.number_of_seasons
    serieEpisodes = rawData.number_of_episodes
  }

  if (rawData.backdrop_path === null && rawData.poster_path === null) {
    mappedImg = backupImage
  } else {
    const img = rawData.backdrop_path ?? rawData.poster_path
    mappedImg = `${images.secure_base_url}${images.backdrop_sizes.at(-1)}${img}`
  }

  return {
    imgPath: mappedImg,
    date: mappedDate,
    votes: mappedVotes,
    title: mappedTitle,
    type: mappedType,
    id: rawData.id,
    language,
    description,
    duration,
    itemStatus,
    voteCount,
    itemgenres,
    serieSeasons,
    serieEpisodes
  }
}

export { mapData, mapDetails }
