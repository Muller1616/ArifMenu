"use client";

import { useState } from "react";
import LoginScreen from "./auth/login/page";
import ForgotPasswordScreen from "./auth/forgot/page";
import CheckInboxScreen from "./auth/checkinbox/page";
import MerchantDashboard from "./merchant/dashboard/page";  
import AdminDashboard from "./admin/dashboard/page";        
import CreatePasswordScreen from "./auth/newpassword/page";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("login");
  const [userEmail, setUserEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

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
  };

  const renderScreen = () => {
    if (isAuthenticated && user) {
      if (user.role === "Admin") {
        return <AdminDashboard user={user} onLogout={handleLogout} />;
      } else if (user.role === "Merchant") {
        return <MerchantDashboard user={user} onLogout={handleLogout} />;
      }
    }

    switch (currentScreen) {
      case "login":
        return (
          <LoginScreen onScreenChange={handleScreenChange} onLogin={handleLogin} />
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
        return <CreatePasswordScreen onScreenChange={handleScreenChange} onLogin={handleLogin} />;
      default:
        return (
          <LoginScreen onScreenChange={handleScreenChange} onLogin={handleLogin} />
        );
    }
  };

  return <div className="min-h-screen bg-gray-100">{renderScreen()}</div>;
}
