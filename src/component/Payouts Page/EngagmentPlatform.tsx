'use client'
import { FaUser } from 'react-icons/fa'

export default function EngagementPlatform() {
  return (
    <section className="px-4 py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins">
          All-in-one Online Engagement Platform
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-poppins">
          Manage every touchpoint in the loyalty journey – from program configuration
          to member engagement and management – all from a single solution
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side Buttons */}
        <div className="space-y-4">
          {Array(5).fill(null).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#F5F8FF] hover:bg-[#e6edff] transition px-5 py-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#E1EBFF] rounded-full">
                  <FaUser className="text-[#3A67F2]" />
                </div>
                <p className="text-base font-medium text-gray-800 font-poppins">Loyalty Engine</p>
              </div>
              <p className="text-[#3A67F2] text-xl">→</p>
            </div>
          ))}
        </div>

        {/* Right Info Card */}
        <div className="bg-[#F5F8FF] p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 font-poppins">
            Unified loyalty experience across touchpoints
          </h3>
          <p className="text-gray-600 mb-6 font-poppins">
            Built for enterprise flexibility, the engine supports diverse loyalty programs
            with dynamic rules, point values, and tailored tiered incentives.
          </p>
          <ul className="space-y-4 text-left">
            <li className="flex items-start space-x-3 font-poppins">
              <span className="text-[#3A67F2] text-lg">✦</span>
              <span>Adapts to single-brand or coalition programs</span>
            </li>
            <li className="flex items-start space-x-3 font-poppins">
              <span className="text-[#3A67F2] text-lg">✦</span>
              <span>Flexible Earning Rules</span>
            </li>
            <li className="flex items-start space-x-3 font-poppins">
              <span className="text-[#3A67F2] text-lg">✦</span>
              <span>Real-Time Data Insights</span>
            </li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-blue-800 cursor-pointer text-white rounded-full font-medium font-poppins hover:bg-[#274ee1] transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  )
}
