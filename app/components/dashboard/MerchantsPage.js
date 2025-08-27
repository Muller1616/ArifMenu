"use client"

import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, Eye, QrCode, Edit, Folder, List, Ban, Search, Plus } from "lucide-react"

export default function MerchantsPage({ onNavigateToAddMerchant }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMerchants, setSelectedMerchants] = useState([])

  const merchants = [
    {
      id: 1,
      logo: "Celavie.png?height=40&width=40&text=Celavie",
      name: "Celavie Chicken and Burgers",
      contactPerson: "Girma Lemma",
      contactInfo: "+251 912345680",
      addedOn: "June 12, 2025",
      status: "Inactive",
    },
    {
      id: 2,
      logo: "Dukamo.png?height=40&width=40&text=Dukamo",
      name: "Dukamo Coffee",
      contactPerson: "Daniel Ambachew",
      contactInfo: "+251 932345681",
      addedOn: "July 19, 2025",
      status: "Active",
    },
    {
      id: 3,
      logo: "foodZone.png?height=40&width=40&text=FoodZone",
      name: "Food Zone Restaurant",
      contactPerson: "Lemlem Girmachew",
      contactInfo: "+251 952345682",
      addedOn: "June 28, 2025",
      status: "Inactive",
    },
    {
      id: 4,
      logo: "bella.png?height=40&width=40&text=Bella's",
      name: "Bella's Pasta",
      contactPerson: "Abel Gebrehiwot",
      contactInfo: "+251 972345683",
      addedOn: "July 5, 2025",
      status: "Active",
    },
    {
      id: 5,
      logo: "bella.png?height=40&width=40&text=Ocean",
      name: "Ocean Breeze Smoothies",
      contactPerson: "Hannah Tesfaye",
      contactInfo: "+251 992345684",
      addedOn: "Jun 10, 2025",
      status: "Active",
    },
    {
      id: 6,
      logo: "bella.png?height=40&width=40&text=Vegan",
      name: "The Vegan Corner",
      contactPerson: "Kofi Adomah",
      contactInfo: "+251 912345685",
      addedOn: "July 15, 2025",
      status: "Inactive",
    },
    {
      id: 7,
      logo: "bella.png?height=40&width=40&text=Spice",
      name: "Spice Route Cuisine",
      contactPerson: "Sara Mehari",
      contactInfo: "+251 922345686",
      addedOn: "July 22, 2025",
      status: "Active",
    },
    {
      id: 8,
      logo: "bella.png?height=40&width=40&text=Farm",
      name: "Farm Fresh Organics",
      contactPerson: "Michael Tesfamariam",
      contactInfo: "+251 932345687",
      addedOn: "Nov 30, 2025",
      status: "Inactive",
    },
    {
      id: 9,
      logo: "bella.png?height=40&width=40&text=Pizzeria",
      name: "Pizzeria Amore",
      contactPerson: "Elsa Kebede",
      contactInfo: "+251 942345688",
      addedOn: "July 14, 2025",
      status: "Active",
    },
    {
      id: 10,
      logo: "bella.png?height=40&width=40&text=Sushi",
      name: "Sushi & Sashimi Bar",
      contactPerson: "Biniam Asmerom",
      contactInfo: "+251 92345689",
      addedOn: "July 20, 2026",
      status: "Active",
    },
  ]

  const filteredMerchants = merchants.filter(
    (merchant) =>
      merchant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.contactPerson.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedMerchants(filteredMerchants.map((m) => m.id))
    } else {
      setSelectedMerchants([])
    }
  }

  const handleSelectOne = (id) => {
    setSelectedMerchants((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  const isAllSelected = filteredMerchants.length > 0 && filteredMerchants.every((m) => selectedMerchants.includes(m.id))

  return (
    <div className="p-8 bg-white rounded-2xl min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Merchants"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border bg-[#f3f4f6] border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          />
        </div>
        <button
          onClick={onNavigateToAddMerchant}
          className="bg-green-600 text-white px-4 py-2 rounded-xl flex items-center hover:bg-green-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Merchant
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-[#eff0f6]">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">#</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Logo</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Merchants Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Contact Person</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Contact Information</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Added on</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredMerchants.map((merchant) => (
                <tr key={merchant.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedMerchants.includes(merchant.id)}
                      onChange={() => handleSelectOne(merchant.id)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{merchant.id}</td>
                  <td className="px-6 py-4">
                    <img
                      src={merchant.logo || "/placeholder.svg"}
                      alt={`${merchant.name} logo`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{merchant.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{merchant.contactPerson}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{merchant.contactInfo}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{merchant.addedOn}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                        merchant.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {merchant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-2 rounded-md hover:bg-gray-100 text-gray-500">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem className="flex items-center cursor-pointer">
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View Detail</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center cursor-pointer">
                          <QrCode className="mr-2 h-4 w-4" />
                          <span>QR Code Management</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center cursor-pointer">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit Information</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center cursor-pointer">
                          <Folder className="mr-2 h-4 w-4" />
                          <span>Categories</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center cursor-pointer">
                          <List className="mr-2 h-4 w-4" />
                          <span>Manage Menu</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center text-red-600 cursor-pointer">
                          <Ban className="mr-2 h-4 w-4" />
                          <span>Disable</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">« Previous</button>
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1 text-sm font-medium bg-green-600 text-white rounded-md">1</button>
            <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">2</button>
            <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">3</button>
            <span className="text-sm text-gray-500">...</span>
            <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">10</button>
          </div>
          <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">Next »</button>
        </div>
      </div>
    </div>
  )
}
