'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can use any icon library

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 md:px-20 pt-4 bg-gradient-to-br from-white to-blue-50">
      <nav className="flex items-center justify-between p-4 shadow-md bg-blue-900 border border-blue-950 rounded-full relative">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white px-5 cursor-pointer">
          budgetree
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-white cursor-pointer">
          <li className="hover:text-blue-300">About us</li>
          <li className="hover:text-blue-300">Products</li>
          <li className="hover:text-blue-300">Solutions</li>
          <li className="hover:text-blue-300">API Docs</li>
          <li className="hover:text-blue-300">Contact</li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-transparent hover:bg-white hover:text-blue-900 transition-all text-white px-4 py-2 border border-white rounded-full text-sm cursor-pointer">
          Redeem Rewards
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-blue-900 text-white flex flex-col items-center gap-4 py-4 rounded-b-lg z-50">
            <li className="hover:text-blue-300 cursor-pointer">About us</li>
            <li className="hover:text-blue-300 cursor-pointer">Products</li>
            <li className="hover:text-blue-300 cursor-pointer">Solutions</li>
            <li className="hover:text-blue-300 cursor-pointer">API Docs</li>
            <li className="hover:text-blue-300 cursor-pointer">Contact</li>
            <button className="bg-white text-blue-900 px-4 py-2 rounded-full text-sm">
              Explore Rewards
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
