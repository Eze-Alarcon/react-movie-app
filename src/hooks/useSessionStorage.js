/* eslint space-before-function-paren: 0 */
import { useEffect, useState } from 'react'

function useSessionStorage(initialValue, DB_NAME) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const sessionStorage = window.sessionStorage.getItem(DB_NAME)
    let parsedItem
    // new user?
    if (!sessionStorage) {
      window.sessionStorage.setItem(DB_NAME, JSON.stringify(initialValue))
      parsedItem = []
    } else {
      parsedItem = JSON.parse(sessionStorage)
    }

    setItems(parsedItem)
  }, [])

  function save(newItem) {
    window.sessionStorage.setItem(DB_NAME, JSON.stringify(newItem))
    setItems(newItem)
  }

  function remove(movieID) {
    const newItems = [...items]
    const searchIndex = newItems.findIndex((el) => el.id === movieID)

    if (searchIndex === -1) return

    newItems.splice(searchIndex, 1)
    save(newItems)
  }

  return { items, save, remove }
}

export { useSessionStorage }
