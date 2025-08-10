"use client"
import { useState } from "react"

export default function Header({ user, setSidebarOpen, onLogout, currentPage, setCurrentPage }) {
  // Added currentPage prop
  const [showUserMenu, setShowUserMenu] = useState(false)

  // Function to format page name for display
  const formatPageName = (pageId) => {
    switch (pageId) {
      case "dashboard":
        return "Dashboard"
      case "merchants":
        return "Merchants"
      case "add-merchant": // Add this case
        return "Add Merchant"
      case "meta-data":
        return "Meta Data"
      case "configurations":
        return "Configurations"
      case "report":
        return "Report"
      case "users":
        return "Users"
      case "roles":
        return "Roles"
      case "permissions":
        return "Permissions"
      case "transactions":
        return "Transactions"
      case "products":
        return "Products"
      case "qr-code":
        return "QR Code Generator"
      case "analytics":
        return "Analytics"
      case "map":
        return "Store Locations"
      case "settings":
        return "Settings"
      default:
        return "Dashboard"
    }
  }

  return (
    <header className="bg-white m-5 rounded-xl">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 mr-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* UPDATED: Dynamic breadcrumbs */}
          <div className="flex items-center text-gray-500 text-sm">
            <span className="font-medium text-gray-700">Arif Menu</span>
            {currentPage === "add-merchant" ? (
              <>
                <span className="mx-2">›</span>
                <button
                  onClick={() => setCurrentPage("merchants")}
                  className="font-medium text-gray-700 hover:text-green-600"
                >
                  Merchants
                </button>
                <span className="mx-2">›</span>
                <span className="font-semibold text-green-600">Add Merchant</span>
              </>
            ) : (
              <>
                <span className="mx-2">›</span>
                <span className="font-semibold text-green-600">{formatPageName(currentPage)}</span>
              </>
            )}
          </div>
        </div>

        {/* User profile section remains the same */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm font-medium">BA</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">Birhane Araya</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-3 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900">Birhane Araya</p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
                <div className="py-1">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile Settings
                  </button>
                  <hr className="my-1" />
                  <button
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
