import { DB_NAMES } from '../storage/contants'
import { useSessionStorage } from './useSessionStorage'

function useStorages () {
  const trendingWeekCache = useSessionStorage([], DB_NAMES.TRENDING_WEEK)
  const trendingDayCache = useSessionStorage([], DB_NAMES.TRENDING_DAY)
  const moviesCache = useSessionStorage([], DB_NAMES.MOVIES)
  const seriesCache = useSessionStorage([], DB_NAMES.SERIES)

  return {
    trendingWeekCache,
    trendingDayCache,
    moviesCache,
    seriesCache
  }
}

export { useStorages }
