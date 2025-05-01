"use client";

export default function BlockSection() {
  const rewards = [
    {
      title: "NEFT/IMPS Payouts",
      description:
        "Fast, relible bank transfers--instant funding, 24/7 avilability, and secure transactions tailored for your business. ",
    },
    {
      title: "Direct UPI Payouts",
      description:
        "Enable instant, hassle-free payments via UPI ID or mobile--real-time processing and a cost-effective Solution.",
    },
    {
      title: "Bill Payments",
      description:
        "Built to handle rewards distribution, whether you have hundreds or millions of users.",
    },
    {
      title: "Bulk Payouts",
      description:
        "Manage all bussiness expenses in one place--pay bills, get reminders, and track effortlessly with automation.",
    },
    {
      title: "Payment Scheduling",
      description:
        "Save time with bulk payments--upload lists, automate, payouts, and reduce errors through a validated process. ",
    },
    {
      title: "Payment Dashboard",
      description:
        "Gain full control--monitor payouts, generate compliance reports, and navigate seamlessly with our intutive, user-friendly interface.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0D1F93] to-[#3A67F2] text-white py-20 px-4 p-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Seamless Payments. Extraordinary Offers.
        </h2>
        <p className="text-md md:text-lg text-white/80 mb-12 max-w-3xl mx-auto">
          Our Payout stack includes NEFT/IMPS and UPI payments. we also enable bill payments through Bhrat connect platform.
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
