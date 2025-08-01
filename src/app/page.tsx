"use client";

import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import TrustedBy from "@/components/TrustedBy";
import PricingCard from "@/components/PricingCard";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* Hero Section */}
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-gray-800 to-gray-100 w-full">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              AI Features That Power Your Marketing
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <ScrollReveal>
                <FeatureCard
                  title="AI Campaign Generator"
                  description="Generate full marketing campaigns in seconds with AI."
                  icon="🤖"
                />
              </ScrollReveal>
              <ScrollReveal>
                <FeatureCard
                  title="Performance Analytics"
                  description="Get deep insights into campaign performance with predictive data."
                  icon="📈"
                />
              </ScrollReveal>
              <ScrollReveal>
                <FeatureCard
                  title="Smart Email Sequences"
                  description="Automate personalized emails for better engagement."
                  icon="📬"
                />
              </ScrollReveal>
              <ScrollReveal>
                <FeatureCard
                  title="Ad Copy Generator"
                  description="Create high-converting ad copy instantly."
                  icon="📢"
                />
              </ScrollReveal>
              <ScrollReveal>
                <FeatureCard
                  title="Workflow Automation"
                  description="Automate repetitive marketing tasks with smart triggers."
                  icon="⚙️"
                />
              </ScrollReveal>
              <ScrollReveal>
                <FeatureCard
                  title="Audience Intelligence"
                  description="Segment and understand your audience like never before."
                  icon="👥"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-100 w-full">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              What Our Users Say
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <ScrollReveal>
                <TestimonialCard
                  name="Pranav Kumar"
                  role="Marketing Manager"
                  quote="ADmyBRAND AI Suite revolutionized our campaign strategy."
                  image="https://randomuser.me/api/portraits/men/32.jpg"
                />
              </ScrollReveal>
              <ScrollReveal>
                <TestimonialCard
                  name="Akshita Singh"
                  role="Founder, StartupBoost"
                  quote="A game-changer for automating marketing workflows."
                  image="https://randomuser.me/api/portraits/women/44.jpg"
                />
              </ScrollReveal>
              <ScrollReveal>
                <TestimonialCard
                  name="Anshuman Pandey"
                  role="Digital Strategist"
                  quote="The AI insights helped us double our engagement."
                  image="https://randomuser.me/api/portraits/men/65.jpg"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <ScrollReveal>
          <TrustedBy />
        </ScrollReveal>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 w-full bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Flexible Pricing</h2>
            <p className="text-gray-300 mb-12">
              Choose the plan that fits your business needs.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal>
                <PricingCard
                  title="Starter"
                  price="₹999/mo"
                  features={["Basic Campaigns", "Analytics", "Email Support"]}
                />
              </ScrollReveal>
              <ScrollReveal>
                <PricingCard
                  title="Pro"
                  price="₹2499/mo"
                  features={[
                    "AI Optimization",
                    "Advanced Reports",
                    "Priority Support",
                  ]}
                  highlight
                />
              </ScrollReveal>
              <ScrollReveal>
                <PricingCard
                  title="Enterprise"
                  price="Contact Us"
                  features={[
                    "Custom Solutions",
                    "Dedicated Manager",
                    "Unlimited Access",
                  ]}
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <ScrollReveal>
          <CallToAction />
        </ScrollReveal>

        {/* Footer Section */}
        <section id="contact" className="w-full">
          <Footer />
        </section>

      </main>
    </>
  );
}
