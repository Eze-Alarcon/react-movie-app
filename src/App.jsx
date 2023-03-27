/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
// Context
import { ModalProvider } from './context/ModalContext'
import { MovieProvider } from './context/MovieContext'
// components
import { Header } from './components/shared/Header'
import { HomePage } from './pages/HomePage'
import { SeriesPage } from './pages/SeriesPage'
import { MoviesPage } from './pages/MoviesPage'
import { BookmarkPages } from './pages/BookmarkPages'
import { Routes, Route } from 'react-router-dom'
import { Modal } from './components/modal/Modal'
import { useBookmark } from './hooks/useBookmark'

function App() {
  const {
    removeBookmark,
    bookmarkItem,
    isBookmarked,
    myBookmarks,
    items,
    handleSearch,
    searchBookmark,
  } = useBookmark()
  return (
    <>
      <MovieProvider>
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
                />
              }
            />
            <Route
              path='/bookmark'
              element={
                <BookmarkPages
                  removeBookmark={removeBookmark}
                  bookmarkItem={bookmarkItem}
                  isBookmarked={isBookmarked}
                  myBookmarks={myBookmarks}
                  items={items}
                  handleSearch={handleSearch}
                  searchBookmark={searchBookmark}
                />
              }
            />
          </Routes>
        </ModalProvider>
      </MovieProvider>
    </>
  )
}

export default App
