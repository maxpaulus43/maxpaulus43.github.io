import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Max Paulus — Software Developer",
    template: "%s | Max Paulus"
  },
  description: "Max Paulus is a software developer building useful systems for real people.",
  keywords: ["Max Paulus", "software developer", "portfolio", "blog", "programming", "web development", "React", "Next.js"],
  authors: [{ name: "Max Paulus", url: "https://maxpaul.us" }],
  creator: "Max Paulus",
  publisher: "Max Paulus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maxpaul.us",
    title: "Max Paulus — Software Developer",
    description: "Software, systems, projects, and notes from Max Paulus.",
    siteName: "Max Paulus",
    images: [
      {
        url: "https://maxpaul.us/max-profile-pic.webp",
        width: 900,
        height: 900,
        alt: "Max Paulus Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Paulus — Software Developer",
    description: "Software, systems, projects, and notes from Max Paulus.",
    images: ["https://maxpaul.us/max-profile-pic.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P3MGJS5GS7"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P3MGJS5GS7');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
