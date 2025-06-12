import React from 'react';
import logo from '../logo.svg';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="flex items-center mb-8">
            <img src={logo} alt="FinanceBot Logo" className="h-7 w-7 mr-2" />
            <span className="font-semibold text-lg text-gray-800">FinanceBot</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Admin Login – FinanceBot</h2>
          <p className="text-gray-500 text-sm mb-8">Monitor user activity, spending alerts, and summaries in one place.</p>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Email address</label>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Password</label>
              <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition">Login</button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-xs text-gray-400 hover:underline">Forgot password?</a>
          </div>
        </div>
        {/* Right Side - Phone Mockup */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-50">
          <div className="relative w-64 h-[500px] flex items-center justify-center">
            <img
              src="https://i.imgur.com/8Km9tLL.png"
              alt="Phone Mockup"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-lg"
            />
            {/* Overlay for chat UI */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-56 bg-white bg-opacity-90 rounded-xl p-4 shadow-md text-xs">
              <div className="mb-2 text-green-600 font-semibold">Hi FinanceBot 🪙</div>
              <div className="mb-2 text-gray-700">Hey! Welcome back. What would you like to do today?</div>
              <div className="mb-2 bg-green-100 text-green-800 rounded px-2 py-1 w-fit">Show me my financial summary</div>
              <div className="bg-gray-100 rounded-lg p-2 mb-2">
                <div className="font-semibold mb-1">Weekly Summary</div>
                <div className="flex items-center justify-between mb-1"><span>🍔 Food:</span><span>$120</span></div>
                <div className="flex items-center justify-between mb-1"><span>🚌 Transport:</span><span>$45</span></div>
                <div className="flex items-center justify-between mb-1"><span>🎬 Entertainment:</span><span>$60</span></div>
                <div className="flex items-center justify-between font-bold"><span>Σ Total:</span><span>$225</span></div>
              </div>
              <div className="text-red-500 text-xs">You've gone over your food budget!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
