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

  function saveItem(newItem) {
    const localStorageItem = window.localStorage.getItem(DB_NAME)
    const newSet = new Set([localStorageItem, newItem])
    const stringifiedItem = JSON.stringify([...newSet])
    window.localStorage.setItem(DB_NAME, stringifiedItem)
    setBookmarks(newItem)
  }

  return { myBookmarks: bookmarks, saveInLS: saveItem }
}

export { useLocalStorage }
