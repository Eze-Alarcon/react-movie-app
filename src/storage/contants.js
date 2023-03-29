import { API_KEY } from './API_KEY'

const API_ENDPOINTS = {
  TRENDING_DAY: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  TRENDING_WEEK: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  MOVIES: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  SERIES: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
}

const SEARCH_ENDPOINTS = {
  MOVIES: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&`,
  MULTI_SEARCH: ` https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&`,
  SERIES: ` https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&`
}

const GET_DETAILS = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  END: `?api_key=${API_KEY}&language=en-US`
}

const DB_NAMES = {
  BOOKMAKRS: 'BOOKMARKS_V1',
  TRENDING_DAY: 'TRENDING_DAY_V1',
  TRENDING_WEEK: 'TRENDING_WEEK_V1',
  MOVIES: 'MOVIES_V1',
  SERIES: 'SERIES_V1'
}

const MEDIA_TYPES = {
  MOVIE: 'movie',
  SERIE: 'tv'
}

export { API_ENDPOINTS, SEARCH_ENDPOINTS, DB_NAMES, MEDIA_TYPES, GET_DETAILS }
