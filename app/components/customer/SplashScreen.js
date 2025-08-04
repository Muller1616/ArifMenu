"use client"

export default function SplashScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-green-600">A</h1>
              <p className="text-xs text-green-500 font-medium">MENU</p>
            </div>
          </div>

          {/* Floating Food Icons */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center animate-bounce">
            🍕
          </div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center animate-bounce delay-300">
            🍔
          </div>
        </div>

        {/* Brand Text */}
        <h2 className="text-4xl font-bold text-white mb-2">Arif Menu</h2>
        <p className="text-green-100 text-lg mb-8">Delicious food at your fingertips</p>

        {/* Loading Animation */}
        <div className="flex justify-center mb-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
        <p className="text-green-100 text-sm">Loading...</p>
      </div>
    </div>
  )
}
