"use client"

import { useState } from "react"

export default function QRCodeGenerator({ user }) {
  const [qrData, setQrData] = useState({
    amount: "",
    description: "",
    merchantId: user?.businessName || "ARIF001",
  })

  const handleGenerate = (e) => {
    e.preventDefault()
    console.log("Generating QR code for:", qrData)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">QR Code Generator</h1>
        <p className="text-gray-600 mt-2">Generate QR codes for payments and transactions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* QR Code Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h2>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount (Optional)</label>
              <input
                type="text"
                value={qrData.amount}
                onChange={(e) => setQrData({ ...qrData, amount: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="$0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={qrData.description}
                onChange={(e) => setQrData({ ...qrData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                rows="3"
                placeholder="Payment description..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Merchant ID</label>
              <input
                type="text"
                value={qrData.merchantId}
                onChange={(e) => setQrData({ ...qrData, merchantId: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="Merchant ID"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Generate QR Code
            </button>
          </form>
        </div>

        {/* QR Code Display */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Generated QR Code</h2>

          <div className="text-center">
            <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="text-center">
                <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center mb-4">
                  <div className="grid grid-cols-8 gap-1">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className={`w-2 h-2 ${Math.random() > 0.5 ? "bg-black" : "bg-white"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">QR Code Preview</p>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Amount:</span> {qrData.amount || "Variable"}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Merchant:</span> {qrData.merchantId}
              </p>
              {qrData.description && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Description:</span> {qrData.description}
                </p>
              )}
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Download
              </button>
              <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
