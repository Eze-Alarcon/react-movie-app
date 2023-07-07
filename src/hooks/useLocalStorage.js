import { useEffect, useState } from 'react'

function useLocalStorage (initialValue, DB_NAME) {
  const [items, setItems] = useState([])

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

    setItems(parsedItem)
  }, [])

  function save (newItem) {
    window.localStorage.setItem(DB_NAME, JSON.stringify(newItem))
    setItems(newItem)
  }

  function remove (movieID) {
    const newItems = [...items]
    const searchIndex = newItems.findIndex((el) => el.id === movieID)

    if (searchIndex === -1) return

    newItems.splice(searchIndex, 1)
    save(newItems)
  }

  return { items, save, remove }
}

export { useLocalStorage }
