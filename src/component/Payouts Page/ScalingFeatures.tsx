'use client';
import { FaGlobe, FaHeart, FaCogs, FaUsers, FaLayerGroup } from 'react-icons/fa';
import { MdLanguage, MdOutlineAccessTime } from 'react-icons/md';
import { TbHexagonLetterO } from 'react-icons/tb';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';

const features = [
  {
    title: 'Points Configurations',
    description:
      'Configure conditions to earn points, such as fixed, percentage-based, stepwise, or round-up points',
    icon: <HiOutlineBuildingLibrary size={28} />,
  },
  {
    title: 'Multilingual',
    description:
      'Support different currencies and languages for benefits such as points, cashbacks, game currencies, miles etc.',
    icon: <MdLanguage size={28} />,
  },
  {
    title: 'Multi-Tenancy',
    description:
      'Manage multiple loyalty programs under one account, with each program functioning independently with its own configurations',
    icon: <FaLayerGroup size={26} />,
  },
  {
    title: 'Flexible Deployment',
    description:
      'Stay in control of your program with on-premise or cloud deployment, ensuring top-tier security for customers and transactions',
    icon: <FaHeart size={26} />,
  },
  {
    title: 'Omnichannel Loyalty',
    description:
      'Deploy loyalty programs across multiple touchpoints to gather rich, cross-channel insights for deeper customer engagement',
    icon: <TbHexagonLetterO size={26} />,
  },
  {
    title: 'Delayed Accrual',
    description:
      'Issue points to customers for an activity at a later date. Block customers from using their points before the return period',
    icon: <MdOutlineAccessTime size={26} />,
  },
];

export default function ScalingFeatures() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-poppins">
          Effortless loyalty program scaling
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto font-poppins">
          Leverage the full spectrum of features to build, and optimize loyalty programs at scale
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-poppins">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-blue-300 rounded-2xl p-6 text-left bg-blue-50 hover:shadow-lg transition"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2 font-poppins">{feature.title}</h3>
              <p className="text-gray-600 text-sm font-poppins">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
