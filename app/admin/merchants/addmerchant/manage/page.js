"use client";

import { useState } from "react";
import React from 'react'
import {
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Sparkles,
  EyeOff,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BusinessManage = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative flex-1 w-full sm:max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search menu items"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="flex space-x-3 w-full sm:w-auto">
                    <Select
                      value={selectedCategoryFilter}
                      onValueChange={setSelectedCategoryFilter}
                    >
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Filter by Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {uniqueCategories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat === "all" ? "All Categories" : cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select
                      value={selectedStatusFilter}
                      onValueChange={setSelectedStatusFilter}
                    >
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Filter by Status" />
                      </SelectTrigger>
                      <SelectContent>
                        {uniqueStatuses.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status === "all" ? "All Statuses" : status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <button
                      onClick={handleOpenAddItemModal}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition-colors whitespace-nowrap"
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Add New Item
                    </button>
                  </div>
                </div>
    
                {/* Menu Items Table */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-100">
                      <thead className="bg-[#eff0f6]">
                        <tr>
                          <th className="px-6 py-4 text-left">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            #
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Photo
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Item Name
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Ingredients
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Category
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Price
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Status
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-100">
                        {filteredMenuItems.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                              />
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              {item.id}
                            </td>
                            <td className="px-6 py-4">
                              <img
                                src={item.photo || "/placeholder.svg"}
                                alt={`${item.name} photo`}
                                className="w-10 h-10 rounded-lg object-cover"
                              />
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                              {item.ingredients}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {item.category}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                              {item.price}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-col space-y-1">
                                <span
                                  className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                                    item.status === "Available"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-110 text-red-800"
                                  }`}
                                >
                                  {item.status}
                                </span>
                                {item.isSpecial && (
                                  <span className="inline-flex px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                                    Special
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <button className="p-2 rounded-md hover:bg-gray-100 text-gray-500">
                                    <MoreVertical className="w-5 h-5" />
                                  </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                  <DropdownMenuItem
                                    className="flex items-center cursor-pointer"
                                    onClick={() => handleOpenEditItemModal(item)}
                                  >
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Edit</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="flex items-center cursor-pointer"
                                    onClick={() =>
                                      handleToggleMenuItemSpecial(item.id)
                                    }
                                  >
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    <span>
                                      {item.isSpecial
                                        ? "Remove from Special"
                                        : "Mark as Special"}
                                    </span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="flex items-center cursor-pointer"
                                    onClick={() =>
                                      handleToggleMenuItemStatus(
                                        item.id,
                                        item.status === "Available"
                                          ? "Unavailable"
                                          : "Available"
                                      )
                                    }
                                  >
                                    <EyeOff className="mr-2 h-4 w-4" />
                                    <span>
                                      {item.status === "Available"
                                        ? "Mark as Unavailable"
                                        : "Mark as Available"}
                                    </span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="flex items-center text-red-600 cursor-pointer"
                                    onClick={() => handleDeleteMenuItem(item.id)}
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <span>Delete Item</span>
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
                  <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                    <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                      « Previous
                    </button>
                    <div className="flex items-center space-x-1">
                      <button className="px-3 py-1 text-sm font-medium bg-green-600 text-white rounded-md">
                        1
                      </button>
                      <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                        2
                      </button>
                      <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                        3
                      </button>
                      <span className="text-sm text-gray-500">...</span>
                      <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                        10
                      </button>
                    </div>
                    <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                      Next »
                    </button>
                  </div>
                </div>
              </div>
  )
}

export default BusinessManage