"use client";
export default function DashboardHome({ user }) {
  // : Exact metrics from
  const stats = [
    {
      title: "Total QR Scans",
      value: "2040",
      change: "+18% Up from yesterday",
      changeType: "positive",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      icon: "totalqrscan.svg",
    },
    {
      title: "Total Sales",
      value: "89,000",
      change: "-4.3% Down from yesterday",
      changeType: "negative",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: "activeusers.svg",
    },
    {
      title: "Total Order",
      value: "10293",
      change: "+3% Up from past week",
      changeType: "positive",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: "totalordericon.svg",
    },
    {
      title: "Total User",
      value: "40,689",
      change: "  +8.5% Up from yesterday",
      changeType: "positive",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: "totalusericon.svg",
    },
  ];
  // : Chart data with two values per month for two bars
  const chartData = [
    { month: "Jan", value1: 150, value2: 120, label: "Jan" },
    { month: "Feb", value1: 220, value2: 250, label: "Feb" },
    { month: "Mar", value1: 270, value2: 120, label: "Mar" },
    { month: "Apr", value1: 100, value2: 50, label: "Apr" },
    { month: "May", value1: 400, value2: 350, label: "May" },
    {
      month: "Jun",
      value1: 280,
      value2: 250,
      label: "Jun",
      tooltipTitle: "June 2022",
      tooltip1Value: "$88k",
      tooltip2Value: "$77k",
    },
    {
      month: "Jul",
      value1: 240,
      value2: 270,
      label: "Jul",
      tooltipTitle: "July 2022",
      tooltip1Value: "$88k",
      tooltip2Value: "$77k",
    },
    { month: "Aug", value1: 100, value2: 160, label: "Aug" },
    { month: "Sep", value1: 140, value2: 60, label: "Sep" },
    { month: "Oct", value1: 280, value2: 160, label: "Oct" },
    { month: "Nov", value1: 220, value2: 260, label: "Nov" },
    { month: "Dec", value1: 190, value2: 100, label: "Dec" },
  ];

  // : Y-axis values for vertical indicators to match the new scale
  const yAxisValues = [700, 600, 500, 400, 300, 200, 100, 0];

  return (
    <div className="p-8 bg-[#f6f6f9] rounded-2xl min-h-screen">
      {/* : Welcome message */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-600">Hey Birhane 👋</h1>
      </div>
      {/* : Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-[#efeff5] flex rounded-2xl p-6    ${stat.bgColor}`}
          >
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className="flex items-center">
              <span
                className={`mt-20 text-xs font-medium ${
                  stat.changeType === "positive"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {stat.change}
              </span>
            </div>
            
            {/* ✅ Dynamic icon per stat */}
            <img
              src={stat.icon}
              alt={`${stat.title} icon`}
              className="w-10 h-10 object-contain ml-auto"
            />
          </div>
        ))}
      </div>
      {/* : Chart section */}
      <div className="bg-[#f5f6f9] rounded-2xl p-8 mb-8 shadow-sm">
        {/* : Chart container with vertical and horizontal indicators */}
        <div className="relative">
          {/* : Y-axis labels (vertical indicators) */}
          <div className="absolute left-0 top-0 h-80 flex flex-col justify-between text-xs text-gray-400 -ml-8">
            {yAxisValues.map((value, index) => (
              <div key={index} className="flex items-center">
                <span className="w-6 text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* : Horizontal grid lines */}
          <div className="absolute inset-5 h-80">
            {yAxisValues.slice(0, -1).map((value, index) => (
              <div
                key={index}
                className="absolute w-full border-t border-gray-200"
                style={{ top: `${(index / (yAxisValues.length - 1)) * 100}%` }}
              ></div>
            ))}
          </div>

          {/* : Chart bars with exact positioning and tooltip */}
          <div className="relative h-80 flex items-end justify-between space-x-3 ml-4 mb-4">
            {chartData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-1 relative group"
              >
                {/* Tooltip for June and July  */}
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
                {/* : Two bars for each month with specified colors */}
                <div className="flex w-8 h-full items-end justify-center space-x-2">
                  <div
                    className="bg-blue-300 rounded-t-lg flex-1 transition-all duration-300 hover:bg-blue-400 cursor-pointer"
                    style={{
                      height: `${item.value1 * 0.8}px`, // Scale height based on max Y-axis 400 and container height 320px (h-80)
                    }}
                  ></div>
                  <div
                    className="bg-gray-200 rounded-t-lg flex-1 transition-all duration-300 hover:bg-gray-300 cursor-pointer"
                    style={{
                      height: `${item.value2 * 0.8}px`, // Scale height based on max Y-axis 400 and container height 320px (h-80)
                    }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-3 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* : Deals Details table  */}
      <div className="bg-white shadow-sm rounded-2xl ">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-500">
            Deals Details
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#eff0f6] rounded-2xl">
              <tr className="border-b border-gray-100 bg-slate-800] rounded-xl m-5">
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
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-gray-600 text-xs">📱</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      Apple Watch
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  6096 Marjolaine Landing
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  12.09.2019 - 12:53 PM
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">471</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  $34,295
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Delivered
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}