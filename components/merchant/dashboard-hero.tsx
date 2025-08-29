export default function MerchantDashboardHero() {
  return (
    <div className="relative h-auto rounded-2xl overflow-hidden mb-6 sm:mb-8">
      <div
        className="h-40 sm:h-48 md:h-56 lg:h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/restaurant-food-spread.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white">
          <div className="inline-block bg-white bg-opacity-20 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm mb-1 sm:mb-3">
            Hey Birhane 👋
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
            Welcome to Arif Menu
          </h1>
          <p className="text-sm sm:text-base mb-5 md:text-lg opacity-90 max-w-xl sm:max-w-2xl">
            Welcome to Arif Menu — where managing menus for all our Merchants becomes simple, organized, and
            stress-free. Stay focused, stay efficient, and deliver excellence every day.
          </p>
        </div>
      </div>
    </div>
  )
}
