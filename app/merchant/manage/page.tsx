"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AddItemModal } from "@/components/merchant/modals/add-item-modal"
import { DeleteConfirmationModal } from "@/components/merchant/modals/delete-confirmation-modal"

const menuItemsData = [
  {
    id: 1,
    name: "Spicy Chai Latte",
    ingredients: "A warm blend of black tea, cinnamon, ginger, chili pepper",
    category: "Hot Beverages",
    price: "ETB 220.00",
    status: "Unavailable",
    special: false,
    image: "/cappuccino-supreme.png",
  },
  {
    id: 2,
    name: "Cinnamon Mocha Delight",
    ingredients: "Rich espresso, steamed milk, cocoa powder, cinnamon",
    category: "Hot Beverages",
    price: "ETB 450.00",
    status: "Available",
    special: false,
    image: "/iced-americano.png",
  },
  {
    id: 3,
    name: "Ginger Turmeric Tea",
    ingredients: "A soothing infusion of ginger, turmeric, honey",
    category: "Hot Beverages",
    price: "ETB 320.00",
    status: "Available",
    special: false,
    image: "/green-tea-latte.png",
  },
]

export default function MerchantMenuManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [menuItems, setMenuItems] = useState(menuItemsData)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(filteredItems.map((item) => item.id))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (itemId: number, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, itemId])
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId))
    }
  }

  // ✅ Add new item
  const handleAddItem = (itemData: any) => {
    const newItem = {
      id: menuItems.length + 1,
      ...itemData,
      status: "Available",
      special: false,
    }
    setMenuItems([...menuItems, newItem])
    setShowAddModal(false)
  }

  // ✅ Edit item
  const handleEditItem = (item: any, updatedData: any) => {
    setMenuItems(
      menuItems.map((i) => (i.id === item.id ? { ...i, ...updatedData } : i))
    )
  }

  // ✅ Delete item
  const handleDeleteItem = (item: any) => {
    setSelectedItem(item)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    setMenuItems(menuItems.filter((item) => item.id !== selectedItem.id))
    setShowDeleteModal(false)
    setSelectedItem(null)
  }

  // ✅ Toggle availability
  const toggleAvailability = (item: any) => {
    setMenuItems(
      menuItems.map((i) =>
        i.id === item.id
          ? {
              ...i,
              status: i.status === "Available" ? "Unavailable" : "Available",
            }
          : i
      )
    )
  }

  // ✅ Mark as special
  const toggleSpecial = (item: any) => {
    setMenuItems(
      menuItems.map((i) =>
        i.id === item.id ? { ...i, special: !i.special } : i
      )
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input
              placeholder="Search menu items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-xl"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-white"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4h18M3 10h18M3 16h18"
              />
            </svg>
            Filter
          </Button>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
            onClick={() => setShowAddModal(true)}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Item
          </Button>
        </div>
      </div>

      {/* Menu Items Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left">
                  <Checkbox
                    checked={
                      selectedItems.length === filteredItems.length &&
                      filteredItems.length > 0
                    }
                    onCheckedChange={handleSelectAll}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3">Photo</th>
                <th className="px-6 py-3">Item Name</th>
                <th className="px-6 py-3">Ingredients</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={(checked) =>
                        handleSelectItem(item.id, checked as boolean)
                      }
                    />
                  </td>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {item.ingredients}
                  </td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4 font-medium">{item.price}</td>
                  <td className="px-6 py-4">
                    <Badge
                      className={
                        item.status === "Available"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }
                    >
                      {item.status}
                    </Badge>
                    {item.special && (
                      <Badge className="ml-2 bg-yellow-100 text-yellow-800">
                        Special
                      </Badge>
                    )}
                  </td>
                  <td className="px-6 py-4 bg-white">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          ⋮
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() =>
                            handleEditItem(item, { name: item.name + " ✏️" })
                          }
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => toggleAvailability(item)}
                        >
                          {item.status === "Available"
                            ? "Mark as Unavailable"
                            : "Mark as Available"}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleSpecial(item)}>
                          {item.special ? "Unmark Special" : "Mark as Special"}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDeleteItem(item)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <AddItemModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddItem}
      />

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        title="Delete Menu Item"
        message="Are you sure you want to delete this item? This action cannot be undone."
        confirmText="Delete"
      />
    </div>
  )
}
