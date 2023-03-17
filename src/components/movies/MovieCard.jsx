/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React, { useState } from 'react'
// Components
import { MovieInfo } from './MovieInfo'
// SVG
import { Mark } from '../../resources/svg/movies/IconsBookmarks'
// json
import { images as config } from '../../storage/config.json'

function MovieCard({ movie }) {
  const [marked, setMarked] = useState(false)
  const { base_url, backdrop_sizes } = config

  const mappedDate = movie.release_date ?? movie.first_air_date
  const mappedTitle = movie.title ?? movie.name
  const mappedImg = movie.backdrop_path ?? movie.poster_path

  const mappedMovie = {
    imgPath: `${base_url}${backdrop_sizes.at(-1)}${mappedImg}`,
    votes: movie.vote_average.toFixed(1),
    date: mappedDate.substring(0, 4),
    title: mappedTitle,
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
          <MovieInfo info={mappedMovie} />
        </div>
      </article>
    </>
  )
}

export { MovieCard }
