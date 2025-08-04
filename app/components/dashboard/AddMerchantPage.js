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

export default function AddMerchantPage({ onNavigateBack }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null); // State for category being edited
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

  // New state for menu items
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

  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [editingMenuItem, setEditingMenuItem] = useState(null); // State for menu item being edited
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("all");

  // States for map coordinates (can be manually entered)
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

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
      onNavigateBack(); // Go back to Merchants list if on first step
    }
  };

  const handleOpenAddCategoryModal = () => {
    setEditingCategory(null); // Clear any editing state
    setShowAddCategoryModal(true);
  };

  const handleOpenEditCategoryModal = (category) => {
    setEditingCategory(category);
    setShowAddCategoryModal(true);
  };

  const handleSaveCategory = (categoryData) => {
    if (editingCategory) {
      // Update existing category
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === editingCategory.id ? { ...cat, ...categoryData } : cat
        )
      );
    } else {
      // Add new category
      setCategories((prevCategories) => [
        ...prevCategories,
        {
          id:
            prevCategories.length > 0
              ? Math.max(...prevCategories.map((c) => c.id)) + 1
              : 1,
          ...categoryData,
          addedOn: new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
        },
      ]);
    }
    setShowAddCategoryModal(false);
    setEditingCategory(null); // Clear editing state
  };

  const handleDeleteCategory = (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories((prevCategories) =>
        prevCategories.filter((cat) => cat.id !== categoryId)
      );
    }
  };

  const handleOpenAddItemModal = () => {
    setEditingMenuItem(null); // Clear any editing state
    setShowAddItemModal(true);
  };

  const handleOpenEditItemModal = (item) => {
    setEditingMenuItem(item);
    setShowAddItemModal(true);
  };

  const handleSaveMenuItem = (itemData) => {
    if (editingMenuItem) {
      // Update existing item
      setMenuItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingMenuItem.id ? { ...item, ...itemData } : item
        )
      );
    } else {
      // Add new item
      setMenuItems((prevItems) => [
        ...prevItems,
        {
          id:
            prevItems.length > 0
              ? Math.max(...prevItems.map((i) => i.id)) + 1
              : 1,
          ...itemData,
          isSpecial: false, // New items are not special by default
        },
      ]);
    }
    setShowAddItemModal(false);
    setEditingMenuItem(null); // Clear editing state
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
    if (window.confirm("Are you sure you want to delete this menu item?")) {
      setMenuItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    }
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

  const uniqueCategories = [
    "all",
    ...new Set(menuItems.map((item) => item.category)),
  ];
  const uniqueStatuses = [
    "all",
    ...new Set(menuItems.map((item) => item.status)),
  ];

  // Placeholder functions for QR Code actions
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
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Basic business information form
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Logo Upload */}
              <div className="lg:col-span-1 flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
                <ImageIcon className="w-12 h-12 text-gray-400 mb-3" />
                <p className="text-sm text-gray-600 text-center">
                  Drop logo here or{" "}
                  <span className="text-green-600 font-medium cursor-pointer">
                    browse
                  </span>
                </p>
                <p className="text-xs text-gray-400 mt-1">Maximum size: 5MB</p>
              </div>

              {/* Business Name & Brand Name */}
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter business legal name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="brandName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Brand/Display Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="brandName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter brand/display name"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Other Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <label
                  htmlFor="tradeLicense"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Trade License Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="tradeLicense"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter trade license number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="tinVat"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  TIN / VAT Registration Number{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="tinVat"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter TIN / VAT registration number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="merchantId"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Merchant ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="merchantId"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter merchant's ID"
                  required
                />
              </div>
            </div>

            {/* Short Business Description */}
            <div className="mt-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Short Business Description
              </label>
              <textarea
                id="description"
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                placeholder="Write business description"
              ></textarea>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Business location address and contact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter contact person's full name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="mobilePhone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <Select defaultValue="+251">
                    <SelectTrigger className="w-24 rounded-r-none border-r-0 focus:ring-0">
                      <SelectValue placeholder="+251" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+251">+251</SelectItem>
                      <SelectItem value="+1">+1</SelectItem>
                      <SelectItem value="+44">+44</SelectItem>
                    </SelectContent>
                  </Select>
                  <input
                    type="tel"
                    id="mobilePhone"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter contact email address"
                  required
                />
              </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Primary contact person Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label
                  htmlFor="regionState"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Region / State <span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select business region or state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="addis-ababa">Addis Ababa</SelectItem>
                    <SelectItem value="oromia">Oromia</SelectItem>
                    <SelectItem value="amhara">Amhara</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select business city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="city1">City 1</SelectItem>
                    <SelectItem value="city2">City 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="subCityWoreda"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Sub-City / Woreda <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subCityWoreda"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter business sub-city or woreda"
                  required
                />
              </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Pick business location from map
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-64 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center relative">
                {/* Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.793504421412!2d38.79187803016105!3d8.991139996910388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84e3c475fdaf%3A0xf875473c267bfedc!2sYod%20Abyssinia%20Traditional%20Restaurant!5e0!3m2!1sen!2set!4v1754220550093!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yod Abyssinia Traditional Restaurant Map"
                ></iframe>
              </div>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="latitude"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Latitude <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="latitude"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter latitude"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="longitude"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Longitude <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="longitude"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter Longitude"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
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
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-100">
                  <thead className="bg-[#eff0f6]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                        #
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                        Photo
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                        Category Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                        Description
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                        Added on
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
                    {filteredCategories.map((category) => (
                      <tr key={category.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {category.id}
                        </td>
                        <td className="px-6 py-4">
                          <img
                            src={category.photo || "/placeholder.svg"}
                            alt={`${category.name} photo`}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {category.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {category.description}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {category.addedOn}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                              category.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {category.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button className="p-2 rounded-md hover:bg-gray-100 text-gray-500">
                                <MoreVertical className="w-5 h-5" />
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-10 bg-white">
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
                                onClick={() =>
                                  handleDeleteCategory(category.id)
                                }
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
        );
      case 4:
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
                            <DropdownMenuContent align="end" className="w-56 bg-white">
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
        );
      case 5:
        return (
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            {/* <h2 className="text-lg font-semibold text-gray-800 mb-6">
              QR Codes Generation
            </h2> */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* QR Code Display */}
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <img
                  src="QRCODE.png?height=337&width=319&text=QR+Code"
                  alt="QR Code"
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* QR Code Details and Actions */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900">
                  Foodzone Menu
                </h3>
                <p className="text-gray-600 text-sm">
                  Ensure that you test the QR code before finalizing the print
                  for the client. Also, make sure the downloaded file is named
                  after the merchant.
                </p>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-700 text-sm">
                  <span className="truncate">
                    https://www.arifmenu.com/foodzone
                  </span>
                  <button
                    onClick={handleCopyUrl}
                    className="ml-auto p-1 rounded-md hover:bg-gray-100"
                  >
                    <Copy className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handleRegenerateQrCode}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors font-medium"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Regenerate
                  </button>
                  <button
                    onClick={handleDownloadQrCode}
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors font-medium"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download QR Code
                  </button>
                </div>
              </div>
            </div>
          </div>
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
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {editingCategory ? "Edit Category" : "Add New Category"}
              </h2>
              <button
                onClick={() => {
                  setShowAddCategoryModal(false);
                  setEditingCategory(null); // Clear editing state on close
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

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                handleSaveCategory({
                  name: formData.get("categoryName"),
                  description: formData.get("description"),
                  status: formData.get("status"),
                  photo:
                    editingCategory?.photo ||
                    "/placeholder.svg?height=40&width=40", // Keep existing photo or use placeholder
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
                  defaultValue={editingCategory?.name || ""} // Pre-fill for editing
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="Enter category name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={editingCategory?.description || ""} // Pre-fill for editing
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  rows="3"
                  placeholder="Enter category description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <Select
                  name="status"
                  defaultValue={editingCategory?.status || "Active"}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Leave blank to use a default placeholder image.
                </p>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddCategoryModal(false);
                    setEditingCategory(null);
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
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {editingMenuItem ? "Edit Menu Item" : "Add New Menu Item"}
              </h2>
              <button
                onClick={() => {
                  setShowAddItemModal(false);
                  setEditingMenuItem(null); // Clear editing state on close
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
                  photo:
                    editingMenuItem?.photo ||
                    "/placeholder.svg?height=40&width=40", // Keep existing photo or use placeholder
                });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Name
                </label>
                <input
                  type="text"
                  name="itemName"
                  defaultValue={editingMenuItem?.name || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="Enter item name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ingredients
                </label>
                <textarea
                  name="ingredients"
                  defaultValue={editingMenuItem?.ingredients || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  rows="3"
                  placeholder="List ingredients"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <Select
                  name="itemCategory"
                  defaultValue={editingMenuItem?.category || ""}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
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
                  Price
                </label>
                <input
                  type="text"
                  name="itemPrice"
                  defaultValue={editingMenuItem?.price || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="e.g., ETB 250.00"
                  required
                />
              </div>

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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Leave blank to use a default placeholder image.
                </p>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddItemModal(false);
                    setEditingMenuItem(null);
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {editingMenuItem ? "Save Changes" : "Add Item"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
