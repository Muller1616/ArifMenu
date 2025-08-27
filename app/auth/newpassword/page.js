"use client";

import { useState } from "react";

export default function CreatePasswordScreen({
  userEmail,
  onScreenChange,
  onLogin,
}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const errors = {};
    if (password.length < 8) {
      errors.length = "Password must be at least 8 characters long";
    }
    if (!/(?=.*[a-z])/.test(password)) {
      errors.lowercase = "Password must contain at least one lowercase letter";
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.uppercase = "Password must contain at least one uppercase letter";
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.number = "Password must contain at least one number";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordErrors = validatePassword(password);
    const newErrors = {};

    if (Object.keys(passwordErrors).length > 0) {
      newErrors.password = "Password does not meet requirements";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Password reset successful - log the user in
      const userData = {
        id: 1,
        name: "Admin User",
        email: userEmail,
        role: "Admin",
        businessName: "Arifpay Merchant",
      };
      onLogin(userData);
    }
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

      {/* Right Side - Create Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile Brand Header */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <h1 className="text-2xl font-bold text-green-600">Arifpay</h1>
            </div>
            <p className="text-gray-600">Create your new password</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                Create Your New Password
                <span className="ml-2">🔑</span>
              </h2>
              <p className="text-gray-600 text-sm">
                We have verified the code we sent you.
                <br />
                Please create a new password to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all ${
                      errors.password ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Enter your new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {showPassword ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      )}
                    </svg>
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all ${
                      errors.confirmPassword
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                    placeholder="Re-enter your new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {showConfirmPassword ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      )}
                    </svg>
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Password Requirements */}
              {password && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Password Requirements:
                  </p>
                  <div className="space-y-1">
                    {[
                      {
                        check: password.length >= 8,
                        text: "At least 8 characters",
                      },
                      {
                        check: /(?=.*[a-z])/.test(password),
                        text: "One lowercase letter",
                      },
                      {
                        check: /(?=.*[A-Z])/.test(password),
                        text: "One uppercase letter",
                      },
                      { check: /(?=.*\d)/.test(password), text: "One number" },
                    ].map((req, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            req.check ? "bg-green-500" : "bg-gray-300"
                          }`}
                        >
                          {req.check && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <span
                          className={`text-sm ${
                            req.check ? "text-green-600" : "text-gray-500"
                          }`}
                        >
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="submit"
                onClick={() => onScreenChange("login")}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all font-medium"
              >
                Continue
              </button>
            </form>

            <div className="mt-8 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center mr-2">
                  <span className="text-green-600 font-bold text-xs">A</span>
                </div>
                <span className="text-sm text-gray-500">Arifpay</span>
              </div>
              <p className="text-xs text-gray-400">
                © 2024 Financial Technologies — Arif and by Arif Financial
                Technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
