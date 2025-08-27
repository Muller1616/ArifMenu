"use client";

import { useState } from "react";

export default function LoginScreen({ onScreenChange, onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "1234") {
            const userData = {
                id: 1,
                name: "Admin User",
                email,
                role: "Admin",
            };
            onLogin(userData);
        } else if (email === "merchant@gmail.com" && password === "1234") {
            const userData = {
                id: 2,
                name: "Merchant User",
                email,
                role: "Merchant",
            };
            onLogin(userData);
        } else {
            alert("Invalid credentials");
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

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex bg-gray-100 m-3 rounded-2xl items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-md">
                    {/* Mobile Brand Header */}
                    <div className="lg:hidden text-center mb-8">

                    </div>

                    <div className="bg-white w-372 h-100 rounded-2xl shadow-xl p-10">
                        <div className="text-center">
                            <div className="h-12 border-b-2 border-gray-100">
                                {/* Show image on small screens only */}
                                <img
                                    src="/images/ariflogo.svg"
                                    alt="logo"
                                    className="block md:hidden text-green-600 mx-auto h-full object-contain"
                                />

                                {/* Show text on medium and larger screens */}
                                <h2 className="hidden md:block text-2xl text-gray-500">
                                    Hey there 👋
                                </h2>
                            </div>

                            <p className="text-gray-600 m-5 ">
                                Please Login to manage Merchants, their menus and prices. Thank
                                you
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
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
                                    className="w-full px-4 py-3 border rounded-2xl border-gray-300  focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                    placeholder="you@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all pr-12"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? "👁️" : "👁️‍🗨️"}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>
                                <button
                                    type="button"
                                    onClick={() => onScreenChange("forgot-password")}
                                    className="text-sm text-gray-400 hover:text-green-700 font-medium"
                                >
                                    Forgot Your Password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 px-4 rounded-2xl hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all font-medium  "
                            >
                                Login
                            </button>
                        </form>
                        <div className="mt-8">
                            <img src="/images/bottomarificon.svg" alt="Arifpay Logo" className="w-203 h-82 mx-auto mt-10 " />
                        </div>

                        <div className="mt-6 text-center ">
                            <div className="border-b-2 border-gray-100 "></div>
                            <p className="text-gray-400 text-xs mt-3 ">© Arif Financial Technologies — Built by and for Arif Financial Technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
