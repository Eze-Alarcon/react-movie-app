/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */

import { images } from '../storage/config.json'
import { useSaveItem } from './useSaveItem'

function mapData(rawData) {
  const { isSaved } = useSaveItem()
  const backupImage = '/images/image-not-found.jpg'

  if (!Array.isArray(rawData)) throw new Error('Wrong data type entry')

  const mapData = rawData.map((item) => {
    const mappedDate = item.release_date ?? item.first_air_date
    const mappedTitle = item.title ?? item.name
    const mappedType = item.media_type ?? 'movie'
    const mappedVotes = item.vote_average.toFixed(1)
    const mappedSaved = isSaved(item.id)
    let mappedImg = ''

    if (item.backdrop_path === null && item.poster_path === null) {
      mappedImg = backupImage
    } else {
      const img = item.backdrop_path ?? item.poster_path
      mappedImg = `${images.base_url}${images.backdrop_sizes.at(-1)}${img}`
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
export { mapData }
