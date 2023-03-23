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
  const { myBookmarks, saveInLocalStorage } = useLocalStorage([])
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

      if (bookmarked) {
        console.log({
          name: item.title,
          id: item.id,
          bookmarked,
        })
      }
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
    const newTrending = isBookmarked(mapTrending)
    const newPopular = isBookmarked(mapPopular)
    setTrending(newTrending)
    setPopular(newPopular)
  }

  function loadMovieSection() {
    const mapMovies = mapData(apiMovies.results)
    const newMovies = isBookmarked(mapMovies)
    setPopularMovies(newMovies)
  }

  function loadSeries() {
    const mapSeries = mapData(apiSeries.results)
    const newSeries = isBookmarked(mapSeries)
    setSeries(newSeries)
  }

  function bookmarkItem(item) {
    const mapItem = {
      ...item,
      saved: true,
    }
    const alreadySaved = myBookmarks.some((item) => item.id === mapItem.id)
    if (alreadySaved) return
    const newItems = [...myBookmarks]
    newItems.push(mapItem)
    saveInLocalStorage(newItems)
    // const newData = [...allData]
    // const index = newData.findIndex((item) => item.id === mapItem.id)
    // newData[index].saved = true
    // setAllData(newData)
  }

  function deleteItem(movieID) {
    const newItems = [...myBookmarks]
    const searchIndex = newItems.findIndex((el) => el.id === movieID)

    if (searchIndex === -1) return

    newItems.splice(searchIndex, 1)
    saveInLocalStorage(newItems)

    // const newData = [...allData]
    // const index = newData.findIndex((item) => item.id === movieID)
    // newData[index].saved = false
    // setAllData(newData)
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
  }

  return (
    <MovieContext.Provider value={{ ...states, ...functions }}>
      {children}
    </MovieContext.Provider>
  )
}

export { MovieContext, MovieProvider }
