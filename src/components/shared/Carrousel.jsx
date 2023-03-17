/* eslint space-before-function-paren: 0 */
import React from 'react'
import { MoviePoster } from '../movies/MoviePoster'

function Carrousel({ carrouselItems }) {
  return (
    <article className='space-y-6'>
      <div className='w-full'>
        <h1 className='text-xl font-light tracking-wide'>Trending</h1>
      </div>
      <div className='customWidth h-[140px] md:h-[230px] overflow-x-scroll flex flex-shrink-0 gap-4 overflow-y-hidden scrollbar-hide'>
        {carrouselItems.map((movie) => {
          if (movie.backdrop_path === null && movie.poster_path === null) {
            return null
          }
          return <MoviePoster key={movie.id} movie={movie} />
        })}
      </div>
    </article>
  )
}

export { Carrousel }
