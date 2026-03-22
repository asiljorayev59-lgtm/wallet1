"use client"

import { useState } from "react"

export default function Tasks() {
  const [done, setDone] = useState(false)

  return (
    <div>
      <h1>Tasks</h1>
      <button onClick={() => setDone(true)}>
        {done ? "Completed" : "Claim Reward"}
      </button>
    </div>
  )
}
