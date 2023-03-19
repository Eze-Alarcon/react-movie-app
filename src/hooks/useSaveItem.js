/* eslint space-before-function-paren: 0 */
import { useLocalStorage } from './useLocalStorage'

function useSaveItem() {
  const { myBookmarks, saveData } = useLocalStorage([])

  function saveItem(item) {
    const mapItem = {
      ...item,
      saved: true
    }
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

  return {
    myBookmarks,
    saveItem,
    deleteItem,
    isSaved
  }
}

export { useSaveItem }
