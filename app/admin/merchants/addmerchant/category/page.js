"use client";

import { useState } from "react";
import React from 'react'
import {
    Search,
    Plus,
    MoreVertical,
    Edit,
    Trash2,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const BusinessCategory = () => {
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
    const [selectedCategoryPhotoPreview, setSelectedCategoryPhotoPreview] =
        useState(null); 
    const [categoryToDelete, setCategoryToDelete] = useState(null);
      const [editingCategory, setEditingCategory] = useState(null);
     const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
      const [selectedStatusFilter, setSelectedStatusFilter] = useState("all");
    
const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [editingMenuItem, setEditingMenuItem] = useState(null);
  const [selectedMenuItemPhotoPreview, setSelectedMenuItemPhotoPreview] =
    useState(null);
    const [menuItems, setMenuItems] = useState([
        {
          id: 1,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Spicy Chai Latte",
          ingredients:
            "Spicy Chai Latte: A warm blend of black tea, cinnamon, ginger, and a hint of chili pepper.",
          category: "Hot Beverages",
          price: "ETB 220.00",
          status: "Unavailable",
          isSpecial: false,
        },
        {
          id: 2,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Cinnamon Mocha Delight",
          ingredients:
            "Cinnamon Mocha Delight: Rich espresso mixed with steamed milk, cocoa powder, and a sprinkle of cinnamon.",
          category: "Hot Beverages",
          price: "ETB 450.00",
          status: "Available",
          isSpecial: true,
        },
        {
          id: 3,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Ginger Turmeric Tea",
          ingredients:
            "Ginger Turmeric Tea: A soothing infusion of ginger, turmeric, and honey, perfect for relaxation.",
          category: "Hot Beverages",
          price: "ETB 320.00",
          status: "Available",
          isSpecial: false,
        },
        {
          id: 4,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Vanilla Bean Hot Chocolate",
          ingredients:
            "Vanilla Bean Hot Chocolate: Creamy hot chocolate infused with real vanilla bean for a sweet touch.",
          category: "Hot Beverages",
          price: "ETB 400.00",
          status: "Available",
          isSpecial: true,
        },
        {
          id: 5,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Minty Green Tea",
          ingredients:
            "Minty Green Tea: Refreshing green tea with a burst of mint leaves for a cooling effect.",
          category: "Hot Beverages",
          price: "ETB 270.00",
          status: "Available",
          isSpecial: true,
        },
        {
          id: 6,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Caramel Apple Cider",
          ingredients:
            "Caramel Apple Cider: Warm apple cider with caramel drizzle and a hint of cinnamon.",
          category: "Hot Beverages",
          price: "ETB 260.00",
          status: "Available",
          isSpecial: false,
        },
        {
          id: 7,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Hazelnut Espresso",
          ingredients:
            "Hazelnut Espresso: Bold espresso blended with creamy hazelnut syrup for a nutty flavor.",
          category: "Hot Beverages",
          price: "ETB 230.00",
          status: "Available",
          isSpecial: false,
        },
        {
          id: 8,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Coconut Cream Hot Cocoa",
          ingredients:
            "Coconut Cream Hot Cocoa: Decadent hot cocoa topped with whipped coconut cream.",
          category: "Hot Beverages",
          price: "ETB 280.00",
          status: "Unavailable",
          isSpecial: false,
        },
      ]);

    const [categories, setCategories] = useState([
        {
          id: 1,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Breakfast",
          description: "Breakfast",
          addedOn: "June 12, 2025",
          status: "Inactive",
        },
        {
          id: 2,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Hot Drinks",
          description: "Hot Drinks",
          addedOn: "July 19, 2025",
          status: "Active",
        },
        {
          id: 3,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Cold Beverages",
          description: "Cold Beverages",
          addedOn: "June 28, 2025",
          status: "Active",
        },
        {
          id: 4,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Lunch",
          description: "Lunch",
          addedOn: "July 5, 2025",
          status: "Active",
        },
        {
          id: 5,
          photo: "/placeholder.svg?height=40&width=40",
          name: "Dinner",
          description: "Dinner",
          addedOn: "Jun 10, 2025",
          status: "Active",
        },
      ]);
const handleSaveCategory = (categoryData) => {
    const finalPhoto =
      selectedCategoryPhotoPreview || "/placeholder.svg?height=40&width=40";

    if (editingCategory) {
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === editingCategory.id
            ? { ...cat, ...categoryData, photo: finalPhoto }
            : cat
        )
      );
    } else {
      setCategories((prevCategories) => [
        ...prevCategories,
        {
          id:
            prevCategories.length > 0
              ? Math.max(...prevCategories.map((c) => c.id)) + 1
              : 1,
          ...categoryData,
          photo: finalPhoto,
          addedOn: new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
        },
      ]);
    }
    setShowAddCategoryModal(false);
    setEditingCategory(null);
    setSelectedCategoryPhotoPreview(null); // Clear preview after saving
  };
    const [searchTerm, setSearchTerm] = useState("");
    const handleOpenAddCategoryModal = () => {
        setEditingCategory(null);
        setSelectedCategoryPhotoPreview(null); // Clear photo preview for new category
        setShowAddCategoryModal(true);
    };

    const handleOpenEditCategoryModal = (category) => {
        setEditingCategory(category);
        setSelectedCategoryPhotoPreview(category.photo); // Set current photo as preview for editing
        setShowAddCategoryModal(true);
    };

    const filteredCategories = categories.filter(
        (category) =>
            category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            category.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredMenuItems = menuItems.filter((item) => {
        const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.ingredients.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategoryFilter === "all" ||
            item.category === selectedCategoryFilter;
        const matchesStatus =
            selectedStatusFilter === "all" || item.status === selectedStatusFilter;

        return matchesSearch && matchesCategory && matchesStatus;
    });
    return (
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search Categories"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    />
                </div>
                <button
                    onClick={handleOpenAddCategoryModal}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition-colors"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Add New Category
                </button>
            </div>

            {/* Categories Table */}

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#eff0f6]">
                        <tr>
                            <th className="px-4 py-3 text-left w-10"></th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-10">
                                #
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-20">
                                Photo
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                                Category Name
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                                Description
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                                Added on
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                                Status
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-24">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {filteredCategories.map((category, index) => (
                            <tr key={category.id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm text-gray-900"></td>
                                <td className="px-4 py-3 text-sm text-gray-900">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-3">
                                    <img
                                        src={category.photo || "/placeholder.svg"}
                                        alt={`${category.name} photo`}
                                        className="w-12 h-12 rounded-lg object-cover"
                                    />
                                </td>
                                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                    {category.name}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">
                                    {category.description}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">
                                    {category.addedOn}
                                </td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${category.status === "Active"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {category.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <button className="p-2 rounded-md hover:bg-gray-100 text-gray-500">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-40">
                                            <DropdownMenuItem
                                                className="flex items-center cursor-pointer"
                                                onClick={() =>
                                                    handleOpenEditCategoryModal(category)
                                                }
                                            >
                                                <Edit className="mr-2 h-4 w-4" />
                                                <span>Edit</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                className="flex items-center text-red-600 cursor-pointer"
                                                onClick={() => handleDeleteCategory(category.id)}
                                            >
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                <span>Remove</span>
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
    )
}

export default BusinessCategory