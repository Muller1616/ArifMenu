import React from 'react'

const DeleteConfirmModal = () => {
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
  return (
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
  )
}

export default DeleteConfirmModal