"use client"

export default function MapView() {
  const locations = [
    { id: 1, name: "Main Store", address: "123 Main St, City Center", transactions: 45, status: "active" },
    { id: 2, name: "Mall Branch", address: "456 Mall Ave, Shopping District", transactions: 32, status: "active" },
    { id: 3, name: "Airport Terminal", address: "789 Airport Rd, Terminal 2", transactions: 28, status: "active" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Store Locations</h1>
        <p className="text-gray-600 mt-2">Monitor your business locations and transaction activity</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Location Map</h3>
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-500">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>

        {/* Locations List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Locations</h3>
          <div className="space-y-4">
            {locations.map((location) => (
              <div key={location.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{location.name}</h4>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {location.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                <p className="text-sm text-gray-500">{location.transactions} transactions today</p>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
            Add New Location
          </button>
        </div>
      </div>
    </div>
  )
}
