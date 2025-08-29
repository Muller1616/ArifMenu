"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddCategoryModal } from "@/components/merchant/modals/add-category-modal";
import { DeleteConfirmationModal } from "@/components/merchant/modals/delete-confirmation-modal";

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
];

export function CategoriesManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState(categoriesData);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

const handleAddOrEditCategory = (categoryData: any) => {
  if (isEditMode && selectedCategory) {
    // Edit existing category
    setCategories(
      categories.map((cat) =>
        cat.id === selectedCategory.id ? { ...cat, ...categoryData } : cat
      )
    );
  } else {
    // Add new category
    const newCategory = {
      id: Date.now(), // unique ID based on timestamp
      ...categoryData,
      addedOn: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      status: "Active",
    };
    setCategories([...categories, newCategory]);
  }
  setShowModal(false);
  setSelectedCategory(null);
  setIsEditMode(false);
};


  const handleDeleteCategory = (category: any) => {
    setSelectedCategory(category);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setCategories(categories.filter((cat) => cat.id !== selectedCategory.id));
    setShowDeleteModal(false);
    setSelectedCategory(null);
  };

  const handleEditCategory = (category: any) => {
    setSelectedCategory(category);
    setIsEditMode(true);
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
        <Button
          className="bg-[#3CA32B] hover:bg-[#2d8a22] text-white flex items-center justify-center"
          onClick={() => {
            setShowModal(true);
            setIsEditMode(false);
          }}
        >
          <svg
            className="w-4 h-4 mr-2"
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
          {isEditMode ? "Edit Category" : "Add New Category"}
        </Button>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Photo
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Added on
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCategories.map((category, index) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  {category.name}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                  {category.description}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                  {category.addedOn}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <Badge
                    className={
                      category.status === "Active"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-800"
                    }
                  >
                    {category.status}
                  </Badge>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        ⋮
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleEditCategory(category)}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => handleDeleteCategory(category)}
                      >
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

      {/* Modals */}
      <AddCategoryModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedCategory(null);
          setIsEditMode(false);
        }}
        onSubmit={handleAddOrEditCategory}
        category={selectedCategory}
      />

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        title="Are you sure you want to delete this category?"
        message="This will remove the category and it may affect menu items."
        confirmText="Delete Category"
      />
    </div>
  );
}
