import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo or Brand */}
        <div className="flex items-center space-x-2">
          <Image src="/logos/meta.svg" alt="Logo" width={30} height={30} />
          <span className="text-xl font-semibold text-white">ADmyBRAND AI</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} ADmyBRAND. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
