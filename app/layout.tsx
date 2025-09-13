import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Paulus Palace",
    template: "%s | Paulus Palace"
  },
  description: "This is where Max shows off all the stuff in his mind palace.",
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
    title: "Paulus Palace",
    description: "This is where Max shows off all the stuff in his mind palace.",
    siteName: "Paulus Palace",
    images: [
      {
        url: "https://maxpaul.us/max_profile.png",
        width: 500,
        height: 500,
        alt: "Max Paulus Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulus Palace",
    description: "This is where Max shows off all the stuff in his mind palace.",
    images: ["https://maxpaul.us/max_profile.png"],
  },
  verification: {
    google: "google-site-verification-code-here", // You can add your Google verification code later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
