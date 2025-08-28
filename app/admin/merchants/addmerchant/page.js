"use client";

import { useState } from "react";
import {
  ImageIcon,
  MapPin,
  Folder,
  List,
  QrCode,
  ArrowLeft,
  ArrowRight,
  X,
  ImagePlus,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import BusinessInfo from "@/app/admin//merchants/addmerchant/info/page"
import BusinessAddress from "@/app/admin//merchants/addmerchant/address/page"
import BusinessCategory from "@/app/admin//merchants/addmerchant/category/page"
import BusinessQR from "@/app/admin//merchants/addmerchant/qr/page"
import BusinessManage from "@/app/admin//merchants/addmerchant/manage/page"

export default function AddMerchantPage({ onNavigateBack }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showDeleteCategoryConfirmModal, setShowDeleteCategoryConfirmModal] =
    useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [selectedCategoryPhotoPreview, setSelectedCategoryPhotoPreview] =
    useState(null); // New state for category photo preview
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

  

  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [editingMenuItem, setEditingMenuItem] = useState(null);
  const [selectedMenuItemPhotoPreview, setSelectedMenuItemPhotoPreview] =
    useState(null); // New state for menu item photo preview

  const steps = [
    { id: 1, name: "Business Details", icon: ImageIcon },
    { id: 2, name: "Address and Contact", icon: MapPin },
    { id: 3, name: "Categories", icon: Folder },
    { id: 4, name: "Manage Menu", icon: List },
    { id: 5, name: "QR Codes", icon: QrCode },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onNavigateBack();
    }
  };

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

  const handleCategoryPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedCategoryPhotoPreview(URL.createObjectURL(file));
    } else {
      setSelectedCategoryPhotoPreview(null);
    }
  };

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

  const handleDeleteCategory = (categoryId) => {
    setCategoryToDelete(categoryId);
    setShowDeleteCategoryConfirmModal(true);
  };

  const confirmDeleteCategory = () => {
    if (categoryToDelete) {
      setCategories((prevCategories) =>
        prevCategories.filter((cat) => cat.id !== categoryToDelete)
      );
      setCategoryToDelete(null);
      setShowDeleteCategoryConfirmModal(false);
    }
  };

  const handleOpenAddItemModal = () => {
    setEditingMenuItem(null);
    setSelectedMenuItemPhotoPreview(null); // Clear photo preview for new item
    setShowAddItemModal(true);
  };

  const handleOpenEditItemModal = (item) => {
    setEditingMenuItem(item);
    setSelectedMenuItemPhotoPreview(item.photo); // Set current photo as preview for editing
    setShowAddItemModal(true);
  };

  const handleMenuItemPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedMenuItemPhotoPreview(URL.createObjectURL(file));
    } else {
      setSelectedMenuItemPhotoPreview(null);
    }
  };

  const handleSaveMenuItem = (itemData) => {
    const finalPhoto =
      selectedMenuItemPhotoPreview || "/placeholder.svg?height=40&width=40";

    if (editingMenuItem) {
      setMenuItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingMenuItem.id
            ? { ...item, ...itemData, photo: finalPhoto }
            : item
        )
      );
    } else {
      setMenuItems((prevItems) => [
        ...prevItems,
        {
          id:
            prevItems.length > 0
              ? Math.max(...prevItems.map((i) => i.id)) + 1
              : 1,
          ...itemData,
          photo: finalPhoto,
          isSpecial: false,
        },
      ]);
    }
    setShowAddItemModal(false);
    setEditingMenuItem(null);
    setSelectedMenuItemPhotoPreview(null); // Clear preview after saving
  };

  const handleToggleMenuItemStatus = (itemId, newStatus) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, status: newStatus, isSpecial: false }
          : item
      )
    );
  };

  const handleToggleMenuItemSpecial = (itemId) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isSpecial: !item.isSpecial } : item
      )
    );
  };

  const handleDeleteMenuItem = (itemId) => {
    setItemToDelete(itemId);
    setShowDeleteConfirmModal(true);
  };

  const confirmDeleteItem = () => {
    if (itemToDelete) {
      setMenuItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemToDelete)
      );
      setItemToDelete(null);
      setShowDeleteConfirmModal(false);
    }
  };


  const uniqueCategories = [
    "all",
    ...new Set(menuItems.map((item) => item.category)),
  ];
  const uniqueStatuses = [
    "all",
    ...new Set(menuItems.map((item) => item.status)),
  ];

  const handleRegenerateQrCode = () => {
    alert("QR Code Regenerated (placeholder)");
  };

  const handleDownloadQrCode = () => {
    alert("Downloading QR Code (placeholder)");
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText("https://www.arifmenu.com/foodzone");
    alert("URL copied to clipboard!");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <BusinessInfo />
        );
      case 2:
        return (
          <BusinessAddress />
        );
      case 3:
        return (
          <BusinessCategory />
        );
      case 4:
        return (
          <BusinessManage />
        );
      case 5:
        return (
          <BusinessQR />
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-[#f6f7f8] rounded-2xl min-h-screen">
      {/* Step Navigation */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex items-center justify-around text-gray-600 text-sm font-medium">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center group">
            <button
              onClick={() => setCurrentStep(step.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === step.id
                  ? "bg-gray-100 text-gray-800"
                  : "hover:bg-gray-50"
              }`}
            >
              <step.icon className="w-5 h-5" />
              <span>{step.name}</span>
            </button>
          </div>
        ))}
      </div>

      {renderStepContent()}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg flex items-center hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentStep === 1}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Previous
        </button>
        <div className="flex items-center space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index + 1 === currentStep ? "bg-green-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center hover:bg-green-700 transition-colors"
        >
          Next
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>

      {/* Add/Edit Category Modal */}
      {showAddCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {editingCategory ? "Edit Category" : "Add New Category"}
              </h2>
              <button
                onClick={() => {
                  setShowAddCategoryModal(false);
                  setEditingCategory(null);
                  setSelectedCategoryPhotoPreview(null); // Clear preview on close
                }}
                className="bg-red-100 text-red-600 rounded-full p-1.5 hover:bg-red-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                handleSaveCategory({
                  name: formData.get("categoryName"),
                  description: formData.get("description"),
                  status: formData.get("status"),
                });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  name="categoryName"
                  defaultValue={editingCategory?.name || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  placeholder="Enter category name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={editingCategory?.description || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  rows="3"
                  placeholder="Write category description..."
                  required
                />
              </div>

              <div>
                <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 relative cursor-pointer overflow-hidden">
                  <input
                    type="file"
                    name="photo"
                    onChange={handleCategoryPhotoChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    aria-label="Upload category photo"
                  />
                  {selectedCategoryPhotoPreview ? (
                    <img
                      src={selectedCategoryPhotoPreview || "/placeholder.svg"}
                      alt="Category Preview"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  ) : (
                    <>
                      <ImagePlus className="w-12 h-12 text-gray-400 mb-3" />
                      <p className="text-sm text-gray-600 text-center">
                        Drop logo here or{" "}
                        <span className="text-green-600 font-medium cursor-pointer">
                          browse
                        </span>
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Maximum size: 5MB
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddCategoryModal(false);
                    setEditingCategory(null);
                    setSelectedCategoryPhotoPreview(null);
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {editingCategory ? "Save Changes" : "Add Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add/Edit Menu Item Modal */}
      {showAddItemModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6">
            {" "}
            {/* Changed max-w-2xl to max-w-3xl for wider modal */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {editingMenuItem ? "Edit Menu Item" : "Add New Item"}
              </h2>
              <button
                onClick={() => {
                  setShowAddItemModal(false);
                  setEditingMenuItem(null);
                  setSelectedMenuItemPhotoPreview(null); // Clear preview on close
                }}
                className="bg-red-100 text-red-600 rounded-full p-1.5 hover:bg-red-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                handleSaveMenuItem({
                  name: formData.get("itemName"),
                  ingredients: formData.get("ingredients"),
                  category: formData.get("itemCategory"),
                  price: formData.get("itemPrice"),
                  status: formData.get("itemStatus"),
                });
              }}
              className="space-y-4"
            >
              {/* Photo Upload Area */}
              <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 relative cursor-pointer overflow-hidden">
                <input
                  type="file"
                  name="photo"
                  onChange={handleMenuItemPhotoChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" // Added z-10 to ensure input is clickable
                  aria-label="Upload menu item photo"
                />
                {selectedMenuItemPhotoPreview ? (
                  <img
                    src={selectedMenuItemPhotoPreview || "/placeholder.svg"}
                    alt="Menu Item Preview"
                    className="absolute inset-0 w-full h-full object-cover object-center" // Added object-center
                  />
                ) : (
                  <>
                    <ImagePlus className="w-12 h-12 text-gray-400 mb-3" />
                    <p className="text-sm text-gray-600 text-center">
                      Drop logo here or{" "}
                      <span className="text-green-600 font-medium cursor-pointer">
                        browse
                      </span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Maximum size: 5MB
                    </p>
                  </>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="itemName"
                  defaultValue={editingMenuItem?.name || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  placeholder="Enter item name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {" "}
                {/* Grid for horizontal layout */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <Select
                    name="itemCategory"
                    defaultValue={editingMenuItem?.category || ""}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select item category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.name}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-2">
                    <Select name="currency" defaultValue="ETB">
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ETB">ETB</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                      </SelectContent>
                    </Select>
                    <input
                      type="text"
                      name="itemPrice"
                      defaultValue={
                        editingMenuItem?.price.replace("ETB ", "") || ""
                      } // Adjust default value to remove "ETB "
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Enter item price"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ingredients <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="ingredients"
                  defaultValue={editingMenuItem?.ingredients || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  rows="3"
                  placeholder="Write item ingredients"
                  required
                />
              </div>

              {/* Status field is now after Ingredients, as per screenshot */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <Select
                  name="itemStatus"
                  defaultValue={editingMenuItem?.status || "Available"}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Available">Available</SelectItem>
                    <SelectItem value="Unavailable">Unavailable</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddItemModal(false);
                    setEditingMenuItem(null);
                    setSelectedMenuItemPhotoPreview(null);
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#3CA32B] text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {editingMenuItem ? "Save Changes" : "Add Item to menu"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showDeleteConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Delete Menu Item
              </h2>
              <button
                onClick={() => {
                  setShowDeleteConfirmModal(false);
                  setItemToDelete(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg flex items-start space-x-3 mb-6">
              <svg
                className="w-6 h-6 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <div>
                <p className="font-bold mb-1">
                  Are you sure you want to delete an item from menu?
                </p>
                <p className="text-sm">
                  Are you certain you wish to remove this item from the menu?
                  Please be aware that this action will permanently delete the
                  selected item.
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowDeleteConfirmModal(false);
                  setItemToDelete(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDeleteItem}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Menu Item
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Category Confirmation Modal */}
      {showDeleteCategoryConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Delete Category
              </h2>
              <button
                onClick={() => {
                  setShowDeleteCategoryConfirmModal(false);
                  setCategoryToDelete(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg flex items-start space-x-3 mb-6">
              <svg
                className="w-6 h-6 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <div>
                <p className="font-bold mb-1">
                  Are you sure you want to delete this category?
                </p>
                <p className="text-sm">
                  Are you certain you wish to remove this category from the
                  menu? Please be aware that this action will affect menu items
                  in the menu sections.
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowDeleteCategoryConfirmModal(false);
                  setCategoryToDelete(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDeleteCategory}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
