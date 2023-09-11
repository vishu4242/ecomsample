import React, { createContext } from 'react'

export const shopContext=createContext(null)

const ShopContextProvider = (props) => {
  return (
    <shopContext.Provider>{props.children}</shopContext.Provider>
  )
}

export default ShopContextProvider