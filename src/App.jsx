/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
import { Header } from './components/shared/Header'
import { SearchBar } from './components/shared/SearchBar'

function App() {
  return (
    <>
      <header className='w-full flex justify-center md:px-6 md:pt-6 lg:flex-col lg:h-screen lg:py-6'>
        <Header />
      </header>
      <main className='w-full mt-6 px-4 md:px-6'>
        <div className='flex gap-6 items-center'>
          <SearchBar />
        </div>
      </main>
    </>
  )
}

export default App
