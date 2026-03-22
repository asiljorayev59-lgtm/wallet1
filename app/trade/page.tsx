"use client"

import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export default function Trade() {
  const { balance, setBalance } = useContext(AppContext)

  const buy = () => setBalance(balance - 100)
  const sell = () => setBalance(balance + 100)

  return (
    <div>
      <h1>Trade</h1>
      <button onClick={buy}>Buy</button>
      <button onClick={sell}>Sell</button>
    </div>
  )
}
