/* eslint space-before-function-paren: 0 */
import React from 'react'
import { MoviePoster } from '../movies/MoviePoster'
import { useSaveItem } from '../../hooks/useSaveItem'

function Carrousel({ carrouselItems }) {
  const { deleteItem, saveItem } = useSaveItem()

  return (
    <article className='space-y-6'>
      <div className='w-full'>
        <h1 className='text-xl font-light tracking-wide'>Trending</h1>
      </div>
      <div className='customWidth h-[140px] md:h-[230px] overflow-x-scroll flex flex-shrink-0 gap-4 overflow-y-hidden scrollbar-hide'>
        {carrouselItems.map((movie) => (
          <MoviePoster
            key={`${movie.id}-carrousel`}
            movie={movie}
            deleteItem={deleteItem}
            saveItem={saveItem}
          />
        ))}
      </div>
    </article>
  )
}

export { Carrousel }
