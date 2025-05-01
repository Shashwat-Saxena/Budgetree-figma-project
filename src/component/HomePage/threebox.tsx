"use client";

export default function ThreeSection() {
  const rewards = [
    {
      title: "Get Onboarded",
      description:
        "Get onboarded with minimal documentation and easy KYC. ",
    },
    {
      title: "Create Campaign",
      description:
        "Define reward type and target user in campaign.",
    },
    {
      title: "Analyze and Optimize",
      description:
        "Gain insights into reward performance and optimize for better engagement.",
    },
    
  ];

  return (
    <section className="bg-gradient-to-br bg-blue-900 border border-blue-950 text-white py-20 px-4 p-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold font-poppins mb-4  text-[#DCE9FF]">
          Effortless rewards management in 3 steps
        </h2>
        <p className="text-md md:text-lg   text-[#DCE9FF] font-poppins mb-12 max-w-3xl mx-auto">
          Follow these simple steps to optimize, organize, and send rewards with easy.
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward, i) => (
            <div
              key={i}
              className="bg-[#D0E1FF] text-[#2C2C2C] p-6 rounded-2xl shadow-lg flex flex-col items-start transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-xl font-bold text-[#1D3ACF] mb-2">
                {i + 1}
              </div>
              <h3 className="text-lg justify-content-start font-semibold font-poppins] mb-2">
                {reward.title}
              </h3>
              <p className="text-sm text-black text-left font-[Poppins]">
                {reward.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
