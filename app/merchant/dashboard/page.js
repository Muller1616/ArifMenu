"use client"

import { useState } from "react"
import DashboardHeader from "@/components/admin/Header"
import MerchantDashboardNavigation from "@/components/merchant/dashboard-navigation"
import DashboardHero from "@/components/merchant/dashboard-hero"
import { AnalyticsCards } from "@/components/merchant/analytics-cards"
import { AnalyticsCharts } from "@/components/merchant/analytics-charts"
import { CategoriesManagement } from "@/app/merchant/categories/page"
import QRCodesPage from "@/app/merchant/qr/page"
import MerchantMenuManagement from "@/app/merchant/manage/page"

export function MerchantDashboard({ user,
  onLogout,
  onShowCustomerApp,
}) {
  const [activeab, setActiveTab] = useState("dashboard")
   const [currentPage, setCurrentPage] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <>
            <DashboardHero />
            <AnalyticsCards />
            <AnalyticsCharts />
          </>
        )
      case "categories":
        return <CategoriesManagement onNavigateBack={() => setCurrentPage("categories")}/>
      case "qr-codes":
        return <QRCodesPage onNavigateBack={() => setCurrentPage("qr-codes")} />
      case "manage-menu":
        return <MerchantMenuManagement onNavigateBack={() => setCurrentPage("manage-menu")}/>
      default:
        return (
          <>
            <DashboardHero />
            <AnalyticsCards />
            <AnalyticsCharts />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader user={user}
        setSidebarOpen={setSidebarOpen}
        onLogout={onLogout}
        onShowCustomerApp={onShowCustomerApp}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} // Add this line
      />
      <div className="mt-6">
        <MerchantDashboardNavigation activeTab={currentPage} onTabChange={setCurrentPage} />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-6">{renderContent()}</main>
    </div>
  )
}
