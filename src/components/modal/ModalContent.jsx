import React from 'react'
import { motion } from 'framer-motion'
import { IconClose } from '../../resources/svg/IconClose'

function ModalContent ({ onClose, loading, error, details }) {
  const genres = details.itemgenres?.toString().replaceAll(',', ', ') ?? ''

  return (
    <motion.div
      className='w-full h-[100vh] grid place-content-center bg-opacity-50 fixed top-0 bg-black'
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {loading && !error && <p>Loading data...</p>}
      {!loading && error && <p>There was an error...</p>}
      {!loading && !error && (
        <div className='w-full h-full relative max-h-[90vh] overflow-y-scroll text-white text-xl bg-black pb-4 rounded-xl max-w-[500px] xl:max-w-[780px]'>
          <motion.div
            onClick={(event) => event.stopPropagation()}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='w-full grid place-content-center gap-5 xl:pb-8'
          >
            <div className='w-full aspect-video relative rounded-lg'>
              <img
                src={details.imgPath}
                alt={`poster of ${details.title}`}
                className='w-full aspect-video object-cover object-top rounded-lg selection:bg-transparent'
              />
              <button
                className='w-10 aspect-square rounded-full bg-black bg-opacity-10 absolute top-8 right-8'
                onClick={onClose}
              >
                <IconClose />
              </button>
            </div>
            <div className='grid px-4 gap-4'>
              <p className='lg:text-3xl'>{details.title}</p>
              <p className='text-base font-light tracking-wider'>
                {details.description}
              </p>
              <hr />
              <div className='text-sm font-light grid gap-1 md:text-base lg:font-normal'>
                <p>Genres: {genres}</p>
                <p>Realease date: {details.date}</p>
                <p>Duration: {details.duration} minutes</p>
                <p className='capitalize'>Lenguage: {details.language}</p>
                <p className='capitalize'>Type: {details.type}</p>
                {details.type !== 'movie' && (
                  <>
                    <p>Seasons: {details.serieSeasons}</p>
                    <p>Episodes: {details.serieEpisodes}</p>
                  </>
                )}
                <p>
                  Rating: {details.votes} of {details.voteCount} views
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

export { ModalContent }
