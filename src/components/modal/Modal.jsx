/* eslint-disable multiline-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import React, { useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ModalContext } from '../../context/ModalContext'
import { createPortal } from 'react-dom'
import { ModalContent } from './ModalContent'

function Modal() {
  const { closeModal, modalStatus } = useContext(ModalContext)

  function close(event) {
    event.stopPropagation()
    closeModal()
  }

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
      {modalStatus.open ? (
        <>
          {createPortal(
            <ModalContent
              onClose={close}
              dropIn={dropIn}
              // movieData={modalStatus.information}
            />,
            document.body
          )}
        </>
      ) : null}
    </AnimatePresence>
  )
}

export { Modal }
