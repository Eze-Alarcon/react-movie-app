/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
// SVG
import { Mark } from '../../resources/svg/movies/IconsBookmarks'
// json
// import { results as movie } from '../../mocks/trendingMovie.json'
import { images as config } from '../../storage/config.json'
import { MovieInfo } from './MovieInfo'

function MoviePoster({ movie }) {
  const { base_url, poster_sizes } = config

  const mappedMovie = {
    imgPath: `${base_url}${poster_sizes.at(-1)}${movie.backdrop_path}`,
    votes: movie.vote_average.toFixed(1),
    date: movie.release_date.substring(0, 4),
    title: movie.title,
    movie: true,
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
          <MovieInfo info={mappedMovie} />
        </div>
      </div>
    </>
  )
}

export { MoviePoster }
