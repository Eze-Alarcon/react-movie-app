/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
import { images } from '../../storage/config.json'
import { results } from '../../mocks/popular.json'
import { Mark } from '../../resources/svg/movies/IconsBookmarks'
import { CategoryMovie } from '../../resources/svg/movies/IconsCategories'

function MovieCard() {
  const { base_url, backdrop_sizes } = images // poster_sizes
  const { backdrop_path, vote_average, release_date, title } = results[0] // poster_path

  const originalSize = backdrop_sizes.at(1)
  return (
    <>
      <article className='grid gap-2'>
        <div className='w-full aspect-video relative'>
          <img
            src={`${base_url}${originalSize}${backdrop_path}`}
            alt=''
            className='object-cover rounded-lg'
          />
          <div className='grid place-content-center absolute h-8 aspect-square bg-black bg-opacity-60 rounded-full top-2 right-2'>
            <Mark marked={false} />
          </div>
        </div>
        <div className='grid gap-1'>
          <div className='flex items-center gap-3 font-light opacity-75 text-sm'>
            <p>{release_date.substring(0, 4)}</p>
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
            <p>{vote_average}</p>
          </div>
          <p className='truncate tracking-wide'>{title}</p>
        </div>
      </article>
    </>
  )
}

export { MovieCard }
