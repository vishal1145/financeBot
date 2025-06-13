import React from 'react';
import logo from '../logo.svg';
import { MdEmail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-gray-50 h-screen flex items-stretch">
      <div className="w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden h-full">
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col">
          <div className="flex items-center">
            <img src={logo} alt="FinanceBot Logo" className="h-7 w-7 mr-2" />
            <span className="font-semibold text-lg text-gray-800">FinanceBot</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Admin Login – FinanceBot</h2>
          <p className="text-gray-500 text-sm mb-8">Monitor user activity, spending alerts, and summaries in one place.</p>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Email address</label>
              <div className="relative flex items-center">
                <MdEmail className="absolute left-3 text-gray-400 text-lg" />
                <input type="email" placeholder="Enter your email" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Password</label>
              <div className="relative flex items-center">
                <MdLock className="absolute left-3 text-gray-400 text-lg" />
                <input type="password" placeholder="Enter your password" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition">Login</button>
          </form>
          <div className="mt-4 text-center">
          <Link to="#" className="text-xs text-gray-400 hover:underline">
  Forgot password?
</Link>
          </div>
        </div>
        {/* Right Side - Phone Mockup */}
        <div className="hidden md:flex w-1/2 p-10 items-center justify-center bg-gray-50">
          <div className="relative w-64 h-[500px] flex items-center justify-center">
            {/* Phone Body */}
            <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl shadow-lg flex flex-col overflow-hidden border border-gray-200">
              {/* WhatsApp Header */}
              <div className="bg-green-700 h-12 flex items-center justify-center">
                <span className="text-white font-semibold text-sm tracking-wide">WhatsApp</span>
              </div>
              {/* Chat Area (beige/tan background, rounded, padded) */}
              <div className="flex-1 flex flex-col justify-start items-center px-2 py-4 bg-[#f7f5f2]">
                <div className="w-[90%] bg-[#e9e4dd] rounded-2xl p-4 flex flex-col gap-2 shadow-md mt-2">
                  {/* Top Chat Message */}
                  <div className="flex flex-col items-end">
                    <div className="bg-[#d2f8c6] text-gray-800 rounded-lg px-3 py-1.5 text-xs font-medium shadow max-w-[80%]">Hi FinanceBot 🪙</div>
                  </div>
                  {/* Bot Message */}
                  <div className="flex flex-col items-start">
                    <div className="bg-white text-gray-800 rounded-lg px-3 py-1.5 text-xs shadow max-w-[80%]">Hey! Welcome back. What would you like to do today?</div>
                  </div>
                  {/* User Message */}
                  <div className="flex flex-col items-end">
                    <div className="bg-[#d2f8c6] text-gray-800 rounded-lg px-3 py-1.5 text-xs font-medium shadow max-w-[80%]">Show me my financial summary</div>
                  </div>
                  {/* Bot Summary Card (with warning inside) */}
                  <div className="flex flex-col items-start">
                    <div className="bg-white rounded-xl px-3 py-2 shadow text-xs max-w-full">
                      <div className="font-semibold mb-1 flex items-center gap-1">📊 <span>Weekly Summary</span></div>
                      <div className="flex items-center justify-between mb-1"><span>🍔 Food:</span><span>$120</span></div>
                      <div className="flex items-center justify-between mb-1"><span>🚌 Transport:</span><span>$45</span></div>
                      <div className="flex items-center justify-between mb-1"><span>🎬 Entertainment:</span><span>$60</span></div>
                      <div className="flex items-center justify-between font-bold border-t border-gray-100 pt-1 mt-1"><span>🔴 Total:</span><span>$225</span></div>
                      <div className="mt-2 text-[11px] bg-red-50 text-red-500 rounded px-2 py-1">You've gone over your food budget goal of $100. Try to spend less!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
