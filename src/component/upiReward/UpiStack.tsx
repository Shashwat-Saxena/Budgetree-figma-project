"use client";

export default function UpiStack() {
  const rewards = [
    {
      title: "Instant gratification",
      description:
        "Send rewards directly to your customers' UPI accounts within seconds.",
    },
    {
        title: "Customizable Campigns",
        description:
          "Personalize rewards campaigns to align with your brand and target audience.",
      },
    {
      title: "Scalable Solutions ",
      description:
        "Built to handle rewards distribution, whether you have hundreds or millions of users. ",
    },
    {
      title: "Cost-Efficient",
      description:
        "Reduce the overhead of traditional rewards systems with our steamlined UPI solution.",
    },
    {
      title: "User-Friendly Intregation", 
      description:
        "Easy to integrate with your existing platforms via our secure API or dashboard.",
    },
    {
      title: "Highly Secure ",
      description:
        "Bank-grade security ensures every transaction is safe and reliable.",
    },
  
  ];

  return (
    <section className="bg-gradient-to-br from-[#0D1F93] to-[#3A67F2] text-white py-20 px-4 p-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold font-poppins mb-4">
          The Smart Choice: Budgetree UPI Stack
        </h2>
        <p className="text-md md:text-lg text-white/80 mb-12 max-w-3xl mx-auto font-poppins">
          UPI Rewards stack empowers you to deliver cash rewards directly to their <br /> users through UPI
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
