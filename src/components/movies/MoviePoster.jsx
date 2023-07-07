import React, { useContext, useEffect, useState } from 'react'
import { MovieInfo } from './MovieInfo'
import { Mark } from '../../resources/svg/movies/IconsBookmarks'
import { ModalContext } from '../../context/ModalContext'

function MoviePoster ({ movie, deleteItem, saveItem }) {
  const [marked, setMarked] = useState(() => movie.saved)
  const { openModal } = useContext(ModalContext)

  function handleClick () {
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
    <div className='group/card h-full relative'>
      <img
        src={movie.imgPath}
        alt=''
        loading='lazy'
        className='object-fill rounded-lg h-full aspect-video'
      />
      <div
        onClick={handleClick}
        className='grid place-content-center absolute h-8 aspect-square bg-black bg-opacity-60 rounded-full top-2 right-2 xl:hover:bg-white group/container z-20'
      >
        <Mark marked={marked} key={`${movie.id}-carrousel-mark`} />
      </div>
      <div className='grid gap-1 absolute bottom-0 bg-black bg-opacity-70 w-full px-4 py-2 rounded-b-lg z-20'>
        <MovieInfo info={movie} key={`${movie.id}-carrousel-info`} />
      </div>
      <div className='hidden place-content-center absolute top-0 h-full aspect-video bg-blue group-hover/card:grid group-hover/card:bg-black group-hover/card:bg-opacity-50 text-white z-10'>
        <button
          onClick={() => openModal(movie)}
          className='h-8 p-2 grid place-content-center'
        >
          Show more
        </button>
      </div>
    </div>
  )
}

export { MoviePoster }
