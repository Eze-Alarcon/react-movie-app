/* eslint space-before-function-paren: 0 */

import React from 'react'
import { SearchBar } from '../components/shared/SearchBar'
import { Grid } from '../components/shared/Grid'
import { Carrousel } from '../components/shared/Carrousel'
import { useMovies } from '../hooks/useMovies'

function HomePage() {
  const { trending, popular } = useMovies()

  return (
    <main className='customWidth grid gap-6 lg:px-0 pb-6'>
      <div className='flex gap-6 items-center'>
        <SearchBar />
      </div>
      <section className='w-full grid gap-6'>
        <Carrousel carrouselItems={trending} />
        <Grid gridItems={popular} title='Recommended for you' />
      </section>
    </main>
  )
}

export { HomePage }
