'use client'
import Image from 'next/image';
import logo from '@/Image/budgetree_logo.svg'

export default function Footer() {
  return (
    <footer className="bg-[#D0E1FF] text-blue-900 px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo/Brand */}
        <div>
        <Image 
            src={logo} 
            alt="Brand Logo" 
            width={120} 
            height={60} 
            className="mb-4"
          />
          <p className="text-md">
            In the fast-paced world of modern <br /> marketing, efficiency is key. That's <br /> where marketing  automation steps <br /> in, by harnessing the power of <br /> technology.
          </p>
        </div>
          {/* Contact Info */}

        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p>Email: support@budgetree.in</p>
          <p>Phone: (+91) 860000676</p>
          <p>Location: India</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* About Us */}

        <div>
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p>Our Buyers</p>
          <p>Our Story</p>
          <p>Our Team</p>
        </div>

        {/* Policy */}

        <div>
          <h3 className="text-xl font-semibold mb-3">Policy</h3>
          <p>Privcy Policy</p>
          <p>Terms of use</p>
          <p>Disclaimer</p>
        </div>

        {/* Socials */}

        <div>
          <h3 className="text-xl font-semibold mb-3">Socials</h3>
          <p>Facebook</p>
          <p>Instragram</p>
          <p>Linkedin</p>
        </div>

      
        
      </div>

      {/* Bottom Line */}
      <div className="border-t border-blue-300 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
