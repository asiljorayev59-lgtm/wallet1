"use client"
import { createContext, useState } from "react"

export const AppContext = createContext(null)

export const AppProvider = ({ children }: any) => {
  const [user, setUser] = useState(null)
  const [balance, setBalance] = useState(1000)

  return (
    <AppContext.Provider value={{ user, setUser, balance, setBalance }}>
      {children}
    </AppContext.Provider>
  )
}
