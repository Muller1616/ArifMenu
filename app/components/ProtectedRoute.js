"use client"

import { useEffect, useState } from "react"
import LoadingScreen from "./LoadingScreen"

export default function ProtectedRoute({ children, isAuthenticated }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate authentication check
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  return children
}
