"use client";

import { useState } from "react";

export default function Header({ user, setSidebarOpen, onLogout, currentPage, setCurrentPage }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const formatPageName = (pageId) => {
    const names = {
      dashboard: "Dashboard",
      merchants: "Merchants",
      "add-merchant": "Add Merchant",
      "meta-data": "Meta Data",
      configurations: "Configurations",
      report: "Report",
      users: "Users",
      roles: "Roles",
      permissions: "Permissions",
      transactions: "Transactions",
      products: "Products",
      "qr-code": "QR Code Generator",
      analytics: "Analytics",
      map: "Store Locations",
      settings: "Settings",
    };
    return names[pageId] || "Dashboard";
  };

  return (
    <header className="bg-white m-3 rounded-xl shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 flex-wrap">
        {/* Left Section */}
        <div className="flex items-center flex-1 min-w-0">
          {/* Drawer toggle on mobile */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 mr-3 flex-shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Breadcrumbs */}
          <div className="flex items-center text-gray-500 text-sm overflow-hidden whitespace-nowrap min-w-0">
            <span className="font-medium text-gray-700 truncate">Arif Menu</span>
            {currentPage === "add-merchant" ? (
              <>
                <span className="mx-2">›</span>
                <button
                  onClick={() => setCurrentPage("merchants")}
                  className="font-medium text-gray-700 hover:text-green-600 truncate"
                >
                  Merchants
                </button>
                <span className="mx-2">›</span>
                <span className="font-semibold text-green-600 truncate">Add Merchant</span>
              </>
            ) : (
              <>
                <span className="mx-2">›</span>
                <span className="font-semibold text-green-600 truncate">
                  {formatPageName(currentPage)}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex-shrink-0 mt-2 sm:mt-0">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">{user?.initials || "BA"}</span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-gray-900">{user?.name || "Birhane Araya"}</p>
              <p className="text-xs text-gray-500">{user?.role || "Super Admin"}</p>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-900">{user?.name || "Birhane Araya"}</p>
                <p className="text-xs text-gray-500">{user?.role || "Super Admin"}</p>
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
    </header>
  );
}
