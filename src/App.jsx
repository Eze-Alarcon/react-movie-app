/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
// components
import { Header } from './components/shared/Header'
import { SearchBar } from './components/shared/SearchBar'
import { MoviePoster } from './components/movies/MoviePoster'
import { MovieCard } from './components/movies/MovieCard'
// json
import { results as trendingMovies } from './mocks/trending.json'
import { results as popularMovies } from './mocks/popular.json'

function App() {
  return (
    <>
      <header
        id='header_container'
        className='w-full flex justify-center lg:flex-col lg:px-0  relative'
      >
        <Header />
      </header>
      <main className='customWidth grid gap-6 lg:px-0 pb-6'>
        <div className='flex gap-6 items-center'>
          <SearchBar />
        </div>
        <section className='w-full grid gap-6'>
          <article className='space-y-6'>
            <div className='w-full'>
              <h1 className='text-xl font-light tracking-wide'>Trending</h1>
            </div>
            <div className='customWidth h-[140px] md:h-[230px] overflow-x-scroll flex flex-shrink-0 gap-4 overflow-y-hidden scrollbar-hide'>
              {trendingMovies.map((movie) => (
                <MoviePoster key={movie.id} movie={movie} />
              ))}
            </div>
          </article>
          <article className='space-y-6'>
            <div className='w-full'>
              <h1 className='text-xl font-light tracking-wide'>
                Recommended for you
              </h1>
            </div>
            <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {popularMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default App
