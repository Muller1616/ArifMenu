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
} from "lucide-react";

import { DeleteConfirmModal } from "@/components/merchant/modals/delete-confirm-modal";
import { DeleteCategoryConfirmModal } from "@/components/merchant/modals/delete-confirmation-modal";
import { AddItemModal } from "@/components/merchant/modals/add-item-modal";
import { AddCategoryModal } from "@/components/merchant/modals/add-category-modal";

import BusinessInfo from "@/app/admin/merchants/addmerchant/info/page";
import BusinessAddress from "@/app/admin/merchants/addmerchant/address/page";
import BusinessCategory from "@/app/admin/merchants/addmerchant/category/page";
import BusinessQR from "@/app/admin/merchants/addmerchant/qr/page";
import BusinessManage from "@/app/admin/merchants/addmerchant/manage/page";

export default function AddMerchantPage({ onNavigateBack }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showDeleteCategoryConfirmModal, setShowDeleteCategoryConfirmModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  const steps = [
    { id: 1, name: "Business Details", icon: ImageIcon },
    { id: 2, name: "Address and Contact", icon: MapPin },
    { id: 3, name: "Categories", icon: Folder },
    { id: 4, name: "Manage Menu", icon: List },
    { id: 5, name: "QR Codes", icon: QrCode },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    else onNavigateBack();
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return <BusinessInfo />;
      case 2: return <BusinessAddress />;
      case 3: return <BusinessCategory />;
      case 4: return <BusinessManage />;
      case 5: return <BusinessQR />;
      default: return null;
    }
  };

  return (
    <div className="p-8 bg-white rounded-2xl min-h-screen overflow-x-hidden">
      {/* Step Navigation */}
      <div className="mb-4 flex items-center justify-around text-gray-600 text-sm font-medium">
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

      {/* Step Content (only this can scroll horizontally if needed) */}
      <div className="overflow-x-auto">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-6">
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
            />
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

      {/* Modals */}
      {showAddCategoryModal && <AddCategoryModal />}
      {showAddItemModal && <AddItemModal />}
      {showDeleteConfirmModal && <DeleteConfirmModal />}
      {showDeleteCategoryConfirmModal && <DeleteCategoryConfirmModal />}
    </div>
  );
}
