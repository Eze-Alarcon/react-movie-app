/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const MovieContext = createContext()

function MovieProvider({ children }) {
  const myBookmarks = useLocalStorage([])

  const [showBM, setShowBM] = useState([])
  const [url, setUrl] = useState(null)

  const [searchedValue, setSearchedValue] = useState('')

  function bookmarkItem(item) {
    const mapItem = {
      ...item,
      saved: true,
    }
    const alreadySaved = myBookmarks.items.some(
      (item) => item.id === mapItem.id
    )
    if (alreadySaved) return
    const newItems = [...myBookmarks.items]
    newItems.push(mapItem)
    myBookmarks.save(newItems)
  }

  function isBookmarked(arr) {
    if (!Array.isArray(arr)) return
    const checkSaved = arr.map((item) => {
      const bookmarked = myBookmarks.items.some((el) => el.id === item.id)
      return {
        ...item,
        saved: bookmarked,
      }
    })
    return checkSaved
  }

  function handleSearch(event) {
    event.preventDefault()
    const val = event.target.value.toLowerCase().trimStart()
    setSearchedValue(val)
  }

  useEffect(() => {
    const arr = [...myBookmarks.items]
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

  useEffect(() => {
    if (url === null) return

    if (url === 'home') {
      // loadHomeItems()
      return
    }
    if (url === 'movies') {
      // loadMovieSection()
      return
    }
    if (url === 'series') {
      // loadSeries()
    }
    if (url === 'bookmark') {
      const arr = [...myBookmarks.items]
      setShowBM(arr)
    }
  }, [url])

  useEffect(() => {
    detectLocation()
  }, [])

  const states = {
    myBookmarks: showBM,
    url,
    searchedValue,
  }

  const functions = {
    setUrl,
    bookmarkItem,
    removeBookmark: myBookmarks.remove,
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
