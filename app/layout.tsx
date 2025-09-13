import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paulus Palace",
  description: "This is where Max shows off all the stuff in his mind palace.",
  keywords: ["Max Paulus", "software developer", "portfolio", "blog"],
  authors: [{ name: "Max Paulus" }],
  openGraph: {
    title: "Paulus Palace",
    description: "This is where Max shows off all the stuff in his mind palace.",
    url: "https://maxpaul.us",
    siteName: "Paulus Palace",
    type: "website",
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
