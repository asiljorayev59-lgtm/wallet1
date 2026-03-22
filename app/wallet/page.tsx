"use client"

import { useContext } from "react"
import { supabase } from "../../lib/supabase"

export default function Wallet() {
  const { balance, setBalance } = useContext(AppContext)

  return (
    <div>
      <h1>Wallet</h1>
      <button onClick={() => setBalance(balance + 200)}>Deposit</button>
      <button onClick={() => setBalance(balance - 200)}>Withdraw</button>
    </div>
  )
}
