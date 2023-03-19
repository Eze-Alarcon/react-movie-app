/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React, { useEffect, useState } from 'react'
import { MovieInfo } from './MovieInfo'
import { Mark } from '../../resources/svg/movies/IconsBookmarks'

function MovieCard({ movie, deleteItem, saveItem }) {
  // console.log(saved)
  const [marked, setMarked] = useState(() => movie.saved)

  function handleClick() {
    if (!marked && !movie.saved) {
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
      <article className='grid gap-2 hover:cursor-pointer selection:bg-transparent'>
        <div className='w-full aspect-video relative'>
          <img
            src={movie.imgPath}
            alt=''
            loading='lazy'
            className='w-full aspect-video object-cover rounded-lg'
          />
          <div
            onClick={handleClick}
            className='grid place-content-center absolute h-8 aspect-square bg-black bg-opacity-60 rounded-full top-2 right-2 hover:bg-white group/container'
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
