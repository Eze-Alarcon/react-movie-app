/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */

import { createContext, useEffect, useState } from 'react'
import { useFetchDetails } from '../hooks/useFetchDetails'

const ModalContext = createContext(false)

function ModalProvider({ children }) {
  const DETAILS = useFetchDetails()
  const [modalStatus, SetModalStatus] = useState({
    open: false,
    movieID: null,
  })

  function openModal(movieID) {
    SetModalStatus({ open: true, movieID })
  }

  useEffect(() => {
    if (modalStatus.movieID === null) return

    async function call() {
      DETAILS.callAPI(modalStatus.movieID.id, modalStatus.movieID.type)
    }

    call()
  }, [modalStatus])

  function closeModal() {
    SetModalStatus({ open: false, movieID: null })
    DETAILS.handleCancelRequest()
  }

  const modalHandlers = {
    openModal,
    closeModal,
    modalStatus,
    loading: DETAILS.loading,
    error: DETAILS.error,
    details: DETAILS.items,
  }

  return (
    <ModalContext.Provider value={modalHandlers}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
