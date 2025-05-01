'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const faqs = [
  { question: "What does Budgetree do?", answer: "Budgetree helps businesses automate and optimize their marketing operations using cutting-edge tools and AI-driven insights." },
  { question: "Who is Budgetree for?", answer: "It is for marketers, small businesses, agencies, and freelancers who want to simplify and scale their marketing efforts." },
  { question: "How does Budgetree work?", answer: "You sign up, connect your marketing channels, and set workflows that Budgetree automates for you." },
  { question: "Is it paid?", answer: "Yes, Budgetree offers both free trials and premium plans with extended features." },
  { question: "How does my client pay?", answer: "Clients can pay through integrated payment options provided within the platform securely." },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-20 py-12 max-w-4xl mx-auto">
      <p className="text-center text-sm text-gray-500 mb-2">FAQs</p>
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#EDF3FF] rounded-lg overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-4 py-4 text-left font-medium text-gray-800"
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <div
              className={`px-4 pb-4 transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
