"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import DashboardHome from "@/components/admin/DashboardHome";
import UserManagement from "@/app/admin/users/page";
import MerchantsPage from "@/app/admin/merchants/page";
import AddMerchantPage from "@/app/admin/merchants/addmerchant/page"; // Import the new AddMerchantPage
import RolesPage from "@/app/admin/roles/page"; // Import the new RolesPage

export default function AdminDashboard({
  user,
  onLogout,
  onShowCustomerApp,
}) {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardHome user={user} />;
      case "merchants":
        return (
          <MerchantsPage
            onNavigateToAddMerchant={() => setCurrentPage("add-merchant")}
          />
        ); // Pass navigation prop
      case "add-merchant": // New case for AddMerchantPage
        return (
          <AddMerchantPage onNavigateBack={() => setCurrentPage("merchants")} />
        );
  

      case "users":
        return <UserManagement />;
      case "roles": // New case for RolesPage
        return <RolesPage />;
      default:
        return <DashboardHome user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col lg:ml-64">
        <Header
          user={user}
          setSidebarOpen={setSidebarOpen}
          onLogout={onLogout}
          onShowCustomerApp={onShowCustomerApp}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} // Add this line
        />

        <main className="flex-1 overflow-y-auto">{renderPage()}</main>
      </div>
    </div>
  );
}
