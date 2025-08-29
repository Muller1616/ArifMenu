"use client";

import { useState } from "react";
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


const BusinessAddress = () => {
    const [latitude, setLatitude] = useState("");
      const [longitude, setLongitude] = useState("");
    
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
    )
}

export default BusinessAddress