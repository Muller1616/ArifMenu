"use client";
import { useState } from "react";

export default function DashboardHome({ user }) {
  // Stats data
  const stats = [
    {
      title: "Total QR Scans",
      value: "2040",
      change: "+18% Up from yesterday",
      changeType: "positive",
      bgColor: "bg-orange-50",
      icon: "totalqrscan.svg",
    },
    {
      title: "Total Sales",
      value: "89,000",
      change: "-4.3% Down from yesterday",
      changeType: "negative",
      bgColor: "bg-green-50",
      icon: "activeusers.svg",
    },
    {
      title: "Total Order",
      value: "10293",
      change: "+3% Up from past week",
      changeType: "positive",
      bgColor: "bg-yellow-50",
      icon: "totalordericon.svg",
    },
    {
      title: "Total User",
      value: "40,689",
      change: "+8.5% Up from yesterday",
      changeType: "positive",
      bgColor: "bg-blue-50",
      icon: "totalusericon.svg",
    },
  ];

  // Chart data
  const chartData = [
    { month: "Jan", value1: 150, value2: 120, label: "Jan" },
    { month: "Feb", value1: 220, value2: 250, label: "Feb" },
    { month: "Mar", value1: 270, value2: 120, label: "Mar" },
    { month: "Apr", value1: 100, value2: 50, label: "Apr" },
    { month: "May", value1: 400, value2: 350, label: "May" },
    { month: "Jun", value1: 280, value2: 250, label: "Jun", tooltipTitle: "June 2022", tooltip1Value: "$88k", tooltip2Value: "$77k" },
    { month: "Jul", value1: 240, value2: 270, label: "Jul", tooltipTitle: "July 2022", tooltip1Value: "$88k", tooltip2Value: "$77k" },
    { month: "Aug", value1: 100, value2: 160, label: "Aug" },
    { month: "Sep", value1: 140, value2: 60, label: "Sep" },
    { month: "Oct", value1: 280, value2: 160, label: "Oct" },
    { month: "Nov", value1: 220, value2: 260, label: "Nov" },
    { month: "Dec", value1: 190, value2: 100, label: "Dec" },
  ];

  // Deals table sample
  const deals = [
    {
      product: "Apple Watch",
      location: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12:53 PM",
      piece: 471,
      amount: "$34,295",
      status: "Delivered",
      icon: "📱",
    },
  ];

  // Max value for dynamic chart scaling
  const maxValue = Math.max(...chartData.flatMap((d) => [d.value1, d.value2]));

  return (
    <div className="p-4 md:p-8 bg-white rounded-2xl min-h-screen">
      {/* Welcome message */}
      <div className="mb-6">
        <h1 className="text-2xl font-medium text-gray-600">
          Hey {user?.name || "User"} 👋
        </h1>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between p-6 rounded-2xl ${stat.bgColor}`}
          >
            <div>
              <p className="text-sm text-gray-500 mb-2">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span
                className={`text-xs font-medium ${
                  stat.changeType === "positive" ? "text-green-600" : "text-red-500"
                }`}
              >
                {stat.change}
              </span>
              <img
                src={stat.icon}
                alt={`${stat.title} icon`}
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-[#f5f6f9] rounded-2xl p-6 md:p-8 mb-8 shadow-sm overflow-x-auto">
        <div className="relative h-80 flex items-end space-x-2">
          {chartData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 relative group">
              {item.tooltipTitle && (
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs whitespace-pre-line opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <p className="font-bold mb-1">{item.tooltipTitle}</p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-300 mr-2"></span>
                    {item.tooltip1Value}
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-gray-500 mr-2"></span>
                    {item.tooltip2Value}
                  </p>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              )}
              <div className="flex w-8 h-full items-end justify-center space-x-2">
                <div
                  className="bg-blue-300 rounded-t-lg flex-1 transition-all duration-300 hover:bg-blue-400 cursor-pointer"
                  style={{ height: `${(item.value1 / maxValue) * 320}px` }}
                ></div>
                <div
                  className="bg-gray-200 rounded-t-lg flex-1 transition-all duration-300 hover:bg-gray-300 cursor-pointer"
                  style={{ height: `${(item.value2 / maxValue) * 320}px` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 mt-3 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Deals Table */}
      <div className="bg-white shadow-sm rounded-2xl overflow-x-auto">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-500">Deals Details</h3>
        </div>
        <table className="min-w-full">
          <thead className="bg-[#eff0f6]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                Product Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                Location
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                Date - Time
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                Piece
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                Amount
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <span>{deal.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{deal.product}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{deal.location}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{deal.dateTime}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{deal.piece}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{deal.amount}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {deal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
