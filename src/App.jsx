import React from 'react'
// Context
import { ModalProvider } from './context/ModalContext'
// components
import { Header } from './components/shared/Header'
import { HomePage } from './pages/HomePage'
import { SeriesPage } from './pages/SeriesPage'
import { MoviesPage } from './pages/MoviesPage'
import { BookmarkPages } from './pages/BookmarkPages'
import { Routes, Route } from 'react-router-dom'
import { Modal } from './components/modal/Modal'
import { useBookmark } from './hooks/useBookmark'
import { useStorages } from './hooks/useStorages'

function App () {
  const {
    myBookmarks,
    searchBookmark,
    filteredBookmarks,
    removeBookmark,
    bookmarkItem,
    isBookmarked,
    handleSearch
  } = useBookmark()
  const { moviesCache, seriesCache, trendingDayCache, trendingWeekCache } =
    useStorages()
  return (
    <>
      <ModalProvider>
        <Header />
        <Modal />
        <Routes>
          <Route
            path='/'
            element={
              <HomePage
                removeBookmark={removeBookmark}
                bookmarkItem={bookmarkItem}
                isBookmarked={isBookmarked}
                carrouselCache={trendingDayCache}
                gridCache={trendingWeekCache}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <MoviesPage
                removeBookmark={removeBookmark}
                bookmarkItem={bookmarkItem}
                isBookmarked={isBookmarked}
                cache={moviesCache}
              />
            }
          />
          <Route
            path='/tv'
            element={
              <SeriesPage
                removeBookmark={removeBookmark}
                bookmarkItem={bookmarkItem}
                isBookmarked={isBookmarked}
                cache={seriesCache}
              />
            }
          />
          <Route
            path='/bookmark'
            element={
              <BookmarkPages
                myBookmarks={myBookmarks}
                searchBookmark={searchBookmark}
                filteredBookmarks={filteredBookmarks}
                removeBookmark={removeBookmark}
                bookmarkItem={bookmarkItem}
                isBookmarked={isBookmarked}
                handleSearch={handleSearch}
              />
            }
          />
        </Routes>
      </ModalProvider>
    </>
  )
}

export default App
