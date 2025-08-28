"use client";

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
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Sparkles,
  EyeOff,
  RefreshCw,
  Download,
  Copy,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BusinessManage = () => {

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

  const uniqueCategories = [
    "all",
    ...new Set(menuItems.map((item) => item.category)),
  ];
  const uniqueStatuses = [
    "all",
    ...new Set(menuItems.map((item) => item.status)),
  ];
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [editingMenuItem, setEditingMenuItem] = useState(null);
  const [selectedMenuItemPhotoPreview, setSelectedMenuItemPhotoPreview] =
    useState(null); // New state for menu item photo preview
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("all");

  const[searchTerm, setSearchTerm] = useState("");
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
                        className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${item.status === "Available"
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