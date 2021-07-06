import React, { useState, createContext, useEffect } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [size, setSize] = useState(null)
  const [height, setHeight] = useState(null)

  useEffect(() => {
    if (window) {
      setSize(window.innerWidth)
      setHeight(window.pageYOffset)
      window.addEventListener("resize", () => {
        setSize(window.innerWidth)
      })
      window.addEventListener("scroll", () => {
        setHeight(window.pageYOffset)
      })
    }

    return () => {
      window.removeEventListener("resize", () => {})
      window.removeEventListener("scroll", () => {})
    }
  }, [])


  return (
    <AppContext.Provider
      value={{
        size,
        height,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
