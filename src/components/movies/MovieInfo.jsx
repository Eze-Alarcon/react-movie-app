import React from 'react'
import {
  CategoryMovie,
  CategoryTv
} from '../../resources/svg/movies/IconsCategories'

function MovieInfo ({ info }) {
  return (
    <>
      <div className='flex items-center gap-3 font-light opacity-75 text-sm'>
        <p>{info.date}</p>
        <span className='w-1 h-1 rounded-full bg-gray-400' aria-hidden='true' />
        <div className='flex items-center gap-2'>
          {info.type === 'movie' ? <CategoryMovie /> : <CategoryTv />}
          <p>{info.type === 'movie' ? 'Movie' : ' TV Serie'}</p>
        </div>
        <span className='w-1 h-1 rounded-full bg-gray-400' aria-hidden='true' />
        <p>{info.votes}</p>
      </div>
      <p className='truncate tracking-wide'>{info.title}</p>
    </>
  )
}

export { MovieInfo }
