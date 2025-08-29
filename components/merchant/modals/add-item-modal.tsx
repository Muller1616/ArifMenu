"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AddItemModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
}

const categories = ["Hot Beverages", "Cold Beverages", "Breakfast", "Lunch", "Dinner"]

export function AddItemModal({ isOpen, onClose, onSubmit }: AddItemModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    ingredients: "",
    image: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.category && formData.price && formData.ingredients) {
      onSubmit({
        ...formData,
        price: `ETB ${formData.price}`,
      })
      setFormData({ name: "", category: "", price: "", ingredients: "", image: "" })
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
      <DialogContent className="sm:max-w-md bg-white rounded-2xl shadow-md p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900">Add New Item</DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
          >
            {/* <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg> */}
          </button>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          {/* Image Upload */}
          <div className="space-y-2">
            {formData.image ? (
              <div className="relative border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                <img
                  src={formData.image || "/placeholder.svg"}
                  alt="Item preview"
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
                  <label className="text-green-600 cursor-pointer underline text-sm">
                    Change image
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
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
                    <label className="text-green-600 cursor-pointer underline">
                      browse
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  </div>
                  <div className="text-xs text-gray-500">Maximum size: 5MB</div>
                </div>
              </div>
            )}
          </div>

          {/* Item Name */}
          <div className="space-y-2">
            <Label htmlFor="itemName" className="text-gray-800">
              Item Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="itemName"
              placeholder="Enter Item name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          {/* Category and Price Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category" className="text-gray-800">
                Category <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger className="bg-white border border-gray-300">
                  <SelectValue placeholder="Select item category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price" className="text-gray-800">
                Price <span className="text-red-500">*</span>
              </Label>
              <div className="flex">
                <div className="flex items-center px-3 bg-gray-50 border border-r-0 rounded-l-md text-sm text-gray-500">
                  ETB
                </div>
                <Input
                  id="price"
                  placeholder="Enter Item price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="rounded-l-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="space-y-2">
            <Label htmlFor="ingredients" className="text-gray-800">
              Ingredients <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="ingredients"
              placeholder="Write item Ingredients"
              value={formData.ingredients}
              onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
              rows={4}
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-white border border-gray-300 text-gray-700">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              Add Item to menu
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}


































