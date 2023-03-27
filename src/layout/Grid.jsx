/* eslint space-before-function-paren: 0 */

import React from 'react'

function Grid({ children, title }) {
  return (
    <article className='space-y-6'>
      <div className='w-full'>
        <h1 className='text-xl font-light tracking-wide'>{title}</h1>
      </div>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {children}
      </div>
    </article>
  )
}

export { Grid }
