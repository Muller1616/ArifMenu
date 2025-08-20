"use client"

import { useState } from "react"
import { DashboardHeader } from "./dashboard-header"
import { DashboardNavigation } from "./dashboard-navigation"
import { DashboardHero } from "./dashboard-hero"
import { AnalyticsCards } from "./analytics-cards"
import { AnalyticsCharts } from "./analytics-charts"
import { CategoriesManagement } from "./categories-management"
import { QRCodesPage } from "./qr-codes-page"
import { MenuManagement } from "./menu-management"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <DashboardHero />
            <AnalyticsCards />
            <AnalyticsCharts />
          </>
        )
      case "categories":
        return <CategoriesManagement />
      case "qr-codes":
        return <QRCodesPage />
      case "manage-menu":
        return <MenuManagement />
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
      <DashboardHeader />
      <div className="mt-6">
        <DashboardNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-6">{renderContent()}</main>
    </div>
  )
}
