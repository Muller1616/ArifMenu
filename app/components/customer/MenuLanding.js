"use client"

import { useState } from "react"

export default function MenuLanding({ onNavigate, cart }) {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All", icon: "🍽️" },
    { id: "breakfast", name: "Breakfast", icon: "🥞" },
    { id: "lunch", name: "Lunch", icon: "🍱" },
    { id: "dinner", name: "Dinner", icon: "🍖" },
    { id: "drinks", name: "Drinks", icon: "🥤" },
  ]

  const featuredItems = [
    {
      id: 1,
      name: "Greek Salad",
      price: 12.99,
      image: "/placeholder.svg?height=120&width=120&text=Greek+Salad",
      rating: 4.8,
      description: "Fresh vegetables with feta cheese",
      category: "lunch",
    },
    {
      id: 2,
      name: "Caesar Salad",
      price: 10.99,
      image: "/placeholder.svg?height=120&width=120&text=Caesar+Salad",
      rating: 4.6,
      description: "Classic caesar with croutons",
      category: "lunch",
    },
    {
      id: 3,
      name: "Grilled Chicken",
      price: 18.99,
      image: "/placeholder.svg?height=120&width=120&text=Grilled+Chicken",
      rating: 4.9,
      description: "Perfectly seasoned grilled chicken",
      category: "dinner",
    },
    {
      id: 4,
      name: "Pancakes",
      price: 8.99,
      image: "/placeholder.svg?height=120&width=120&text=Pancakes",
      rating: 4.7,
      description: "Fluffy pancakes with syrup",
      category: "breakfast",
    },
  ]

  const filteredItems =
    activeCategory === "all" ? featuredItems : featuredItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Arif Menu</h1>
              <p className="text-sm text-gray-600">Welcome to Fresh Cafe</p>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => onNavigate("search")} className="p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
                  />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => onNavigate("categories")}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-2">📂</div>
            <h3 className="font-semibold text-gray-900">Categories</h3>
            <p className="text-sm text-gray-600">Browse by category</p>
          </button>
          <button
            onClick={() => onNavigate("specials")}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-2">⭐</div>
            <h3 className="font-semibold text-gray-900">Our Specials</h3>
            <p className="text-sm text-gray-600">Today's special offers</p>
          </button>
        </div>
      </div>

      {/* Featured Items */}
      <div className="px-4 pb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate("food-detail", item)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">${item.price}</span>
                  <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700 transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <button className="flex flex-col items-center py-2 text-green-600">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span className="text-xs">Home</span>
          </button>
          <button onClick={() => onNavigate("search")} className="flex flex-col items-center py-2 text-gray-600">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-xs">Search</span>
          </button>
          <button onClick={() => onNavigate("categories")} className="flex flex-col items-center py-2 text-gray-600">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span className="text-xs">Categories</span>
          </button>
          <button className="flex flex-col items-center py-2 text-gray-600 relative">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
              />
            </svg>
            <span className="text-xs">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
