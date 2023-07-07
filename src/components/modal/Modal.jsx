import React, { useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ModalContext } from '../../context/ModalContext'
import { createPortal } from 'react-dom'
import { ModalContent } from './ModalContent'

function Modal () {
  const { closeModal, modalStatus, loading, error, details } =
    useContext(ModalContext)
  const modalContainer = document.getElementById('modalContainer')

  function close (event) {
    event.stopPropagation()
    closeModal()
  }

  return (
    <AnimatePresence>
      {modalStatus.open
        ? (
          <>
            {createPortal(
              <ModalContent
                onClose={close}
                loading={loading}
                error={error}
                details={details}
              />,
              modalContainer
            )}
          </>
          )
        : null}
    </AnimatePresence>
  )
}

export { Modal }
