"use client"

export default function CategoryDetail({ category, onNavigate }) {
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Category not found</p>
      </div>
    )
  }

  const categoryItems = [
    {
      id: 1,
      name: "Mediterranean Chicken Sandwich",
      price: 14.99,
      image: "/placeholder.svg?height=80&width=80&text=Med+Chicken",
      rating: 4.8,
      description: "Grilled chicken with Mediterranean spices, fresh vegetables, and tzatziki sauce",
      prepTime: "15-20 min",
    },
    {
      id: 2,
      name: "Roasted Veggie Quinoa Bowl",
      price: 12.99,
      image: "/placeholder.svg?height=80&width=80&text=Quinoa+Bowl",
      rating: 4.6,
      description: "Nutritious quinoa bowl with roasted seasonal vegetables and tahini dressing",
      prepTime: "10-15 min",
    },
    {
      id: 3,
      name: "BBQ Pulled Pork Sandwich",
      price: 16.99,
      image: "/placeholder.svg?height=80&width=80&text=BBQ+Pork",
      rating: 4.9,
      description: "Slow-cooked pulled pork with BBQ sauce, coleslaw, and pickles",
      prepTime: "12-18 min",
    },
    {
      id: 4,
      name: "Greek Salad",
      price: 11.99,
      image: "/placeholder.svg?height=80&width=80&text=Greek+Salad",
      rating: 4.7,
      description: "Fresh tomatoes, cucumbers, olives, feta cheese with olive oil dressing",
      prepTime: "5-10 min",
    },
    {
      id: 5,
      name: "Avocado Toast Special",
      price: 9.99,
      image: "/placeholder.svg?height=80&width=80&text=Avocado+Toast",
      rating: 4.5,
      description: "Multigrain toast topped with fresh avocado, cherry tomatoes, and seeds",
      prepTime: "8-12 min",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={() => onNavigate("categories")} className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">{category.name}</h1>
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

      {/* Category Header */}
      <div className={`${category.color} mx-4 mt-4 rounded-lg p-6`}>
        <div className="flex items-center space-x-4">
          <div className="text-4xl">{category.icon}</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
            <p className="text-gray-700">{category.count} delicious items</p>
          </div>
        </div>
      </div>

      {/* Filter Options */}
      <div className="px-4 py-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {["All", "Popular", "New", "Vegetarian", "Spicy"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Items List */}
      <div className="px-4 pb-6">
        <div className="space-y-4">
          {categoryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate("food-detail", item)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 truncate pr-2">{item.name}</h3>
                    <span className="text-lg font-bold text-green-600 flex-shrink-0">${item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm text-gray-600">{item.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm">{item.prepTime}</span>
                      </div>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-green-700 transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
