/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import { createContext, useEffect, useState } from 'react'
import apiMovies from '../mocks/popularMovies.json'
import apiPopular from '../mocks/popular.json'
import apiSeries from '../mocks/popularSeries.json'
import apiTrending from '../mocks/trendingAll.json'
// import witoutResults from '../mocks/withoutResults.json'
import { mapData } from '../hooks/useMapData'
import { useLocalStorage } from '../hooks/useLocalStorage'

const MovieContext = createContext()

function MovieProvider({ children }) {
  const { myBookmarks, bookmarkItem, deleteItem } = useLocalStorage([])
  // states
  // const [allData, setAllData] = useState([])
  const [popular, setPopular] = useState([])
  const [series, setSeries] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [trending, setTrending] = useState([])
  const [url, setUrl] = useState(null)

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

  function loadHomeItems() {
    const mapTrending = mapData(apiTrending.results)
    const mapPopular = mapData(apiPopular.results)
    setTrending(mapTrending)
    setPopular(mapPopular)
  }

  function loadMovieSection() {
    const mapMovies = mapData(apiMovies.results)
    setPopularMovies(mapMovies)
  }

  function loadSeries() {
    const mapSeries = mapData(apiSeries.results)
    setSeries(mapSeries)
  }

  useEffect(() => {
    if (url === null || url === 'bookmark') return

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
  }, [url])

  useEffect(() => {
    detectLocation()
  }, [])

  const states = {
    popularMovies,
    popular,
    popularSeries: series,
    trending,
    myBookmarks,
  }

  const functions = {
    setUrl,
    bookmarkItem,
    deleteItem,
    isBookmarked,
  }

  return (
    <MovieContext.Provider value={{ ...states, ...functions }}>
      {children}
    </MovieContext.Provider>
  )
}

export { MovieContext, MovieProvider }
