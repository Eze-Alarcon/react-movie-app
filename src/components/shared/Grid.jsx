/* eslint space-before-function-paren: 0 */
import React from 'react'
import { MovieCard } from '../movies/MovieCard'

function Grid({ gridItems }) {
  return (
    <article className='space-y-6'>
      <div className='w-full'>
        <h1 className='text-xl font-light tracking-wide'>
          Recommended for you
        </h1>
      </div>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {gridItems.map((movie) => {
          if (movie.backdrop_path === null && movie.poster_path === null) {
            return null
          }
          return <MovieCard key={movie.id} movie={movie} />
        })}
      </div>
    </article>
  )
}

export { Grid }
