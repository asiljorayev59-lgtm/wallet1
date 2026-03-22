"use client"

import { useContext } from "react"
import { AppContext } from "@/context/AppContext"

export default function Dashboard() {
  const { balance } = useContext(AppContext)

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Balance: ${balance}</h2>
    </div>
  )
}
