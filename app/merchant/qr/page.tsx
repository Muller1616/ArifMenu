"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MerchantQRCodesPage() {
  const [menuUrl, setMenuUrl] = useState("https://www.arifmenu.com/foodzone")
  const [menuName, setMenuName] = useState("Foodzone Menu")

  const handleRegenerate = () => {
    // In a real app, this would regenerate the QR code
    console.log("Regenerating QR code for:", menuUrl)
  }

  const handleDownload = () => {
    // In a real app, this would download the QR code
    console.log("Downloading QR code for:", menuName)
  }

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(menuUrl)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* QR Code Display */}
        <div className="flex flex-col items-center space-y-6">
          <Card className="w-full max-w-md">
            <CardContent className="p-8 flex flex-col items-center space-y-4">
              {/* QR Code */}
              <div className="w-64 h-64 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                <QRCodeSVG />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 w-full max-w-md">
            <Button variant="outline" onClick={handleRegenerate} className="flex-1 bg-transparent">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Regenerate
            </Button>
            <Button onClick={handleDownload} className="flex-1 bg-green-600 hover:bg-green-700">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download QR Code
            </Button>
          </div>
        </div>

        {/* QR Code Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-600">{menuName}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  Ensure that you test the QR code before finalizing the print for the client.
                  <br />
                  Also, make sure the downloaded file is named after the merchant.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Menu URL</label>
                <div className="flex gap-2">
                  <Input value={menuUrl} onChange={(e) => setMenuUrl(e.target.value)} className="flex-1" />
                  <Button variant="outline" size="sm" onClick={handleCopyUrl}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Menu Name</label>
                <Input value={menuName} onChange={(e) => setMenuName(e.target.value)} />
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function QRCodeSVG() {
  return (
    <svg width="240" height="240" viewBox="0 0 240 240" className="border">
      {/* This is a simplified QR code pattern - in a real app, you'd use a QR code library */}
      <rect width="240" height="240" fill="white" />

      {/* Corner squares */}
      <rect x="0" y="0" width="60" height="60" fill="black" />
      <rect x="10" y="10" width="40" height="40" fill="white" />
      <rect x="20" y="20" width="20" height="20" fill="black" />

      <rect x="180" y="0" width="60" height="60" fill="black" />
      <rect x="190" y="10" width="40" height="40" fill="white" />
      <rect x="200" y="20" width="20" height="20" fill="black" />

      <rect x="0" y="180" width="60" height="60" fill="black" />
      <rect x="10" y="190" width="40" height="40" fill="white" />
      <rect x="20" y="200" width="20" height="20" fill="black" />

      {/* Data pattern (simplified) */}
      <rect x="80" y="20" width="10" height="10" fill="black" />
      <rect x="100" y="20" width="10" height="10" fill="black" />
      <rect x="120" y="20" width="10" height="10" fill="black" />
      <rect x="140" y="20" width="10" height="10" fill="black" />

      <rect x="80" y="40" width="10" height="10" fill="black" />
      <rect x="120" y="40" width="10" height="10" fill="black" />
      <rect x="160" y="40" width="10" height="10" fill="black" />

      <rect x="90" y="60" width="10" height="10" fill="black" />
      <rect x="110" y="60" width="10" height="10" fill="black" />
      <rect x="130" y="60" width="10" height="10" fill="black" />
      <rect x="150" y="60" width="10" height="10" fill="black" />

      <rect x="20" y="80" width="10" height="10" fill="black" />
      <rect x="40" y="80" width="10" height="10" fill="black" />
      <rect x="80" y="80" width="10" height="10" fill="black" />
      <rect x="100" y="80" width="10" height="10" fill="black" />
      <rect x="140" y="80" width="10" height="10" fill="black" />
      <rect x="160" y="80" width="10" height="10" fill="black" />
      <rect x="200" y="80" width="10" height="10" fill="black" />
      <rect x="220" y="80" width="10" height="10" fill="black" />

      <rect x="30" y="100" width="10" height="10" fill="black" />
      <rect x="70" y="100" width="10" height="10" fill="black" />
      <rect x="90" y="100" width="10" height="10" fill="black" />
      <rect x="130" y="100" width="10" height="10" fill="black" />
      <rect x="170" y="100" width="10" height="10" fill="black" />
      <rect x="190" y="100" width="10" height="10" fill="black" />
      <rect x="210" y="100" width="10" height="10" fill="black" />

      <rect x="20" y="120" width="10" height="10" fill="black" />
      <rect x="60" y="120" width="10" height="10" fill="black" />
      <rect x="100" y="120" width="10" height="10" fill="black" />
      <rect x="120" y="120" width="10" height="10" fill="black" />
      <rect x="160" y="120" width="10" height="10" fill="black" />
      <rect x="180" y="120" width="10" height="10" fill="black" />
      <rect x="220" y="120" width="10" height="10" fill="black" />

      <rect x="40" y="140" width="10" height="10" fill="black" />
      <rect x="80" y="140" width="10" height="10" fill="black" />
      <rect x="120" y="140" width="10" height="10" fill="black" />
      <rect x="140" y="140" width="10" height="10" fill="black" />
      <rect x="180" y="140" width="10" height="10" fill="black" />
      <rect x="200" y="140" width="10" height="10" fill="black" />

      <rect x="80" y="160" width="10" height="10" fill="black" />
      <rect x="100" y="160" width="10" height="10" fill="black" />
      <rect x="140" y="160" width="10" height="10" fill="black" />
      <rect x="160" y="160" width="10" height="10" fill="black" />
      <rect x="200" y="160" width="10" height="10" fill="black" />
      <rect x="220" y="160" width="10" height="10" fill="black" />

      <rect x="80" y="200" width="10" height="10" fill="black" />
      <rect x="120" y="200" width="10" height="10" fill="black" />
      <rect x="140" y="200" width="10" height="10" fill="black" />
      <rect x="180" y="200" width="10" height="10" fill="black" />
      <rect x="200" y="200" width="10" height="10" fill="black" />

      <rect x="90" y="220" width="10" height="10" fill="black" />
      <rect x="110" y="220" width="10" height="10" fill="black" />
      <rect x="130" y="220" width="10" height="10" fill="black" />
      <rect x="170" y="220" width="10" height="10" fill="black" />
      <rect x="190" y="220" width="10" height="10" fill="black" />
      <rect x="210" y="220" width="10" height="10" fill="black" />
    </svg>
  )
}
