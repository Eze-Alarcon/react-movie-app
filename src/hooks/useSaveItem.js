/* eslint space-before-function-paren: 0 */
import { MovieContext } from '../context/MovieContext'
import { useContext } from 'react'

function useSaveItem() {
  const { myBookmarks, saveData } = useContext(MovieContext)

  function saveItem(item) {
    const mapItem = {
      ...item,
      saved: true
    }
    const alreadySaved = myBookmarks.some((item) => item.id === mapItem.id)
    if (alreadySaved) return
    const newItems = [...myBookmarks]
    newItems.push(mapItem)
    saveData(newItems)
  }

  function deleteItem(movieID) {
    const newItems = [...myBookmarks]
    const searchIndex = newItems.findIndex((el) => el.id === movieID)

    if (searchIndex === -1) return

    newItems.splice(searchIndex, 1)
    saveData(newItems)
  }

  function isSaved(movieID) {
    if (Array.isArray(myBookmarks)) {
      const status = myBookmarks.some((el) => el.id === movieID)
      return status
    }
    return false
  }

  function searchMatchedItems(arr) {
    console.log(myBookmarks)
    if (Array.isArray(myBookmarks) && myBookmarks.length !== 0 && Array.isArray(arr)) {
      for (let i = 0; i < myBookmarks.length; i++) {
        const isBooked = arr.findIndex((el) => el.id === i.id)
        console.log(isBooked, i)

        if (isBooked !== -1) {
          arr[isBooked].saved = true
        }
      }
    }
  }

  return {
    myBookmarks,
    saveItem,
    deleteItem,
    isSaved,
    searchMatchedItems
  }
}

export { useSaveItem }
