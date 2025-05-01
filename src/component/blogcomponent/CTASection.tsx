// components/CTASection.jsx

import { FaPlus } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl px-6 md:px-12 py-12 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get <br /> started?
          </h2>
          <p className="mb-2 text-sm md:text-base">
            Join the 100.000+ talents using Budgetree. <br />
            Have doubts?{" "}
            <a href="#" className="underline font-medium">
              Read 300+ Budgetree reviews here.
            </a>
          </p>

          <button className="mt-6 border border-white px-5 py-2 rounded-full hover:bg-white hover:text-blue-800 transition">
            Schedule a Demo
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-6 text-sm md:text-base">
          <FeatureItem text="Get paid in 24 hours" />
          <FeatureItem text="Connect bank accounts or wallets" />
          <FeatureItem text="No client sign up required" />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <FaPlus className="text-white mt-1" />
      <p>{text}</p>
    </div>
  );
}
