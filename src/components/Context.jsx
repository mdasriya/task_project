import React, { createContext, useState } from 'react'

export const Data=createContext()

const Context = ({children}) => {
    const [text,SetText]=useState()
  return (
    <Data.Provider value={{text,SetText}}>
       {children}
    </Data.Provider>
  )
}

export default Context
