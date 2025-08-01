// src/components/TestimonialSection.tsx

'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    image: '/logos/user1.jpg',
    name: 'Pranav Kumar',
    role: 'Marketing Manager, FinTech Co.',
    quote:
      "ADmyBRAND AI Suite completely transformed our campaign strategy. The analytics dashboard alone is worth its weight in gold!",
  },
  {
    image: '/logos/user2.jpg',
    name: 'Akshita Singh',
    role: 'Product Designer, SaaS Startup',
    quote:
      "From automated reports to smart suggestions, this suite feels like having an extra team member!",
  },
  {
    image: '/logos/user3.jpg',
    name: 'Anshuman Pandey',
    role: 'Brand Strategist, Retail Giant',
    quote:
      "The ROI since using ADmyBRAND’s AI Suite has skyrocketed. Intuitive, powerful, and essential.",
  },
]

export function TestimonialSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  unoptimized
                  className="rounded-full object-cover border-4 border-slate-200 dark:border-slate-700"
                />
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <h3 className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              <div className="flex justify-center mt-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
