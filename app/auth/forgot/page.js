"use client";

import { useState } from "react";

export default function ForgotPasswordScreen({ onScreenChange }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Password reset for:", email);
    onScreenChange("check-inbox", email);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 m-3 rounded-2xl bg-gradient-to-br bg-[#3ca32b] relative overflow-hidden">
        <img
          src="/images/xor.svg"
          alt="foreground"
          className="absolute  w-full h-full "
        />

        <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white">
          <div className="mb-8">
            <img
              src="/images/ariflogo.svg"
              alt="Arifpay Logo"
              className="w-203 h-82 mb-60"
            />
          </div>

          <div className="max-w-md">
            <h2 className="text-3xl mb-4">
              WELCOME TO <span className="font-bold">ARIF MENU</span>
            </h2>
            <p className="text-green-100 leading-relaxed text-xl">
              Welcome to Arif Menu — where managing menus for all our Merchants
              becomes simple, organized, and stress-free. Stay focused, stay
              efficient, and deliver excellence every day.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex bg-gray-100 m-3 rounded-2xl items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Brand Header */}
          {/* <div className="lg:hidden text-center mb-8">
            <h1 className="text-2xl font-bold text-green-600 mb-2">Arifpay</h1>
            <p className="text-gray-600">Reset your password</p>
          </div> */}

          <div className="bg-white rounded-2xl w-372 h-692 shadow-xl p-10">
            <div className="text-center mb-8">
              {/* <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div> */}
              <h2 className="text-2xl  text-gray-500 h-12 border-b-2 border-gray-100">
                Forgot your password? 🤷🏾‍♂️
              </h2>
              <p className="text-gray-600 m-5">
                Forgot your password? No need to worry. Please enter your email
                address to initiate the password reset process.{" "}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="you@gmail.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-4 rounded-2xl hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all font-medium"
              >
                Continue
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => onScreenChange("login")}
                className="w-full bg-[#F8FAFC] text-gray-500 py-3 px-4 rounded-2xl focus:ring-offset-2 transition-all font-medium"
              >
                Back to Login
              </button>

              <div className="mt-8">
                <img
                  src="/images/bottomarificon.svg"
                  alt="Arifpay Logo"
                  className="w-203 h-82 mx-auto mt-10 "
                />
              </div>

              <div className="mt-6 text-center ">
                {/* <p className="text-gray-600">
                Don't have an account?{" "}
                <button className="text-green-600 hover:text-green-700 font-medium">
                  Sign up
                </button>
                
              </p> */}
                <div className="border-b-2 border-gray-100 "></div>
                <p className="text-gray-400 text-xs mt-3 ">
                  © Arif Financial Technologies — Built by and for Arif
                  Financial Technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
