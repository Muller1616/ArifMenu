"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AddCategoryModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
  category?: any
}

export function AddCategoryModal({ isOpen, onClose, onSubmit, category }: AddCategoryModalProps) {
  const [formData, setFormData] = useState({ name: "", description: "", image: "" })

  useEffect(() => {
    if (category) {
      setFormData({ name: category.name, description: category.description, image: category.image })
    } else {
      setFormData({ name: "", description: "", image: "" })
    }
  }, [category])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.description) {
      onSubmit(formData)
      setFormData({ name: "", description: "", image: "" })
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md w-full bg-white rounded-2xl shadow-lg p-6">
        <DialogHeader className="relative">
          <DialogTitle className="text-lg font-semibold text-gray-800">
            {category ? "Edit Category" : "Add New Category"}
          </DialogTitle>
          
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-2">
          {/* Image Upload */}
          <div className="space-y-2">
            {formData.image ? (
              <div
                key={formData.image} // ensure unique key for React
                className="relative border-2 border-gray-300 rounded-lg p-4 bg-gray-50"
              >
                <img
                  src={formData.image || "/placeholder.svg"}
                  alt="Category preview"
                  className="w-full h-32 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, image: "" })}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                >
                  ×
                </button>
                <div className="mt-2 text-center">
                  <label className="text-[#3CA32B] cursor-pointer underline text-sm font-medium">
                    Change image
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>
              </div>
            ) : (
              <div
                key="placeholder" // unique key for placeholder
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#3CA32B] transition-colors bg-gray-50"
              >
                <div className="flex flex-col items-center space-y-2">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="text-sm text-gray-600">
                    Drop logo here or{" "}
                    <label className="text-[#3CA32B] cursor-pointer underline font-medium">
                      browse
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  </div>
                  <div className="text-xs text-gray-500">Maximum size: 5MB</div>
                </div>
              </div>
            )}
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="categoryName" className="font-medium text-gray-700">
              Category Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="categoryName"
              placeholder="Enter category name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-gray-300 focus:border-[#3CA32B] focus:ring focus:ring-[#3CA32B]/50 bg-white text-gray-900"
              required
            />
          </div>

          {/* Description Field */}
          <div className="space-y-2">
            <Label htmlFor="categoryDescription" className="font-medium text-gray-700">
              Category Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="categoryDescription"
              placeholder="Write category description..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="border-gray-300 focus:border-[#3CA32B] focus:ring focus:ring-[#3CA32B]/50 bg-white text-gray-900"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 flex-col sm:flex-row">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-white border-gray-300 hover:bg-gray-50 text-gray-700"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#3CA32B] hover:bg-[#2d8a24] text-white shadow-md"
            >
              {category ? "Update Category" : "Add Category"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
