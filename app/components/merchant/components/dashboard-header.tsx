// import { ArifpayLogo } from "@/components/ui/arifpay-logo"

export function DashboardHeader() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center px-6 py-6">
          <div className="flex items-center">
            <div className="mb-8 flex items-center position-relative">
              <img
                src="dasharificon.svg"
                alt="Arifpay Logo"
                className="h-10 w-auto ml-5 "
              />
              <img src="side.svg" className="ml-5" />
            </div>
          </div>
        </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">Birhane Araya</span>
              <span className="text-xs text-gray-500">Super Admin</span>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}
