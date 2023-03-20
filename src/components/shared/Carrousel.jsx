/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */
import React from 'react'
import { MoviePoster } from '../movies/MoviePoster'
import { useSaveItem } from '../../hooks/useSaveItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

function Carrousel({ carrouselItems }) {
  const { deleteItem, saveItem } = useSaveItem()

  return (
    <article className='space-y-6'>
      <div className='w-full'>
        <h1 className='text-xl font-light tracking-wide'>Trending</h1>
      </div>
      <div className='customWidth h-[140px] sm:h-[230px] overflow-x-scroll overflow-y-hidden scrollbar-hide'>
        <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          loop
          breakpoints={{
            0: {
              centeredSlides: true,
              freeMode: true,
            },
            1024: {
              freeMode: false,
              centeredSlides: false,
              navigation: true,
            },
          }}
          slidesPerView='auto'
          spaceBetween={16}
          className='h-full flex flex-shrink-0'
        >
          {carrouselItems.map((movie) => (
            <SwiperSlide key={`${movie.id}-carrousel`}>
              <MoviePoster
                movie={movie}
                deleteItem={deleteItem}
                saveItem={saveItem}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  )
}

export { Carrousel }
