/* eslint space-before-function-paren: 0 */
import { useEffect, useState } from 'react'

function useLocalStorage(initialValue) {
  const [bookmarks, setBookmarks] = useState([])
  const DB_NAME = 'BOOKMARKS_V1'

  useEffect(() => {
    const localStorageItem = window.localStorage.getItem(DB_NAME)
    let parsedItem
    // new user?
    if (!localStorageItem) {
      window.localStorage.setItem(DB_NAME, JSON.stringify(initialValue))
      parsedItem = []
    } else {
      parsedItem = JSON.parse(localStorageItem)
    }

    setBookmarks(parsedItem)
  }, [])

  function saveInLocalStorage(newItem) {
    window.localStorage.setItem(DB_NAME, JSON.stringify(newItem))
    setBookmarks(newItem)
  }

  function bookmarkItem(item) {
    const mapItem = {
      ...item,
      saved: true
    }
    const alreadySaved = bookmarks.some((item) => item.id === mapItem.id)
    if (alreadySaved) return
    const newItems = [...bookmarks]
    newItems.push(mapItem)
    saveInLocalStorage(newItems)
  }

  function deleteItem(movieID) {
    const newItems = [...bookmarks]
    const searchIndex = newItems.findIndex((el) => el.id === movieID)

    if (searchIndex === -1) return

    newItems.splice(searchIndex, 1)
    saveInLocalStorage(newItems)
  }

  return { myBookmarks: bookmarks, saveInLocalStorage, bookmarkItem, deleteItem }
}

export { useLocalStorage }
