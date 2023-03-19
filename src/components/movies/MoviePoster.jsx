/* eslint space-before-function-paren: 0 */

import React, { useEffect, useState } from 'react'
import { MovieInfo } from './MovieInfo'
import { Mark } from '../../resources/svg/movies/IconsBookmarks'

function MoviePoster({ movie, deleteItem, saveItem }) {
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
      <div className='h-full aspect-video relative rounded-lg hover:cursor-pointer selection:bg-transparent'>
        <img
          src={movie.imgPath}
          alt=''
          loading='lazy'
          className='object-fill rounded-lg'
        />
        <div
          onClick={handleClick}
          className='grid place-content-center absolute h-8 aspect-square bg-black bg-opacity-60 rounded-full top-2 right-2 hover:bg-white group/container'
        >
          <Mark marked={marked} key={`${movie.id}-carrousel-mark`} />
        </div>
        <div className='grid gap-1 absolute bottom-0 bg-black bg-opacity-70 w-full px-4 py-2'>
          <MovieInfo info={movie} key={`${movie.id}-carrousel-info`} />
        </div>
      </div>
    </>
  )
}

export { MoviePoster }
