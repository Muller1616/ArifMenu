"use client"

export default function OurSpecials({ onNavigate }) {
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      originalPrice: 15.99,
      specialPrice: 12.99,
      image: "/placeholder.svg?height=120&width=120&text=Greek+Salad",
      rating: 4.8,
      description: "Fresh vegetables with feta cheese and olive oil",
      discount: "20% OFF",
      badge: "Limited Time",
    },
    {
      id: 2,
      name: "Caesar Salad",
      originalPrice: 13.99,
      specialPrice: 10.99,
      image: "/placeholder.svg?height=120&width=120&text=Caesar+Salad",
      rating: 4.6,
      description: "Classic caesar with croutons and parmesan",
      discount: "25% OFF",
      badge: "Popular",
    },
    {
      id: 3,
      name: "BBQ Chicken Salad",
      originalPrice: 18.99,
      specialPrice: 15.99,
      image: "/placeholder.svg?height=120&width=120&text=BBQ+Chicken",
      rating: 4.9,
      description: "Grilled BBQ chicken with mixed greens",
      discount: "15% OFF",
      badge: "Chef's Choice",
    },
    {
      id: 4,
      name: "Fruit Salad Bowl",
      originalPrice: 12.99,
      specialPrice: 9.99,
      image: "/placeholder.svg?height=120&width=120&text=Fruit+Salad",
      rating: 4.7,
      description: "Fresh seasonal fruits with honey dressing",
      discount: "30% OFF",
      badge: "Healthy",
    },
  ]

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
          <h1 className="text-lg font-semibold text-gray-900">Our Specials</h1>
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
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 mx-4 mt-4 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-1">Today's Special</h2>
            <p className="text-green-100">Up to 30% off on selected items</p>
          </div>
          <div className="text-4xl">⭐</div>
        </div>
      </div>

      {/* Specials Grid */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specials.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate("food-detail", item)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer relative"
            >
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">{item.discount}</span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">{item.badge}</span>
              </div>

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
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-green-600">${item.specialPrice}</span>
                    <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                  </div>
                  <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Limited Time Offers */}
      <div className="px-4 pb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Limited Time Offers</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <span className="text-2xl">⏰</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Flash Sale</h3>
              <p className="text-sm text-gray-600">Get 50% off on your second order today!</p>
            </div>
            <div className="text-red-600 font-bold">50% OFF</div>
          </div>
        </div>
      </div>
    </div>
  )
}
