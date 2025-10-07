import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cortiq - Transform Your Business with Intelligent Insights",
  description: "Unlock the power of data-driven decision making with our comprehensive analytics platform. Get real-time insights, predictive analytics, and actionable recommendations.",
  keywords: ["analytics", "data insights", "business intelligence", "predictive analytics", "data visualization"],
  authors: [{ name: "Cortiq Team" }],
  creator: "Cortiq",
  publisher: "Cortiq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cortiq.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cortiq - Transform Your Business with Intelligent Insights",
    description: "Unlock the power of data-driven decision making with our comprehensive analytics platform. Get real-time insights, predictive analytics, and actionable recommendations.",
    url: "https://cortiq.ai",
    siteName: "Cortiq",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cortiq - Analytics Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Cortiq - Transform Your Business with Intelligent Insights",
  //   description: "Unlock the power of data-driven decision making with our comprehensive analytics platform.",
  //   images: ["/og-image.jpg"],
  //   creator: "@Cortiq",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
