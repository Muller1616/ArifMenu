"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import DashboardHome from "@/components/admin/DashboardHome";
import UserManagement from "@/app/admin/users/page";
import MerchantsPage from "@/app/admin/merchants/page";
import AddMerchantPage from "@/app/admin/merchants/addmerchant/page";
import RolesPage from "@/app/admin/roles/page";

export default function AdminDashboard({ user, onLogout, onShowCustomerApp }) {
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
        );
      case "add-merchant":
        return (
          <AddMerchantPage onNavigateBack={() => setCurrentPage("merchants")} />
        );
      case "users":
        return <UserManagement />;
      case "roles":
        return <RolesPage />;
      default:
        return <DashboardHome user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        <Header
          user={user}
          setSidebarOpen={setSidebarOpen}
          onLogout={onLogout}
          onShowCustomerApp={onShowCustomerApp}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
