"use client"

import { useState } from "react"
import LoginScreen from "./components/LoginScreen"
import ForgotPasswordScreen from "./components/ForgotPasswordScreen"
import CheckInboxScreen from "./components/CheckInboxScreen"
import MerchantDashboard from "./components/MerchantDashboard"
import CustomerApp from "./components/CustomerApp"
import { Dashboard } from "./components/merchant/dashboard"


export default function App() {
  const [currentScreen, setCurrentScreen] = useState("login")
  const [userEmail, setUserEmail] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [showCustomerApp, setShowCustomerApp] = useState(false)

  const handleScreenChange = (screen, email = "") => {
    setCurrentScreen(screen)
    if (email) setUserEmail(email)
  }

  const handleLogin = (userData) => {
    setIsAuthenticated(true)
    setUser(userData)
    setCurrentScreen("dashboard")
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    setCurrentScreen("login")
    setUserEmail("")
    setShowCustomerApp(false)
  }

  const renderScreen = () => {
    if (showCustomerApp) {
      return <CustomerApp onBackToMerchant={() => setShowCustomerApp(false)} />
    }

    if (isAuthenticated) {
      return (
        // <MerchantDashboard user={user} onLogout={handleLogout} onShowCustomerApp={() => setShowCustomerApp(true)} />
        <Dashboard></Dashboard>
      )
    }

    switch (currentScreen) {
      case "login":
        return <LoginScreen onScreenChange={handleScreenChange} onLogin={handleLogin} />
      case "forgot-password":
        return <ForgotPasswordScreen onScreenChange={handleScreenChange} />
      case "check-inbox":
        return <CheckInboxScreen userEmail={userEmail} onScreenChange={handleScreenChange} onLogin={handleLogin} />
      default:
        return <LoginScreen onScreenChange={handleScreenChange} onLogin={handleLogin} />
    }
  }

  return <div className="min-h-screen bg-gray-100">{renderScreen()}</div>
}
