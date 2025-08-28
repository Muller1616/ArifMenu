"use client";

import { useState } from "react";
import React from 'react'
import {
  RefreshCw,
  Download,
  Copy,
} from "lucide-react";


const BusinessQR = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                  QR Codes Generation
                </h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* QR Code Display */}
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src="/placeholder.svg?height=256&width=256&text=QR+Code"
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
  )
}

export default BusinessQR