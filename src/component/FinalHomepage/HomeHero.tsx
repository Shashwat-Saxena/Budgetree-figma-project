"use client";

export default function FinalHome() {
  const orbitItems = [
    {
      text: "Rewards Marketplace",
      icon: "🎁",
      bg: "bg-[#F8EDEE]",
      top: "0%",
      left: "50%",
      translateX: "-50%",
      translateY: "0",
      border: "border-pink-200",
    },
    {
      text: "Customer loyalty",
      icon: "😊",
      bg: "bg-[#E9E9E6]",
      top: "40%",
      left: "0%",
      translateX: "0",
      translateY: "-50%",
      border: "border-gray-300",
    },
    {
      text: "Employee recognition",
      icon: "🎯",
      bg: "bg-[#FECBA9]",
      top: "40%",
      left: "100%",
      translateX: "-100%",
      translateY: "-50%",
      border: "border-orange-300",
    },
    {
      text: "Merchant Offers",
      icon: "👥",
      bg: "bg-[#FADBD8]",
      top: "100%",
      left: "30%",
      translateX: "-50%",
      translateY: "-100%",
      border: "border-red-200",
    },
    {
      text: "Sales and channel rewards",
      icon: "💰",
      bg: "bg-[#D1F2EB]",
      top: "100%",
      left: "70%",
      translateX: "-50%",
      translateY: "-100%",
      border: "border-green-200",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-between p-6 md:p-12 overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 z-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
          Your gateway to <br />
          <span className="text-blue-600">Payouts</span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg">
          Create unique and personalized reward <br />
          experiences with Budgetree’s intelligent <br />
          automation platform.
        </p>

        {/* Quick Connect Form */}
        <div className="mt-6 space-y-2">
          <h2 className="text-lg font-medium text-blue-900">For Quick Connect</h2>
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

      {/* Right Section - Orbit */}
      <div className="w-full h-[600px] flex items-center justify-center">
      <div className="relative w-[90vw] max-w-[600px] h-[550px]">
        {/* Center Circle with 'b' */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-gradient-to-b from-[#133FDB] to-[#1B4AF5] text-white text-4xl font-bold flex items-center justify-center shadow-lg z-10 transform -translate-x-1/2 -translate-y-1/2">
          b
        </div>

        {/* Orbit Items and Lines */}
        {orbitItems.map((item, index) => (
          <div key={index}>
            {/* Line from center to card */}
            <div
              className={`absolute border-dotted border-l-2 md:border-l-4 ${item.border}`}
              style={{
                top: "50%",
                left: "50%",
                width: "2px",
                height: "100px",
                transformOrigin: "top",
                transform: `rotate(${(index * 72) - 90}deg) translateY(0%)`,
              }}
            ></div>

            {/* Orbit Card */}
            <div
              className={`absolute px-4 py-2 rounded-xl shadow-md text-sm font-medium text-gray-800 flex items-center gap-2 ${item.bg}`}
              style={{
                top: item.top,
                left: item.left,
                transform: `translate(${item.translateX}, ${item.translateY})`,
              }}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
