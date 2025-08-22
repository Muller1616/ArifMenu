export function DashboardHero() {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-8">
      <div
        className="h-48 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/restaurant-food-spread.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mb-4">Hey Birhane 👋</div>
          <h1 className="text-3xl font-bold mb-4">Welcome to Arif Menu</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Welcome to Arif Menu — where managing menus for all our Merchants becomes simple, organized, and
            stress-free. Stay focused, stay efficient, and deliver excellence every day.
          </p>
        </div>
      </div>
    </div>
  )
}
