/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
// components
import { Header } from './components/shared/Header'
import { SearchBar } from './components/shared/SearchBar'
import { MovieCard } from './components/movies/MovieCard'
// import { MoviePoster } from './components/movies/MoviePoster'
// json
import { results as popularMovies } from './mocks/popular.json'
// import { results as trendingMovies } from './mocks/trending.json'

function App() {
  return (
    <>
      <header
        id='header_container'
        className='w-full flex justify-center pt-6 lg:flex-col lg:px-0  relative'
      >
        <Header />
      </header>
      <main className='w-full mt-6 grid gap-6 lg:px-0 pb-6'>
        <div className='flex gap-6 items-center'>
          <SearchBar />
        </div>
        <section className='w-full grid gap-6'>
          <article className='space-y-6'>
            <div className='w-full'>
              <h1 className='text-xl font-light tracking-wide'>Trending</h1>
            </div>
            {/* <div className='h-[140px] md:h-[230px]'>
              {trendingMovies.map((movie) => (
                <MoviePoster key={movie.id} movie={movie} />
              ))}
            </div> */}
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
