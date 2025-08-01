"use client";

import Image from "next/image";

const logos = [
  { name: "Google", src: "/logos/google.svg" },
  { name: "Microsoft", src: "/logos/microsoft.svg" },
  { name: "Amazon", src: "/logos/amazon.svg" },
  { name: "Netflix", src: "/logos/netflix.svg" },
  { name: "Meta", src: "/logos/meta.svg" },
];

export default function TrustedBy() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-gray-600 mb-6 uppercase tracking-wide">
          Trusted By Leading Brands
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo) => (
            <div key={logo.name} className="grayscale hover:grayscale-0 transition duration-300">
              <Image src={logo.src} alt={logo.name} width={120} height={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
