/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

function useBookmark() {
  const myBookmarks = useLocalStorage([])
  const [searchBookmark, setSearchBookmark] = useState('')
  const [showBM, setShowBM] = useState([])
  const [url, setUrl] = useState(null)

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
    setSearchBookmark(val)
  }

  function detectLocation() {
    const actualURL = window.location.href
    const path = actualURL.split('/').at(-1)

    if (path === '') setUrl('home')
    if (path === 'movies') setUrl('movies')
    if (path === 'tv') setUrl('series')
    if (path === 'bookmark') setUrl('bookmark')
  }

  useEffect(() => {
    const arr = [...myBookmarks.items]
    setShowBM(arr)

    if (searchBookmark.length <= 3) return

    const filter = arr.filter((item) =>
      item.title.toLowerCase().includes(searchBookmark)
    )

    setShowBM(filter)
  }, [searchBookmark])

  useEffect(() => {
    if (url === 'bookmark') {
      const arr = [...myBookmarks.items]
      setShowBM(arr)
    }
  }, [url])

  useEffect(() => {
    detectLocation()
  }, [])

  const states = {
    myBookmarks: myBookmarks.items,
    searchBookmark,
    url,
    items: showBM
  }

  const functions = {
    bookmarkItem,
    removeBookmark: myBookmarks.remove,
    isBookmarked,
    handleSearch,
    setUrl,
  }

  return { ...states, ...functions }
}

export { useBookmark }
