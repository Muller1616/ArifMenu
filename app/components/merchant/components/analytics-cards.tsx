export function AnalyticsCards() {
  const cards = [
    {
      title: "Total Lifetime QR Scans",
      value: "12,345",
      icon: "clock",
      color: "red",
    },
    {
      title: "Total Scans This Month",
      value: "10293",
      icon: "calendar",
      color: "amber",
      trend: { value: "1.3%", label: "Up from past week", positive: true },
    },
    {
      title: "Total Scans Today",
      value: "40,689",
      icon: "users",
      color: "emerald",
      trend: { value: "8.5%", label: "Up from yesterday", positive: true },
    },
    {
      title: "Average Daily Scans",
      value: "9,000",
      icon: "chart",
      color: "green",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getIconBgColor(card.color)}`}>
              <AnalyticsIcon type={card.icon} color={card.color} />
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-gray-600">{card.title}</p>
            <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            {card.trend && (
              <div className="flex items-center gap-1 text-sm">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span className={`text-${card.color}-600 font-medium`}>{card.trend.value}</span>
                <span className="text-gray-500">{card.trend.label}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function getIconBgColor(color: string) {
  switch (color) {
    case "red":
      return "bg-red-50"
    case "amber":
      return "bg-amber-50"
    case "emerald":
      return "bg-emerald-50"
    case "green":
      return "bg-green-50"
    default:
      return "bg-gray-100"
  }
}

function AnalyticsIcon({ type, color }: { type: string; color: string }) {
  const getColorClass = (color: string) => {
    switch (color) {
      case "red":
        return "text-red-500"
      case "amber":
        return "text-amber-500"
      case "emerald":
        return "text-emerald-500"
      case "green":
        return "text-[#3CA32B]"
      default:
        return "text-gray-600"
    }
  }

  const iconClass = `w-6 h-6 ${getColorClass(color)}`

  switch (type) {
    case "clock":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )
    case "calendar":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      )
    case "users":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      )
    case "chart":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      )
    default:
      return null
  }
}
