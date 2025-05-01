"use client";
import { useEffect } from "react";

export default function FinalHome() {
  useEffect(() => {
    const animateOrbit = () => {
      const orbit = document.querySelector(".orbit-container");
      orbit?.classList.add("spin-orbit");
    };
    animateOrbit();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-between p-6 md:p-12 overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 z-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
          Your gateway to <br />
          <span className="text-blue-600">Payouts</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Create unique and personalized reward <br /> experiences with
          Budgetree’s intelligent <br /> automation platform.
        </p>

        {/* Quick Connect Form */}
        <div className="mt-8 space-y-2">
          <h2 className="text-lg font-medium text-blue-900">
            For Quick Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-blue-900">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-blue-900 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-blue-900">Company Name</label>
              <input
                type="text"
                placeholder="Enter your company name"
                className="w-full border border-blue-900 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-blue-900">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-blue-900 p-2 rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="text-sm text-blue-900">Users</label>
              <input
                type="text"
                placeholder="Enter number of users"
                className="w-full border border-blue-900 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-blue-900">Country</label>
              <select className="w-full border border-blue-900 p-2 rounded-md">
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Australia</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-blue-900">Phone Number</label>
              <input
                type="text"
                placeholder="+91"
                className="w-full border border-blue-900 p-2 rounded-md"
              />
            </div>
          </div>

          <button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-6 rounded-full hover:opacity-90 transition">
            Get a demo
          </button>
        </div>
      </div>

      {/* Right Section - Rotating Orbit */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative h-[500px] mt-10 md:mt-0">
        {/* Center Circle */}
        <div className="absolute w-32 h-32 rounded-full bg-white shadow-md flex flex-col items-center justify-center z-10 border border-gray-300 text-center">
          <span className="text-xs text-gray-500">Integrated Wellness Platform</span>
          <div className="text-4xl font-black text-black">
            A<span className="text-sky-500 text-xl font-semibold">ai</span>
          </div>
        </div>

        {/* Orbiting Cards */}
        <div className="orbit-container absolute w-[350px] h-[350px]">
          {[
            { text: "Wellness Packages", bg: "bg-purple-100", angle: 0 },
            { text: "Mental Wellness", bg: "bg-green-100", angle: 60 },
            { text: "Social Wellness", bg: "bg-orange-100", angle: 120 },
            { text: "Health Checkup", bg: "bg-blue-100", angle: 180 },
            { text: "Nutrition", bg: "bg-pink-100", angle: 240 },
            { text: "Sleep Care", bg: "bg-yellow-100", angle: 300 },
          ].map(({ text, bg, angle }, i) => (
            <div
              key={i}
              className={`absolute w-40 px-4 py-2 text-center font-semibold rounded-xl shadow ${bg}`}
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${angle}deg) translate(175px) rotate(-${angle}deg)`,
                transformOrigin: "center",
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Spin Animation */}
      
      
      
    </div>
  );
}
