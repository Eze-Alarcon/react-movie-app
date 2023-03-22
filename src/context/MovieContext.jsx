/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import { createContext, useEffect, useState } from 'react'
import apiPopularMovies from '../mocks/popularMovies.json'
import apiPopular from '../mocks/popular.json'
import apiPopularSeries from '../mocks/popularSeries.json'
import apiTrending from '../mocks/trendingAll.json'
// import witoutResults from '../mocks/withoutResults.json'
import { mapData } from '../hooks/useMapData'
// import { useLocalStorage } from '../hooks/useLocalStorage'

const MovieContext = createContext()

function MovieProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([])
  const DB_NAME = 'BOOKMARKS_V1'
  // states
  const [allData, setAllData] = useState([])
  const [popular, setPopular] = useState([])
  const [series, setSeries] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [trending, setTrending] = useState([])
  const [url, setUrl] = useState('')

  function initialState() {
    const popularResponse = mapData(apiPopular.results, 'popular')
    const popularMoviesResponse = mapData(apiPopularMovies.results, 'movies')

    const popularSeriesResponse = mapData(apiPopularSeries.results, 'series')

    const trendingResponse = mapData(apiTrending.results, 'trending')

    const response = [
      ...popularResponse,
      ...popularMoviesResponse,
      ...popularSeriesResponse,
      ...trendingResponse,
    ]

    return response
  }

  function getBookmarksFromDB() {
    const localStorageItem = window.localStorage.getItem(DB_NAME)
    let parsedItem
    // new user?
    if (!localStorageItem) {
      window.localStorage.setItem(DB_NAME, JSON.stringify([]))
      parsedItem = []
    } else {
      parsedItem = JSON.parse(localStorageItem)
    }

    setBookmarks(parsedItem)
  }

  useEffect(() => {
    const actualURL = window.location.href
    const path = actualURL.split('/').at(-1)
    if (path === '') setUrl('home')
    if (path === 'movies') setUrl('movies')
    if (path === 'tv') setUrl('series')
    if (path === 'bookmark') return
    const response = initialState()

    getBookmarksFromDB()

    const checkSaved = response.map((item) => {
      const isSaved = bookmarks.some((el) => el.id === item.id)

      return {
        ...item,
        saved: isSaved,
      }
    })

    setAllData(() => checkSaved)
  }, [])

  function filterByCategory(category) {
    const data = allData
    const dataFilter = data.filter((item) => item.section === category)
    return dataFilter
  }

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

  useEffect(() => {
    if (url === 'bookmark') return

    if (allData.length < 1) return

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
  }, [url, allData])

  function saveItem(item) {
    const mapItem = {
      ...item,
      saved: true,
    }
    const alreadySaved = bookmarks.some((item) => item.id === mapItem.id)
    if (alreadySaved) return
    const newItems = [...bookmarks]
    newItems.push(mapItem)
    const newData = [...allData]
    const index = newData.findIndex((item) => item.id === mapItem.id)
    newData[index].saved = true
    saveBookmarks(newItems)
    setAllData(newData)
  }

  function deleteItem(movieID) {
    const newItems = [...bookmarks]
    const searchIndex = newItems.findIndex((el) => el.id === movieID)

    if (searchIndex === -1) return

    newItems.splice(searchIndex, 1)
    saveBookmarks(newItems)

    const newData = [...allData]
    const index = newData.findIndex((item) => item.id === movieID)
    newData[index].saved = false
    setAllData(newData)
  }

  function saveBookmarks(newItem) {
    window.localStorage.setItem(DB_NAME, JSON.stringify(newItem))
    setBookmarks(newItem)
  }

  const states = {
    allData,
    popularMovies,
    popular,
    popularSeries: series,
    trending,
    bookmarks,
  }

  const functions = {
    filterByCategory,
    setAllData,
    setUrl,
    saveItem,
    deleteItem,
  }

  return (
    <MovieContext.Provider value={{ ...states, ...functions }}>
      {children}
    </MovieContext.Provider>
  )
}

export { MovieContext, MovieProvider }
