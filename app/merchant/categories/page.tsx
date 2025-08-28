"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AddCategoryModal } from "@/components/merchant/modals/add-category-modal"
import { DeleteConfirmationModal } from "@/components/merchant/modals/delete-confirmation-modal"

const categoriesData = [
  {
    id: 1,
    name: "Breakfast",
    description: "Breakfast",
    image: "/breakfast-coffee.png",
    addedOn: "June 12, 2025",
    status: "Inactive",
  },
  {
    id: 2,
    name: "Hot Drinks",
    description: "Hot Drinks",
    image: "/hot-coffee.png",
    addedOn: "July 19, 2025",
    status: "Active",
  },
  {
    id: 3,
    name: "Cold Beverages",
    description: "Cold Beverages",
    image: "/cold-beverage-drink.png",
    addedOn: "June 28, 2025",
    status: "Active",
  },
  {
    id: 4,
    name: "Lunch",
    description: "Lunch",
    image: "/delicious-lunch-meal.png",
    addedOn: "July 5, 2025",
    status: "Active",
  },
  {
    id: 5,
    name: "Dinner",
    description: "Dinner",
    image: "/cozy-dinner-setting.png",
    addedOn: "June 10, 2025",
    status: "Active",
  },
]

export function CategoriesManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categories, setCategories] = useState(categoriesData)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<any>(null)

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddCategory = (categoryData: any) => {
    const newCategory = {
      id: categories.length + 1,
      ...categoryData,
      addedOn: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      status: "Active",
    }
    setCategories([...categories, newCategory])
    setShowAddModal(false)
  }

  const handleDeleteCategory = (category: any) => {
    setSelectedCategory(category)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    setCategories(categories.filter((cat) => cat.id !== selectedCategory.id))
    setShowDeleteModal(false)
    setSelectedCategory(null)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
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
              placeholder="Search Categories"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Button className="bg-[#3CA32B] hover:bg-[#2d8a22] text-white" onClick={() => setShowAddModal(true)}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Category
        </Button>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Photo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Added on
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCategories.map((category, index) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{category.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{category.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{category.addedOn}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant={category.status === "Active" ? "default" : "secondary"}
                      className={
                        category.status === "Active"
                          ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {category.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteCategory(category)}>
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                « Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-[#3CA32B] text-white border-[#3CA32B]">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <span className="px-2 py-1 text-sm text-gray-500">...</span>
              <Button variant="outline" size="sm">
                10
              </Button>
              <Button variant="outline" size="sm">
                Next »
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddCategoryModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} onSubmit={handleAddCategory} />

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        title="Are you sure you want to delete an item from menu?"
        message="Are you certain you wish to remove this category from the menu? Please be aware that this action affect menu items in the menu sections."
        confirmText="Delete Category"
      />
    </div>
  )
}
