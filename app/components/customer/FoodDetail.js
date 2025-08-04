"use client"

import { useState } from "react"

export default function FoodDetail({ food, onNavigate, onAddToCart }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState({})

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Food item not found</p>
      </div>
    )
  }

  const handleAddToCart = () => {
    onAddToCart({
      ...food,
      quantity,
      options: selectedOptions,
      totalPrice: food.price * quantity,
    })
    // Show success message or navigate back
    onNavigate("menu")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={() => onNavigate("menu")} className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Food Details</h1>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Food Image */}
      <div className="relative">
        <img src={food.image || "/placeholder.svg"} alt={food.name} className="w-full h-64 sm:h-80 object-cover" />
        <div className="absolute bottom-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-medium">{food.rating}</span>
          </div>
        </div>
      </div>

      {/* Food Info */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-10 px-6 pt-6 pb-24">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{food.name}</h1>
            <p className="text-gray-600 leading-relaxed">{food.description}</p>
          </div>
          <div className="ml-4">
            <span className="text-2xl font-bold text-green-600">${food.price}</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-1">⏱️</div>
            <p className="text-sm text-gray-600">15-20 min</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-1">🔥</div>
            <p className="text-sm text-gray-600">350 cal</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-1">⭐</div>
            <p className="text-sm text-gray-600">{food.rating} rating</p>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ingredients</h3>
          <div className="flex flex-wrap gap-2">
            {["Lettuce", "Tomatoes", "Cucumber", "Feta Cheese", "Olives", "Olive Oil"].map((ingredient, index) => (
              <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        {/* Customization Options */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Customize</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Extra Cheese</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">+$2.00</span>
                <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">No Onions</span>
              <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
            </div>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-xl font-semibold text-gray-900 w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={handleAddToCart}
          className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
        >
          Add to Cart - ${(food.price * quantity).toFixed(2)}
        </button>
      </div>
    </div>
  )
}
