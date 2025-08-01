"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          ADmyBRAND
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#features" className="hover:text-blue-500 dark:hover:text-blue-300">
            Features
          </Link>
          <Link href="#testimonials" className="hover:text-blue-500 dark:hover:text-blue-300">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-blue-500 dark:hover:text-blue-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="#features" className="block py-2" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link href="#testimonials" className="block py-2" onClick={() => setIsOpen(false)}>
            Testimonials
          </Link>
          <Link href="#contact" className="block py-2" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}


