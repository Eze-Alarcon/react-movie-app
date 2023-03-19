/* eslint space-before-function-paren: 0 */
import { useLocalStorage } from './useLocalStorage'

function useSaveItem() {
  const { myBookmarks, saveInLS } = useLocalStorage([])

  function saveItem(item) {
    const newItems = [...myBookmarks]
    newItems.push(item)
    saveInLS(newItems)
  }

  function deleteItem(movieID) {
    const oldItems = [...myBookmarks]
    const searchIndex = oldItems.findIndex((el) => el.id === movieID)
    const newItems = oldItems.slice(searchIndex, 1)
    saveInLS(newItems)
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
