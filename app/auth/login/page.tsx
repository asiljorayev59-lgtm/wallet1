"use client"

import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()

  const login = () => {
    localStorage.setItem("auth", "true")
    router.push("/dashboard")
  }

  return <button onClick={login}>Login</button>
}
