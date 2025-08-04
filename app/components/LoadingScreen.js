"use client"

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <h1 className="text-2xl font-bold text-green-600">A</h1>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Arifpay</h2>
        <p className="text-green-100 mb-8">Loading your dashboard...</p>

        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </div>
    </div>
  )
}
