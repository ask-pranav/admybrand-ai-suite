import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ADmyBRAND AI Suite - Smart Marketing Powered by AI",
  description:
    "ADmyBRAND AI Suite is your all-in-one AI-powered marketing platform. Generate campaigns, automate workflows, and gain actionable insights effortlessly.",
  keywords: [
    "AI Marketing",
    "ADmyBRAND",
    "Campaign Automation",
    "SaaS",
    "Marketing Intelligence",
    "AI Suite",
    "Digital Marketing",
  ],
  openGraph: {
    title: "ADmyBRAND AI Suite - Smart Marketing Powered by AI",
    description:
      "All-in-one AI-powered marketing platform to launch campaigns, automate tasks, and grow faster.",
    url: "https://admybrand-ai-suite.vercel.app",
    siteName: "ADmyBRAND AI Suite",
    images: [
      {
        url: "https://admybrand-ai-suite.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "ADmyBRAND AI Suite - Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Smart Marketing Powered by AI",
    description:
      "All-in-one AI-powered marketing platform to launch campaigns, automate tasks, and grow faster.",
    images: ["https://admybrand-ai-suite.vercel.app/og-cover.jpg"],
    creator: "@ADmyBRAND",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
