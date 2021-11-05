import { createContext, useContext, useState } from 'react'

const LoaderContext = createContext()

const LoaderContextWrapper = ({ children }) => {
  const [loader, setLoader] = useState(false)
  const [active, setActive] = useState(false)

  const activate = () => {
    setLoader(true)
  }

  const deactivate = () => {
    setLoader(false)
  }

  return (
    <LoaderContext.Provider
      value={{
        loader, activate, deactivate, active, setActive
      }}
    >
      {children}
    </LoaderContext.Provider>
  )
}

export default LoaderContextWrapper

export const useLoaderContext = () => useContext(LoaderContext)
