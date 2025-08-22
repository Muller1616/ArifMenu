"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const monthlyData = [
  { month: "Jan", current: 150, previous: 120 },
  { month: "Feb", current: 230, previous: 200 },
  { month: "Mar", current: 280, previous: 180 },
  { month: "Apr", current: 120, previous: 160 },
  { month: "May", current: 400, previous: 350 },
  { month: "Jun", current: 280, previous: 240 },
  { month: "Jul", current: 250, previous: 280 },
  { month: "Aug", current: 120, previous: 100 },
  { month: "Sep", current: 150, previous: 120 },
  { month: "Oct", current: 350, previous: 300 },
  { month: "Nov", current: 280, previous: 250 },
  { month: "Dec", current: 200, previous: 180 },
]

const weeklyData = [
  { day: "Sun", current: 150, previous: 120 },
  { day: "Mon", current: 230, previous: 200 },
  { day: "Tue", current: 280, previous: 180 },
  { day: "Wed", current: 120, previous: 160 },
  { day: "Thu", current: 400, previous: 350 },
  { day: "Fri", current: 280, previous: 240 },
  { day: "Sat", current: 250, previous: 280 },
]

export function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartCard title="Monthly Scans" data={monthlyData} />
      <ChartCard title="Weekly Scans" data={weeklyData} />
    </div>
  )
}

function ChartCard({ title, data }: { title: string; data: any[] }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis
              dataKey={title.includes("Monthly") ? "month" : "day"}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
            <Bar dataKey="current" fill="#3CA32B" radius={[4, 4, 0, 0]} maxBarSize={40} />
            <Bar dataKey="previous" fill="#D1D5DB" radius={[4, 4, 0, 0]} maxBarSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
