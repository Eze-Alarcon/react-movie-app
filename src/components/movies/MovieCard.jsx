/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React, { useEffect, useState } from 'react'
import { MovieInfo } from './MovieInfo'
import { Mark } from '../../resources/svg/movies/IconsBookmarks'

function MovieCard({ movie, deleteItem, saveItem }) {
  const [marked, setMarked] = useState(movie.saved)

  function handleClick() {
    if (!marked) {
      saveItem(movie)
    } else {
      deleteItem(movie.id)
    }
    setMarked((prevState) => !prevState)
  }

  useEffect(() => {
    if (movie.saved) setMarked(true)
  }, [movie.saved])

  return (
    <>
      <article className='grid gap-2 hover:cursor-pointer selection:bg-transparent select-none'>
        <div className='w-full aspect-video relative selection:bg-transparent select-none'>
          <img
            src={movie.imgPath}
            alt=''
            loading='lazy'
            className='w-full aspect-video object-cover rounded-lg selection:bg-transparent select-none'
          />
          <div
            onClick={handleClick}
            className='grid place-content-center absolute h-8 aspect-square bg-black bg-opacity-60 rounded-full top-2 right-2 active:bg-white xl:hover:bg-white group/container'
          >
            <Mark marked={marked} />
          </div>
        </div>
        <div className='grid gap-1'>
          <MovieInfo info={movie} />
        </div>
      </article>
    </>
  )
}

export { MovieCard }
