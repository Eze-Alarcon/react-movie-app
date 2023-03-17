/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
// SVG
import { CategoryMovie } from '../../resources/svg/movies/IconsCategories'
import { Mark } from '../../resources/svg/movies/IconsBookmarks'
// json
// import { results as movie } from '../../mocks/trendingMovie.json'
import { images as config } from '../../storage/config.json'

function MoviePoster({ movie }) {
  const { base_url, poster_sizes } = config

  const mappedMovie = {
    imgPath: `${base_url}${poster_sizes.at(-1)}${movie.backdrop_path}`,
    votes: movie.vote_average.toFixed(1),
    date: movie.release_date.substring(0, 4),
    title: movie.title,
  }

  return (
    <>
      <div className='h-full aspect-video relative rounded-lg'>
        <img
          src={mappedMovie.imgPath}
          alt=''
          className='object-fill rounded-lg'
        />
        <div className='grid place-content-center absolute h-8 aspect-square bg-black bg-opacity-60 rounded-full top-2 right-2'>
          <Mark marked={false} />
        </div>
        <div className='grid gap-1 absolute bottom-0 bg-black bg-opacity-70 w-full px-4 py-2'>
          <div className='flex items-center gap-3 font-light opacity-75 text-sm'>
            <p>{mappedMovie.date}</p>
            <span
              className='w-1 h-1 rounded-full bg-gray-400'
              aria-hidden='true'
            />
            <div className='flex items-center gap-2'>
              <CategoryMovie />
              <p>Movie</p>
            </div>
            <span
              className='w-1 h-1 rounded-full bg-gray-400'
              aria-hidden='true'
            />
            <p>{mappedMovie.votes}</p>
          </div>
          <p className='truncate tracking-wide'>{mappedMovie.title}</p>
        </div>
      </div>
    </>
  )
}

export { MoviePoster }
