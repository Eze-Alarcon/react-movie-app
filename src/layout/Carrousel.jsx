/* eslint space-before-function-paren: 0 */
import React from 'react'
function Carrousel({ children }) {
  return (
    <article className='space-y-6'>
      <div className='w-full'>
        <h1 className='text-xl font-light tracking-wide'>Trending</h1>
      </div>
      <div className='customWidth h-[140px] sm:h-[230px] overflow-x-scroll overflow-y-hidden scrollbar-hide'>
        {children}
      </div>
    </article>
  )
}

export { Carrousel }
