// components/GetStarted.jsx

export default function GetStarted() {
    return (
      <div className="bg-gradient-to-br from-[#1c2e83] to-[#4c70d4] text-white py-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to get <br /> started?
            </h2>
            <p className="text-lg mb-2">
              Join the 100.000+ talents using Budgetree.
            </p>
            <p className="text-sm italic text-gray-200 mb-6">
              Have doubts? <a href="#" className="underline">Read 300+ Budgetree reviews here.</a>
            </p>
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-[#1c2e83] transition">
              Schedule a Demo
            </button>
          </div>
  
          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">✦</span>
              <p>Get paid in 24 hours</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✦</span>
              <p>Connect bank accounts or wallets</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✦</span>
              <p>No client sign up required</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  