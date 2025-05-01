"use client";

export default function DistributeRewards() {
  const rewards = [
    {
      title: "Reward Points",
      description:
        "Get unique points via loyalty programs, Channel incentives, and Employee rewards—disbursed instantly via email or phone number.",
    },
    {
      title: "Reward Codes",
      description:
        "Offer unique reward codes for Corporate Gifting, Holiday Gifting, and employee recognition. Great for popular rewards.",
    },
    {
      title: "Reward Links",
      description:
        "Send unique reward links via email or SMS for Customer Promotions, Employee Recognition, or Influencer Rewards—easy integration with dashboards.",
    },
    {
      title: "Reward API",
      description:
        "Headless API for cashback, refills, and gaming—redeem from thousands of options: digital gift cards, experiences, merchandise, travel, dining, and more.",
    },
    {
      title: "Reward Marketplace",
      description:
        "Plug-and-play e-commerce reward marketplace—ideal for Gifting, Marketing, Influencer, and Employee Rewards. Instant redemption experience your way.",
    },
    {
      title: "Embedded E-commerce",
      description:
        "Headless API for Loyalty, Commerce, HR Integration, and more—global options within your app experience.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0D1F93] to-[#3A67F2] text-white py-20 px-4 p-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-poppins">
          Distribute rewards your way.
        </h2>
        <p className="text-md md:text-lg text-white/80 mb-12 max-w-3xl mx-auto font-poppins">
          Diverse, personalized loyalty benefits tailored for fresh, unique,
          impactful programs.
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward, i) => (
            <div
              key={i}
              className="bg-white text-[#2C2C2C] p-6 rounded-2xl shadow-lg flex flex-col items-start transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-xl font-bold text-[#1D3ACF] mb-2">
                {i + 1}
              </div>
              <h3 className="text-lg justify-content-start font-semibold mb-2">
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
