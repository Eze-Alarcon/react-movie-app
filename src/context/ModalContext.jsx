/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */

import { createContext, useState } from 'react'

const ModalContext = createContext(false)

function ModalProvider({ children }) {
  const [modalStatus, SetModalStatus] = useState({
    open: false,
    movieID: null,
  })

  function openModal(movieID) {
    SetModalStatus({ open: true, movieID })
  }

  function closeModal() {
    SetModalStatus({ open: false, movieID: null })
  }

  const modalHandlers = {
    openModal,
    closeModal,
    modalStatus,
  }

  return (
    <ModalContext.Provider value={modalHandlers}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
