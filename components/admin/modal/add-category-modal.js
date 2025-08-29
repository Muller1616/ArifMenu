import React from 'react'

const AddCategoryModal = () => {
  return (
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
  )
}

export default AddCategoryModal