import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  quote,
  image,
}) => {
  return (
    <div className="bg-gray-50 dark:bg-[#111114] rounded-2xl p-6 shadow hover:shadow-lg transition-all h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div className="text-left">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-left italic">
        “{quote}”
      </p>
    </div>
  );
};

export default TestimonialCard;
