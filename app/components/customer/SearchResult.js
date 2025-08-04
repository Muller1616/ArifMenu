"use client"

import { useState } from "react"

export default function SearchResult({ query, onNavigate }) {
  const [searchTerm, setSearchTerm] = useState(query || "")
  const [showKeyboard, setShowKeyboard] = useState(false)

  const searchResults = [
    {
      id: 1,
      name: "Greek Salad",
      price: 12.99,
      image: "/placeholder.svg?height=80&width=80&text=Greek+Salad",
      rating: 4.8,
      description: "Fresh vegetables with feta cheese",
      category: "Salads",
    },
    {
      id: 2,
      name: "Caesar Salad",
      price: 10.99,
      image: "/placeholder.svg?height=80&width=80&text=Caesar+Salad",
      rating: 4.6,
      description: "Classic caesar with croutons",
      category: "Salads",
    },
    {
      id: 3,
      name: "Chicken Salad",
      price: 14.99,
      image: "/placeholder.svg?height=80&width=80&text=Chicken+Salad",
      rating: 4.7,
      description: "Grilled chicken with mixed greens",
      category: "Salads",
    },
  ]

  const filteredResults = searchResults.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const keyboardLayout = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ]

  const handleKeyPress = (key) => {
    if (key === "backspace") {
      setSearchTerm(searchTerm.slice(0, -1))
    } else if (key === "space") {
      setSearchTerm(searchTerm + " ")
    } else {
      setSearchTerm(searchTerm + key)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="flex items-center px-4 py-4">
          <button onClick={() => onNavigate("menu")} className="p-2 text-gray-600 hover:text-gray-900 mr-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowKeyboard(true)}
              placeholder="Search for food..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
            <button className="absolute right-3 top-2.5 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="px-4 py-4">
        {searchTerm && (
          <p className="text-gray-600 mb-4">
            {filteredResults.length} results for "{searchTerm}"
          </p>
        )}

        <div className="space-y-4">
          {filteredResults.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate("food-detail", item)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-lg font-bold text-green-600">${item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{item.category}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {searchTerm && filteredResults.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try searching for something else</p>
          </div>
        )}
      </div>

      {/* Virtual Keyboard */}
      {showKeyboard && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="space-y-2">
            {keyboardLayout.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center space-x-1">
                {row.map((key) => (
                  <button
                    key={key}
                    onClick={() => handleKeyPress(key)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm font-medium transition-colors"
                  >
                    {key.toUpperCase()}
                  </button>
                ))}
              </div>
            ))}
            <div className="flex justify-center space-x-2 mt-2">
              <button
                onClick={() => handleKeyPress("space")}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-2 rounded text-sm font-medium transition-colors"
              >
                Space
              </button>
              <button
                onClick={() => handleKeyPress("backspace")}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                ⌫
              </button>
              <button
                onClick={() => setShowKeyboard(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
