/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import { createContext, useState } from 'react'

const ModalContext = createContext(false)

function ModalProvider({ children }) {
  const [modalStatus, SetModalStatus] = useState(false)

  function openModal() {
    SetModalStatus(true)
  }

  function closeModal() {
    SetModalStatus(false)
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
