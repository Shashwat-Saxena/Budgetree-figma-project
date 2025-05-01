'use client'
export default function RewardsRedemptionSection() {
  const cardData = [
    {
      title: 'Plug & Play',
      desc: 'An API-ready solution to experience rapid implementation of your rewards redemption platform',
      number: '1',
    },
    {
      title: 'White-labeled Solution',
      desc: 'Enhance your brand image with a white-labeled mobile responsive rewards redemption platform',
      number: '2',
    },
    {
      title: 'Customizable Catalog',
      desc: 'Customize your rewards offerings to align with your brand and your customers’ needs',
      number: '3',
    },
  ]

  const industries = ['Banking', 'Insurance', 'Telecom', 'Retail/Ecommerce']

  return (
    <section className="bg-gradient-to-br from-[#0D1F93] to-[#3A67F2] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-[#D0E1FF]">
          AI-powered rewards redemption options
        </h2>
        <p className="text-gray-200 max-w-2xl font-poppins mx-auto mb-14">
          Access 10M+ redemption options in 30+ categories—flights, hotels, miles, gift cards, and more.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 font-poppins">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#D0E1FF] text-[#0D1F93] rounded-xl shadow-md px-6 py-8 text-left hover:scale-[1.02] transition duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center text-lg font-bold border-2 border-[#0D1F93] rounded-full mb-4">
                {card.number}
              </div>
              <h3 className="text-lg font-semibold mb-2 font-poppins">{card.title}</h3>
              <p className="text-sm text-gray-700 font-poppins">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-sm text-[#D0E1FF] mb-8">
          AI rewards management, across several domains
        </p>

        {/* Industry Tags */}
        <div className="flex flex-wrap justify-center  gap-22">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="border border-white text-white px-6 py-2  rounded-full text-sm font-medium hover:bg-white hover:text-[#0D1F93] transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
