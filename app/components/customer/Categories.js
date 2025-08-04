"use client"

export default function Categories({ onNavigate }) {
  const categories = [
    {
      id: "breakfast",
      name: "Breakfast",
      icon: "🥞",
      image: "/placeholder.svg?height=120&width=120&text=Breakfast",
      count: 12,
      color: "bg-orange-100",
    },
    {
      id: "lunch",
      name: "Lunch",
      icon: "🍱",
      image: "/placeholder.svg?height=120&width=120&text=Lunch",
      count: 18,
      color: "bg-blue-100",
    },
    {
      id: "dinner",
      name: "Dinner",
      icon: "🍖",
      image: "/placeholder.svg?height=120&width=120&text=Dinner",
      count: 15,
      color: "bg-red-100",
    },
    {
      id: "drinks",
      name: "Drinks",
      icon: "🥤",
      image: "/placeholder.svg?height=120&width=120&text=Drinks",
      count: 8,
      color: "bg-green-100",
    },
    {
      id: "desserts",
      name: "Desserts",
      icon: "🍰",
      image: "/placeholder.svg?height=120&width=120&text=Desserts",
      count: 10,
      color: "bg-purple-100",
    },
    {
      id: "snacks",
      name: "Snacks",
      icon: "🍿",
      image: "/placeholder.svg?height=120&width=120&text=Snacks",
      count: 14,
      color: "bg-yellow-100",
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
          <h1 className="text-lg font-semibold text-gray-900">Categories</h1>
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

      {/* Categories Grid */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onNavigate("category-detail", category)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className={`${category.color} p-6 text-center`}>
                <div className="text-4xl mb-2">{category.icon}</div>
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-16 h-16 rounded-lg mx-auto object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Categories */}
      <div className="px-4 pb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Popular This Week</h2>
        <div className="space-y-3">
          {categories.slice(0, 3).map((category) => (
            <div
              key={`popular-${category.id}`}
              onClick={() => onNavigate("category-detail", category)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className={`${category.color} p-3 rounded-lg`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} items available</p>
                </div>
                <div className="text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
