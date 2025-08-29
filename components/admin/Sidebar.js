"use client";

import { useState } from "react";
import Image from "next/image";

export default function Sidebar({ currentPage, setCurrentPage, sidebarOpen, setSidebarOpen }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: "/dashboard.svg" },
    { id: "merchants", name: "Merchants", icon: "/merchants.svg" },
    { id: "configurations", name: "Configurations", icon: "/config.svg" },
    { id: "report", name: "Report", icon: "/report.svg" },
    { id: "users", name: "Users", icon: "/users.svg" },
    { id: "roles", name: "Roles", icon: "/roles.svg" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 transform transition-all duration-300 ease-in-out
          m-3 rounded-xl shadow-md bg-white
          ${collapsed ? "w-20" : "w-52"}
          hidden lg:flex flex-col
        `}
      >
        <div className="flex items-center justify-between px-3 py-4">
          <Image src="/dasharificon.svg" alt="Arifpay Logo" width={50} height={50} />
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Image src="/side.svg" alt="Toggle" width={20} height={20} />
          </button>
        </div>

        <nav className="mt-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setSidebarOpen(false); // close drawer on mobile
              }}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 text-sm
                ${currentPage === item.id
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
                className={`shrink-0 ${currentPage === item.id ? "invert brightness-0" : ""}`}
              />
              {!collapsed && <span className="ml-3 font-medium truncate">{item.name}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          ></div>
          {/* Drawer */}
          <div className="absolute inset-y-0 left-0 w-64 bg-white shadow-md p-4">
            <div className="flex items-center justify-between mb-6">
              <Image src="/dasharificon.svg" alt="Arifpay Logo" width={50} height={50} />
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                ✕
              </button>
            </div>
            <nav className="space-y-1 rounded-lg">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 text-sm
                    ${currentPage === item.id
                      ? "bg-green-600 text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className={`shrink-0 ${currentPage === item.id ? "invert brightness-0" : ""}`}
                  />
                  <span className="ml-3 font-medium truncate">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
