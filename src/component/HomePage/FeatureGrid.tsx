'use client';

import { FaCogs, FaLanguage, FaUsersCog, FaCloud, FaHandshake, FaCube } from 'react-icons/fa';

const features = [
  {
    icon: <FaCogs className="text-2xl text-[#1D3ACF]" />,
    title: 'Points Configurations',
    description:
      'Configure conditions to earn points, such as fixed, percentage-based, stepwise, or round-up points',
  },
  {
    icon: <FaLanguage className="text-2xl text-[#1D3ACF]" />,
    title: 'Multilingual',
    description:
      'Support different currencies and languages for benefits such as points, cashback, game currencies, miles etc.',
  },
  {
    icon: <FaUsersCog className="text-2xl text-[#1D3ACF]" />,
    title: 'Multi-Tenancy',
    description:
      'Manage multiple loyalty programs under one account, each functioning independently with its own configurations',
  },
  {
    icon: <FaCloud className="text-2xl text-[#1D3ACF]" />,
    title: 'Flexible Deployment',
    description:
      'Stay in control of your program with on-premise or cloud deployment, ensuring top-tier security',
  },
  {
    icon: <FaHandshake className="text-2xl text-[#1D3ACF]" />,
    title: 'Omnichannel Loyalty',
    description:
      'Deploy loyalty programs across multiple touchpoints to gather rich, cross-channel insights for deeper engagement',
  },
  {
    icon: <FaCube className="text-2xl text-[#1D3ACF]" />,
    title: 'Delayed Accrual',
    description:
      'Issue points to customers for an activity at a later date. Block customers from using their points before the return period',
  },
];

export default function FeatureGridSection() {
  return (
    <section className="w-full bg-white py-20 px-4 text-center font-poppins">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 font-poppins">
          Effortless loyalty program scaling
        </h2>
        <p className="text-lg text-gray-600 mb-12 font-poppins">
          Leverage the full spectrum of features to build, and optimize loyalty programs at scale
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-poppins">
          {features.map((feature, i) => (
            <div
              key={i}
              className="border border-[#D6E0FF] p-6 rounded-xl text-left bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
