/* eslint-disable space-before-function-paren */
import React from 'react'
import { motion } from 'framer-motion'

function ModalContent({ onClose, dropIn }) {
  return (
    <motion.div
      className='w-full h-full bg-red absolute z-50 grid place-content-center top-0 bottom-0 left-0 right-0 bg-opacity-50'
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className='h-40 w-40 bg-red grid place-content-center top-1/2 left-1/2 right-1/2 bg-opacity-50'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <motion.div className='text-white text-xl'>
          I'm a modal dialog
        </motion.div>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  )
}

export { ModalContent }
