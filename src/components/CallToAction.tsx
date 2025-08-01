"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to grow your brand with AI?
          </h2>
          <p className="text-sm sm:text-base text-blue-100">
            Get started today and see the difference automation can make in your marketing.
          </p>
        </div>

        {/* Button */}
        <Link
          href="#"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition"
        >
          Start Free Trial
        </Link>
      </div>
    </section>
  );
}

