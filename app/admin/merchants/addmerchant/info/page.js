import { ImageIcon } from "lucide-react";

const BusinessInfo = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Basic business information form
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Logo Upload */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
          <ImageIcon className="w-12 h-12 text-gray-400 mb-3" />
          <p className="text-sm text-gray-600 text-center">
            Drop logo here or{" "}
            <span className="text-green-600 font-medium cursor-pointer">
              browse
            </span>
          </p>
          <p className="text-xs text-gray-400 mt-1">Maximum size: 5MB</p>
        </div>

        {/* Business Name & Brand Name */}
        <div className="lg:col-span-2 space-y-4">
          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="businessName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter business legal name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="brandName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Brand/Display Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="brandName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter brand/display name"
              required
            />
          </div>
        </div>
      </div>

      {/* Other Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div>
          <label
            htmlFor="tradeLicense"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Trade License Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="tradeLicense"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter trade license number"
            required
          />
        </div>
        <div>
          <label
            htmlFor="tinVat"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            TIN / VAT Registration Number{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="tinVat"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter TIN / VAT registration number"
            required
          />
        </div>
        <div>
          <label
            htmlFor="merchantId"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Merchant ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="merchantId"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter merchant's ID"
            required
          />
        </div>
      </div>

      {/* Short Business Description */}
      <div className="mt-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Short Business Description
        </label>
        <textarea
          id="description"
          rows="3"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
          placeholder="Write business description"
        ></textarea>
      </div>
    </div>
  )
}

export default BusinessInfo