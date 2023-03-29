/* eslint-disable space-before-function-paren */
import React from 'react'
import { motion } from 'framer-motion'

function ModalContent({ onClose, dropIn, loading, error, details }) {
  return (
    <motion.div
      className='w-full h-full bg-black z-50 grid place-content-center top-0 bottom-0 left-0 right-0 bg-opacity-50'
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className='md:w-full p-4 bg-darkBlue grid place-content-center top-1/2 left-1/2 right-1/2 bg-opacity-50'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
        onClick={(event) => event.stopPropagation()}
      >
        {loading && !error && <p>Loading data...</p>}
        {!loading && error && <p>There was an error...</p>}
        {!loading && !error && (
          <motion.div className='text-white text-xl'>
            <p>{details.title}</p>
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
