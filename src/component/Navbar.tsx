"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/Image/budgetree_logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);

  return (
    <div className="px-4 md:px-20 pt-4 bg-gradient-to-br from-white to-blue-50">
      <nav className="flex items-center justify-between p-4 shadow-md bg-blue-900 border border-blue-950 rounded-full relative">
        {/* Logo */}
        <Link href="/">
          <Image 
            src={Logo}
            alt="Budgetree Logo"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-white cursor-pointer relative">
          <Link href='/about' className="hover:text-blue-300">About Us</Link>

          {/* Products Dropdown */}
          <li
            className="relative"
            onClick={() => {
              setProductDropdown(!productDropdown);
              setBlogDropdown(false);
            }}
          >
            <div className="flex items-center gap-1 hover:text-blue-300">
              Products <ChevronDown size={16} />
            </div>

            {productDropdown && (
              <div className="absolute top-full mt-2 left-0 w-[28rem] bg-gradient-to-br from-blue-100 via-white to-blue-50 text-blue-900 rounded-xl shadow-2xl border border-blue-200 p-4 z-50 backdrop-blur-md transition-all duration-300 ease-in-out">
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/loyaltyX" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 transition">
                    💎 LoyaltyX
                  </Link>
                  <Link href="/upiRewards" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 transition">
                    💸 UPI Rewards
                  </Link>
                  <Link href="/payouts" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 transition">
                    🏦 Payouts
                  </Link>
                  <Link href="/rewardX" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 transition">
                    🎁 RewardX
                  </Link>
                </div>
              </div>
            )}
          </li>

          <Link href='/solutions' className="hover:text-blue-300">Solutions</Link>

          {/* API Docs Dropdown */}
          <li
            className="relative"
            onClick={() => {
              setBlogDropdown(!blogDropdown);
              setProductDropdown(false);
            }}
          >
            <div className="flex items-center gap-1 hover:text-blue-300">
              API Docs <ChevronDown size={16} />
            </div>

            {blogDropdown && (
              <div className="absolute top-full mt-2 left-0 w-80 bg-gradient-to-br from-blue-100 via-white to-blue-50 text-blue-900 rounded-xl shadow-2xl border border-blue-200 p-4 z-50 backdrop-blur-md transition-all duration-300 ease-in-out">
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/blog-page" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 transition">
                    📝 Blog
                  </Link>
                  <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 transition">
                    📚 API Docs
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link href="/contact-us" className="hover:text-blue-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="bg-transparent hover:bg-white hover:text-blue-900 transition-all text-white px-4 py-2 border border-white rounded-full text-sm cursor-pointer">
          Explore Rewards
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-blue-900 text-white flex flex-col items-center gap-4 py-6 rounded-b-lg z-50">
            <Link href='/about' className="hover:text-blue-300">About Us</Link>
            <Link href="/products" className="hover:text-blue-300">Products</Link>
            <Link href="/blogs" className="hover:text-blue-300">Blogs</Link>
            <Link href="/solutions" className="hover:text-blue-300">Solutions</Link>
            <Link href="/contact" className="hover:text-blue-300">Contact</Link>
            <button className="bg-white text-blue-900 px-4 py-2 rounded-full text-sm">
              Explore Rewards
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
