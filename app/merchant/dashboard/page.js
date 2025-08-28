"use client";
import { MerchantQRCodesPage } from "@/app/merchant/qr/page"
export default function MerchantDashboard({ user, onLogout }) {
  // return (<>
  //   <div className="p-10">
  //     <h1 className="text-3xl font-bold text-blue-700">Merchant Dashboard</h1>
  //     <p className="mt-4 text-gray-600">Welcome, {user?.name} ({user?.email})</p>
  //     <button
  //       onClick={onLogout}
  //       className="mt-6 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700"
  //     >
  //       Logout
  //     </button>
  //   </div>
  //   <CategoriesManagement />
  // </>
  // );
  return <MerchantQRCodesPage />;
}
