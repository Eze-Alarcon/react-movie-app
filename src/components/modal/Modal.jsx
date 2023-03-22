/* eslint-disable multiline-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import React, { useContext, useEffect } from 'react'
import { usePresence, AnimatePresence } from 'framer-motion'
import { ModalContext } from '../../context/ModalContext'
import { createPortal } from 'react-dom'
import { ModalContent } from './ModalContent'

function Modal() {
  const { closeModal, modalStatus } = useContext(ModalContext)
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent])

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  }

  return (
    <AnimatePresence>
      {modalStatus ? (
        <>
          {createPortal(
            <ModalContent onClose={closeModal} dropIn={dropIn} />,
            document.body
          )}
        </>
      ) : null}
    </AnimatePresence>
  )
}

export { Modal }

// createPortal(
//   <ModalContent onClose={() => setShowModal(false)} />,
//   document.body
// )
