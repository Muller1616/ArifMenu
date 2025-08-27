"use client";

import { useState, useEffect } from "react";

export default function CheckInboxScreen({
  userEmail,
  onScreenChange,
  onLogin,
}) {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [timeLeft, setTimeLeft] = useState(60); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const code = verificationCode.join("");

    if (code.length === 6) {
      // Demo verification - in real app, verify with backend
      const userData = {
        id: 1,
        name: "Admin User",
        email: userEmail,
        role: "Admin",
        businessName: "Arifpay Merchant",
      };
      onLogin(userData);
      onScreenChange("CreatePasswordScreen");
    } else {
      alert("Please enter the complete verification code");
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    setVerificationCode(["", "", "", "", "", ""]);
    console.log("Resending code to:", userEmail);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
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

      {/* Right Side - Verification Form */}
      <div className="w-full lg:w-1/2 flex bg-gray-100 m-3 rounded-2xl items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Brand Header */}

          <div className="bg-white rounded-2xl shadow-xl p-10 w-372 h-692">
            <div className="text-center mb-8">
              <h2 className="text-2xl  text-gray-500 h-12 border-b-2 border-gray-100">
                Check your inbox 📥
              </h2>
              <p className="text-gray-600 m-5">
                We have sent a six-digit verification code to your email
                address. Please check your inbox to retrieve it and complete the
                process.
              </p>

            </div>

            <form onSubmit={handleVerify} className="space-y-6">
              <div>

                <div className="flex justify-center space-x-3">
                  {verificationCode.map((digit, index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={verificationCode.some((digit) => !digit)}
                onClick={() => onScreenChange("create-password")}
                className="w-full bg-[#3CA32B] text-white py-3 px-4 rounded-2xl hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all font-medium"
              >
                Continue
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Code sent. Should arrive in :
                  <span className="font-medium text-green-600">
                    {formatTime(timeLeft)}
                  </span>
                </p>
                {timeLeft === 0 && (
                  <p className="text-gray-500">
                    If you haven't received the code yet,
                    <button
                      type="button"
                      onClick={handleResend}
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      Resend Code
                    </button>
                  </p>
                )}
              </div>
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
