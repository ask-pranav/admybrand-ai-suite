"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            Power Your Marketing with{" "}
            <span className="text-blue-600 dark:text-blue-400">ADmyBRAND AI Suite</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Automate campaigns, gain insights, and grow your brand using intelligent tools built for modern marketers.
          </p>
          <Link
            href="#features"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Explore Features
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-full">
          <Image
            src="/logos/hero-dashboard.svg"
            alt="AI Marketing Dashboard"
            width={500}
            height={400}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}



