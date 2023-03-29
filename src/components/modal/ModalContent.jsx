/* eslint-disable space-before-function-paren */
import React from 'react'
import { motion } from 'framer-motion'
import DATA from '../../mocks/map.json'

function ModalContent({ onClose, dropIn, loading, error, details }) {
  return (
    <motion.div
      className='h-0 relative z-50'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className='w-full h-screen bg-darkBlue grid place-content-center bg-opacity-50 fixed top-0'
        onClick={onClose}
      >
        {loading && !error && <p>Loading data...</p>}
        {!loading && error && <p>There was an error...</p>}
        {!loading && !error && (
          <motion.div
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='text-white text-xl w-full mx-auto bg-blue'
          >
            <div className='w-full aspect-video mx-auto'>
              {/* <img
                src={DATA.imgPath}
                alt={`poster of ${DATA.title}`}
                className='w-full aspect-video object-cover rounded-lg selection:bg-transparent'
              /> */}
            </div>
            <p>{DATA.title}</p>
            <button className='bg-red' onClick={onClose}>
              Close
            </button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export { ModalContent }
