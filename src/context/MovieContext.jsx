/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { getItems, API_ENDPOINTS } from '../services/fetchData'

const MovieContext = createContext()

function MovieProvider({ children }) {
  const { myBookmarks, bookmarkItem, deleteItem } = useLocalStorage([])

  const [loading, setLoading] = useState(true)
  const [trending, setTrending] = useState([])
  const [popular, setPopular] = useState([])
  const [series, setSeries] = useState([])
  const [movies, setMovies] = useState([])
  const [showBM, setShowBM] = useState([])
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  const [searchedValue, setSearchedValue] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    const val = event.target.value.toLowerCase().trimStart()
    setSearchedValue(val)
  }

  useEffect(() => {
    const arr = [...myBookmarks]
    setShowBM(arr)
    if (searchedValue.length <= 3) return

    const filter = arr.filter((item) =>
      item.title.toLowerCase().includes(searchedValue)
    )

    setShowBM(filter)
  }, [searchedValue])

  function detectLocation() {
    const actualURL = window.location.href
    const path = actualURL.split('/').at(-1)

    if (path === '') setUrl('home')
    if (path === 'movies') setUrl('movies')
    if (path === 'tv') setUrl('series')
    if (path === 'bookmark') setUrl('bookmark')
  }

  function isBookmarked(arr) {
    if (!Array.isArray(arr)) return
    const checkSaved = arr.map((item) => {
      const bookmarked = myBookmarks.some((el) => el.id === item.id)
      return {
        ...item,
        saved: bookmarked,
      }
    })
    return checkSaved
  }

  async function loadHomeItems() {
    const trendingDay = await getItems({ url: API_ENDPOINTS.TRENDING_DAY })
    const trendingWeek = await getItems({ url: API_ENDPOINTS.TRENDING_WEEK })
    if (trendingDay.length > 0 && trendingWeek.length > 0) {
      setTrending(trendingDay)
      setPopular(trendingWeek)
      setError(false)
    } else {
      setTrending([])
      setPopular([])
      setError(true)
    }
    setLoading(false)
  }

  async function loadMovieSection() {
    const movies = await getItems({ url: API_ENDPOINTS.MOVIES })
    if (movies.length > 0) {
      setMovies(movies)
      setError(false)
    } else {
      setMovies([])
      setError(true)
    }
    setLoading(false)
  }

  async function loadSeries() {
    const series = await getItems({ url: API_ENDPOINTS.SERIES })
    if (series.lenght > 0) {
      setSeries(series)
      setError(false)
    } else {
      setSeries([])
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (url === null) return
    setLoading(true)

    if (url === 'home') {
      loadHomeItems()
      return
    }
    if (url === 'movies') {
      loadMovieSection()
      return
    }
    if (url === 'series') {
      loadSeries()
    }
    if (url === 'bookmark') {
      const arr = [...myBookmarks]
      setShowBM(arr)
    }
  }, [url])

  useEffect(() => {
    detectLocation()
  }, [])

  const states = {
    popularMovies: movies,
    popular,
    popularSeries: series,
    trending,
    myBookmarks: showBM,
    url,
    searchedValue,
    loading,
    error,
  }

  const functions = {
    setUrl,
    bookmarkItem,
    deleteItem,
    isBookmarked,
    handleSearch,
  }

  return (
    <MovieContext.Provider value={{ ...states, ...functions }}>
      {children}
    </MovieContext.Provider>
  )
}

export { MovieContext, MovieProvider }
