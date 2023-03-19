/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
// components
import { Header } from './components/shared/Header'
import { HomePage } from './pages/HomePage'
import { SeriesPage } from './pages/SeriesPage'
import { MoviesPage } from './pages/MoviesPage'
import { BookmarkPages } from './pages/BookmarkPages'
import { Routes, Route } from 'react-router-dom'
// import { useSaveItem } from './hooks/useSaveItem'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/tv' element={<SeriesPage />} />
        <Route path='/bookmark' element={<BookmarkPages />} />
      </Routes>
    </>
  )
}

export default App
