/* eslint space-before-function-paren: 0 */

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

function App() {
  return (
    <>
      <ModalProvider>
        <Header />
        <Modal />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/tv' element={<SeriesPage />} />
          <Route path='/bookmark' element={<BookmarkPages />} />
        </Routes>
      </ModalProvider>
    </>
  )
}

export default App
