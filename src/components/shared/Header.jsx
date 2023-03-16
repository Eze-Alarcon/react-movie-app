/* eslint-disable comma-dangle */
/* eslint space-before-function-paren: 0 */

import React from 'react'
import { IconLogo } from '../../resources/svg/IconLogo'
import {
  IconBookmark,
  IconHome,
  IconMovie,
  IconTv,
} from '../../resources/svg/nav/IconsNav'

function Header() {
  return (
    <div className='h-14 w-full relative z-50 lg:h-full'>
      <div
        id='sticky'
        className='max-w-full h-14 fixed top-0 pt-6 bg-black lg:top-6 lg:pt-0 lg:left-0 lg:pl-6'
      >
        <nav className='bg-darkBlue h-14 w-full flex justify-between items-center px-4 md:h-[72px] rounded-xl lg:h-full lg:w-[92px] lg:flex-col lg:py-8 lg:gap-20'>
          <div className='h-7 aspect-square md:h-8'>
            <IconLogo />
          </div>
          <div className='flex justify-between items-center gap-6 md:gap-10 lg:flex-col lg:mb-auto'>
            <IconHome />
            <IconMovie />
            <IconTv />
            <IconBookmark />
          </div>
          <div className='grid place-content-center h-7 md:h-8'>
            <div className='h-7 md:h-8 lg:h-10 aspect-square border-2 border-white rounded-full'>
              <img src='/images/image-avatar.png' alt='' />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export { Header }
