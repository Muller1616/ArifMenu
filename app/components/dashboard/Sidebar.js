"use client";
import { useState } from "react";
import Image from "next/image";

export default function Sidebar({ currentPage, setCurrentPage }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: "/dashboard.svg" }, // ✅ use `/` not `public/`
    { id: "merchants", name: "Merchants", icon: "/merchants.svg" },
    // { id: "meta-data", name: "Meta Data", icon: "/config.svg" },
    { id: "configurations", name: "Configurations", icon: "/config.svg" },
    { id: "report", name: "Report", icon: "/report.svg" },
    { id: "users", name: "Users", icon: "/users.svg" },
    { id: "roles", name: "Roles", icon: "/roles.svg" },
    // { id: "permissions", name: "Permissions", icon: "/perm.svg" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 transform transition-all duration-300 ease-in-out
        m-5 rounded-xl shadow-md
        ${collapsed ? "w-20" : "w-44"}
      `}
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Logo + toggle button */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <Image
            src="/dasharificon.svg"
            alt="Arifpay Logo"
            width={70}
            height={70}
          />
        
        </div>
        {/* The toggle icon */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Image src="/side.svg" alt="Toggle" width={50} height={50} />
        </button>
      </div>

      {/* Navigation menu */}
      <nav className="mt-6 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex items-center w-full px-4 py-3 text-left rounded-xl transition-all duration-200 text-sm
              ${
                currentPage === item.id
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {item.icon.endsWith(".svg") || item.icon.endsWith(".png") ? (
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
                className={`${currentPage === item.id ? "invert brightness-0" : "invert to-black"}`} // ✅ makes white when active
              />
            ) : (
              <span className="text-lg">{item.icon}</span>
            )}

            {!collapsed && (
              <span className="ml-3 font-medium">{item.name}</span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
