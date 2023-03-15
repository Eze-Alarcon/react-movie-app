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
    <header className='w-full flex justify-center md:px-6 md:pt-6 lg:flex-col lg:h-screen lg:py-6'>
      <nav className='bg-darkBlue h-14 w-full flex justify-between items-center px-4 md:h-[72px] md:rounded-xl lg:h-full lg:w-[72px] lg:flex-col lg:py-8 lg:justify-start lg:gap-20'>
        <div className='h-7 aspect-square md:h-8'>
          <IconLogo />
        </div>
        <div className='flex justify-between items-center gap-6 md:gap-10 lg:flex-col'>
          <IconHome />
          <IconMovie />
          <IconTv />
          <IconBookmark />
        </div>
        <div className='lg:place-self-center'>
          <div className='h-7 aspect-square border-2 border-white rounded-full md:h-8'>
            <img src='/images/image-avatar.png' alt='' />
          </div>
        </div>
      </nav>
    </header>
  )
}

export { Header }
