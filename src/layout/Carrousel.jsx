/* eslint space-before-function-paren: 0 */
/* eslint-disable comma-dangle */

import React from 'react'

// Swipper slider
import { Swiper } from 'swiper/react'
import { Pagination, Navigation, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

function Carrousel({ children }) {
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
          {children}
        </Swiper>
      </div>
    </article>
  )
}

export { Carrousel }
