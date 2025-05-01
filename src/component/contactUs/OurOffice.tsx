// components/OurOffices.jsx

import { FaBuilding, FaGlobe, FaCheckCircle } from "react-icons/fa";

export default function OurOffices() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Offices
        </h2>
        <p className="text-gray-600 max-w-xl">
          Discover our global network of offices, bringing Budgetree’s impact
          to every corner of the city.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#eaf1ff] p-6 rounded-xl border border-blue-300">
          <FaBuilding className="text-blue-600 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Robust Report</h3>
          <p className="text-gray-600 text-sm">
            Our support team ensures that your experience with Budgetree
            remains hassle-free
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#eaf1ff] p-6 rounded-xl border border-blue-300">
          <FaGlobe className="text-blue-600 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">
            Multi Currency Support
          </h3>
          <p className="text-gray-600 text-sm">
            Our support team ensures that your experience with Budgetree
            remains hassle-free
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#eaf1ff] p-6 rounded-xl border border-blue-300">
          <FaCheckCircle className="text-blue-600 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">
            AI Powered Customization
          </h3>
          <p className="text-gray-600 text-sm">
            Deliver targeted and personalized reward experiences to boost
            engagement and conversions
          </p>
        </div>
      </div>
    </section>
  );
}
