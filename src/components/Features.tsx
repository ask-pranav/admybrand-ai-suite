"use client";

import { BrainCircuit, LineChart, Sparkles } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "AI-Powered Automation",
    description:
      "Streamline your marketing workflow with intelligent automation tools tailored to your business.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "Real-time Analytics",
    description:
      "Monitor and analyze campaign performance instantly with beautiful, actionable dashboards.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "Smart Recommendations",
    description:
      "Leverage data-driven suggestions to optimize your marketing strategies across channels.",
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Smarter Tools for Smarter Marketing
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

