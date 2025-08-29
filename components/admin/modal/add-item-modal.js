import React from 'react'

const showAddItemModal = () => {
  return (
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
  )
}

export default showAddItemModal