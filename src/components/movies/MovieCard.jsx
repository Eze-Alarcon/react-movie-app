/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React, { useState } from 'react'
// SVG
import { Mark } from '../../resources/svg/movies/IconsBookmarks'
// import { CategoryMovie } from '../../resources/svg/movies/IconsCategories'
// json
import { images as config } from '../../storage/config.json'
import { MovieInfo } from './MovieInfo'

function MovieCard({ movie }) {
  const [marked, setMarked] = useState(false)
  const { base_url, backdrop_sizes } = config

  const mappedMovie = {
    imgPath: `${base_url}${backdrop_sizes.at(-1)}${movie.backdrop_path}`,
    votes: movie.vote_average.toFixed(1),
    date: movie.release_date.substring(0, 4),
    title: movie.title,
    movie: true,
  }

  function handleClick() {
    setMarked((prevState) => !prevState)
  }

  return (
    <>
      <article className='grid gap-2 hover:cursor-pointer selection:bg-transparent'>
        <div className='w-full aspect-video relative'>
          <img
            src={mappedMovie.imgPath}
            alt=''
            className='object-cover rounded-lg'
          />
          <div
            onClick={handleClick}
            className='grid place-content-center absolute h-8 aspect-square bg-black bg-opacity-60 rounded-full top-2 right-2'
          >
            <Mark marked={marked} />
          </div>
        </div>
        <div className='grid gap-1'>
          <MovieInfo info={mappedMovie} />
        </div>
      </article>
    </>
  )
}

export { MovieCard }
