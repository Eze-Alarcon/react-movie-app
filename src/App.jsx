/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
// components
import { Header } from './components/shared/Header'
import { HomePage } from './pages/HomePage'
import { SeriesPage } from './pages/SeriesPage'
import { MoviesPage } from './pages/MoviesPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/tv' element={<SeriesPage />} />
        <Route path='/bookmark' element={<h1>TODO: bookmark</h1>} />
      </Routes>
    </>
  )
}

export default App
