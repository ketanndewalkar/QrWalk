import { createContext, useContext, useState } from 'react';
import React from 'react'

export const AppContext = createContext();


const Context = ({children}) => {
  const [popshow, setpopshow] = useState(false)
  return (
    <>
    <AppContext.Provider value={{popshow, setpopshow}}>
        {children}
    </AppContext.Provider>
    </>
)
}

export default Context