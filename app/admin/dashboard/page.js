"use client";

import { useState } from "react";
import Sidebar from "";
import Header from "././dashboard/Header";
import DashboardHome from "./dashboard/DashboardHome";
import TransactionsList from "./dashboard/TransactionsList";
import ProductsManagement from "./dashboard/ProductsManagement";
import QRCodeGenerator from "./dashboard/QRCodeGenerator";
import AnalyticsPage from "./dashboard/AnalyticsPage";
import SettingsPage from "./dashboard/SettingsPage";
import MapView from "./dashboard/MapView";
import UserManagement from "./dashboard/UserManagement";
import MerchantsPage from "./dashboard/MerchantsPage";
import AddMerchantPage from "./dashboard/AddMerchantPage"; // Import the new AddMerchantPage
import RolesPage from "./dashboard/RolesPage"; // Import the new RolesPage

export default function MerchantDashboard({
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
      case "transactions":
        return <TransactionsList />;
      case "products":
        return <ProductsManagement />;
      case "qr-code":
        return <QRCodeGenerator user={user} />;
      case "analytics":
        return <AnalyticsPage />;
      case "map":
        return <MapView />;
      case "users":
        return <UserManagement />;
      case "roles": // New case for RolesPage
        return <RolesPage />;
      case "settings":
        return <SettingsPage user={user} />;
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
