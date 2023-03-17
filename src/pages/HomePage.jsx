/* eslint space-before-function-paren: 0 */

import React from 'react'
// components
import { SearchBar } from '../components/shared/SearchBar'
import { Grid } from '../components/shared/Grid'
import { Carrousel } from '../components/shared/Carrousel'
// json
import { results as trending } from '../mocks/trendingAll.json'
import { results as popularMovies } from '../mocks/popular.json'

function HomePage() {
  return (
    <main className='customWidth grid gap-6 lg:px-0 pb-6'>
      <div className='flex gap-6 items-center'>
        <SearchBar />
      </div>
      <section className='w-full grid gap-6'>
        <Carrousel carrouselItems={trending} />
        <Grid gridItems={popularMovies} title='Recommended for you' />
      </section>
    </main>
  )
}

export { HomePage }
