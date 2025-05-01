'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/Image/budgetree_logo.svg';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Footer() {
  const footerRef = useRef(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate again when footer enters view
          setKey(prev => prev + 1);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      key={key}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="bg-[#D0E1FF] text-blue-900 px-6 md:px-20 py-12 text-sm"
    >
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-10">
        <motion.div variants={fadeUp}>
          <h3 className="font-semibold mb-3">Contact</h3>
          <h4>For quaries:</h4>
          <p>support@budgetree.in</p>
          <br />
          <h4>For Sales:</h4>
          <p>sales@budgetree.in</p>
          <br />
          <h4>For Finance</h4>
          <p>account@budgetree.in</p>
          <br />
          <p>+91 8630000676</p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="font-semibold mb-3">Quick links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="font-semibold mb-3">About us</h3>
          <ul className="space-y-1">
            <li >Our Buyers</li>
            <li>Our Story</li>
            <li>Our Team</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="font-semibold mb-3">Policy</h3>
          <ul className="space-y-1">
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:underline">Terms of use</Link></li>
            <li><a href="#" className="hover:underline">Disclaimer</a></li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="font-semibold mb-3">Socials</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
          </ul>
        </motion.div>
      </div>

      {/* Social Icons */}
      <motion.div variants={fadeUp} className="mb-10">
        <h4 className="font-semibold mb-2">Follow us on:</h4>
        <div className="flex space-x-4 text-blue-800 text-lg">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </motion.div>

      <hr className="border-blue-300 mb-6" />

      {/* Bottom Section */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
      >
        <div className="flex flex-col items-center md:items-start max-w-md">
          <Image src={logo} alt="Budgetree Logo" width={120} height={60} className="mb-3" />
          <p>
            In the fast-paced world of modern marketing, efficiency is key.
            That’s where marketing automation steps in, by harnessing the power of technology.
          </p>
        </div>
        <div className="space-x-4 underline font-medium">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-6 text-center text-xs text-gray-700"
      >
        © {new Date().getFullYear()} Budgetree Technology Pvt. Ltd. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
