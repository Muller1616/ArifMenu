"use client";

import { useState } from "react"
import LoginScreen from "./auth/login/page"
import ForgotPasswordScreen from "./auth/forgot/page"
import CheckInboxScreen from "./components/CheckInboxScreen"
import MerchantDashboard from "./components/MerchantDashboard"
import { useRouter } from "next/navigation"


export default function App() {
  const router = useRouter()
  const [currentScreen, setCurrentScreen] = useState("login")
  const [userEmail, setUserEmail] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [showCustomerApp, setShowCustomerApp] = useState(false)

  const handleScreenChange = (screen, email = "") => {
    setCurrentScreen(screen);
    if (email) setUserEmail(email);
  };

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setCurrentScreen("dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setCurrentScreen("login");
    setUserEmail("");
    setShowCustomerApp(false);
  };

  const renderScreen = () => {
    if (isAuthenticated) {
      return (
        <MerchantDashboard user={user} onLogout={handleLogout} onShowCustomerApp={() => setShowCustomerApp(true)} />
        
      )
    }

    switch (currentScreen) {
      case "login":
        return (
          <LoginScreen
            onScreenChange={handleScreenChange}
            onLogin={handleLogin}
          />
        );
      case "forgot-password":
        return <ForgotPasswordScreen onScreenChange={handleScreenChange} />;
      case "check-inbox":
        return (
          <CheckInboxScreen
            userEmail={userEmail}
            onScreenChange={handleScreenChange}
            onLogin={handleLogin}
          />
        );
      case "create-password":
        return (
          <CreatePasswordScreen
            onScreenChange={handleScreenChange}
            onLogin={handleLogin}
          />
        );
      default:
        return (
          <LoginScreen
            onScreenChange={handleScreenChange}
            onLogin={handleLogin}
          />
        );
    }
  };

  return <div className="min-h-screen bg-gray-100">{renderScreen()}</div>;
}
