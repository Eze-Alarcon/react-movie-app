/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import { useEffect, useRef, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { DB_NAMES } from '../storage/contants'

function useBookmark() {
  const myBookmarks = useLocalStorage([], DB_NAMES.BOOKMAKRS)
  const [searchBookmark, setSearchBookmark] = useState('')
  const [showBM, setShowBM] = useState([])
  const firstRender = useRef(null)

  function bookmarkItem(item) {
    const mapItem = {
      ...item,
      saved: true,
    }
    const alreadySaved = myBookmarks.items.some(
      (item) => item.id === mapItem.id
    )
    if (alreadySaved) return
    const newItems = [...myBookmarks.items, mapItem]
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

  useEffect(() => {
    if (firstRender.current === null && myBookmarks.items.length > 0) {
      firstRender.current = true
      const arr = [...myBookmarks.items]
      if (searchBookmark.length <= 3) {
        setShowBM(arr)
        return
      }
      const filter = arr.filter((item) =>
        item.title.toLowerCase().includes(searchBookmark)
      )

      setShowBM(filter)
    } else if (firstRender.current) {
      firstRender.current = null
    }
  }, [myBookmarks, searchBookmark])

  const states = {
    myBookmarks: myBookmarks.items,
    searchBookmark,
    filteredBookmarks: showBM
  }

  const functions = {
    bookmarkItem,
    removeBookmark: myBookmarks.remove,
    isBookmarked,
    handleSearch,
  }

  return { ...states, ...functions }
}

export { useBookmark }
