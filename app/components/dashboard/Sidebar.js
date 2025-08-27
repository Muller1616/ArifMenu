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
        ${collapsed ? "w-20" : "w-64"}
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
          <Image src="/side.svg" alt="Toggle" width={16} height={16} />
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









// "use client"

// export default function Sidebar({ currentPage, setCurrentPage, sidebarOpen, setSidebarOpen }) {
//   // UPDATED: Exact menu items from the screenshot
//   const menuItems = [
//     { id: "dashboard", name: "Dashboard", icon: "📊" },
//     { id: "merchants", name: "Merchants", icon: "🏪" },
//     { id: "meta-data", name: "Meta Data", icon: "📋" },
//     { id: "configurations", name: "Configurations", icon: "⚙️" },
//     { id: "report", name: "Report", icon: "📈" },
//     { id: "users", name: "Users", icon: "👥" },
//     { id: "roles", name: "Roles", icon: "🔐" },
//     { id: "permissions", name: "Permissions", icon: "🛡️" },
//   ]

//   return (
//     <>
//       {/* Mobile backdrop */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
//       )}

//       {/* UPDATED: Fixed sidebar that stays in place during scroll */}
//       <div
//         className={`
//         fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
//         lg:translate-x-0 lg:static lg:inset-0 lg:fixed lg:h-screen
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//       `}
//         style={{ backgroundColor: "#fafafa" }}
//       >
//         {/* UPDATED: Logo section exactly like screenshot */}
//         <div className="flex items-center px-6 py-6">
//           <div className="flex items-center">
//             <div className="w-8 h-8 bg-green-600 rounded-md flex items-center justify-center mr-3">
//               <span className="text-white font-bold text-sm">A</span>
//             </div>
//             <div>
//               <h1 className="text-green-600 text-lg font-bold leading-tight">Arifpay</h1>
//               <p className="text-gray-500 text-xs leading-tight">Payments</p>
//             </div>
//           </div>
//         </div>

//         {/* UPDATED: Scrollable navigation menu */}
//         <nav className="px-4 space-y-1 overflow-y-auto h-full pb-20">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => {
//                 setCurrentPage(item.id)
//                 setSidebarOpen(false)
//               }}
//               className={`
//                 w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 text-sm
//                 ${currentPage === item.id ? "bg-green-600 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"}
//               `}
//             >
//               <span className="mr-3 text-base">{item.icon}</span>
//               <span className="font-medium">{item.name}</span>
//             </button>
//           ))}
//         </nav>
//       </div>
//     </>
//   )
// }











// "use client"

// export default function Sidebar({ currentPage, setCurrentPage, sidebarOpen, setSidebarOpen }) {
//   // UPDATED: Exact menu items from the screenshot
//   const menuItems = [
//     { id: "dashboard", name: "Dashboard", icon: "📊" },
//     { id: "merchants", name: "Merchants", icon: "🏪" },
//     { id: "meta-data", name: "Meta Data", icon: "📋" },
//     { id: "configurations", name: "Configurations", icon: "⚙️" },
//     { id: "report", name: "Report", icon: "📈" },
//     { id: "users", name: "Users", icon: "👥" },
//     { id: "roles", name: "Roles", icon: "🔐" },
//     { id: "permissions", name: "Permissions", icon: "🛡️" },
//   ]

//   return (
//     <>
//       {/* Mobile backdrop */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
//       )}

//       {/* UPDATED: Fixed sidebar that stays in place during scroll */}
//       <div
//         className={`
//         fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
//         lg:translate-x-0 lg:static lg:inset-0 lg:fixed lg:h-screen
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//       `}
//         style={{ backgroundColor: "#fafafa" }}
//       >
//         {/* UPDATED: Logo section exactly like screenshot */}
//         <div className="flex items-center px-6 py-6">
//           <div className="flex items-center">
//             <div className="w-8 h-8 bg-green-600 rounded-md flex items-center justify-center mr-3">
//               <span className="text-white font-bold text-sm">A</span>
//             </div>
//             <div>
//               <h1 className="text-green-600 text-lg font-bold leading-tight">Arifpay</h1>
//               <p className="text-gray-500 text-xs leading-tight">Payments</p>
//             </div>
//           </div>
//         </div>

//         {/* UPDATED: Scrollable navigation menu */}
//         <nav className="px-4 space-y-1 overflow-y-auto h-full pb-20">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => {
//                 setCurrentPage(item.id)
//                 setSidebarOpen(false)
//               }}
//               className={`
//                 w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 text-sm
//                 ${currentPage === item.id ? "bg-green-600 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"}
//               `}
//             >
//               <span className="mr-3 text-base">{item.icon}</span>
//               <span className="font-medium">{item.name}</span>
//             </button>
//           ))}
//         </nav>
//       </div>
//     </>
//   )
// }

