"use client"

import { useState, useEffect } from "react"
import SplashScreen from "./customer/SplashScreen"
import MenuLanding from "./customer/MenuLanding"
import FoodDetail from "./customer/FoodDetail"
import SearchResult from "./customer/SearchResult"
import Categories from "./customer/Categories"
import OurSpecials from "./customer/OurSpecials"
import CategoryDetail from "./customer/CategoryDetail"

export default function CustomerApp({ onBackToMerchant }) {
  const [currentScreen, setCurrentScreen] = useState("splash")
  const [selectedFood, setSelectedFood] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    // Auto-navigate from splash to menu after 3 seconds
    if (currentScreen === "splash") {
      const timer = setTimeout(() => {
        setCurrentScreen("menu")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [currentScreen])

  const handleNavigation = (screen, data = null) => {
    setCurrentScreen(screen)
    if (data) {
      if (screen === "food-detail") setSelectedFood(data)
      if (screen === "search") setSearchQuery(data)
      if (screen === "category-detail") setSelectedCategory(data)
    }
  }

  const addToCart = (item) => {
    setCart([...cart, { ...item, id: Date.now() }])
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <SplashScreen />
      case "menu":
        return <MenuLanding onNavigate={handleNavigation} cart={cart} />
      case "food-detail":
        return <FoodDetail food={selectedFood} onNavigate={handleNavigation} onAddToCart={addToCart} />
      case "search":
        return <SearchResult query={searchQuery} onNavigate={handleNavigation} />
      case "categories":
        return <Categories onNavigate={handleNavigation} />
      case "specials":
        return <OurSpecials onNavigate={handleNavigation} />
      case "category-detail":
        return <CategoryDetail category={selectedCategory} onNavigate={handleNavigation} />
      default:
        return <MenuLanding onNavigate={handleNavigation} cart={cart} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Merchant Button (for demo) */}
      {currentScreen !== "splash" && (
        <button
          onClick={onBackToMerchant}
          className="fixed top-4 right-4 z-50 bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700 transition-colors"
        >
          Back to Merchant
        </button>
      )}
      {renderScreen()}
    </div>
  )
}
