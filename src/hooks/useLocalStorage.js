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

  return { myBookmarks: bookmarks, saveInLocalStorage }
}

export { useLocalStorage }
