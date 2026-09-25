import type { Metadata } from "next";
import { Bangers, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

const title = "Skapra Zombie";
const description = "Skapra Zombie, Ska Punk from Zürich";
const baseUrl = "https://skaprazombie.ch";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  keywords: [
    "Skapra Zombie",
    "Ska Punk",
    "Zürich",
    "Ska",
    "Punk",
    "Band",
    "Concert",
    "Gig",
    "Live Music",
  ],
  authors: [{ name: "Skapra Zombie" }],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title,
    description,
    url: baseUrl,
    siteName: title,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo_quadratisch.jpg",
        width: 1080,
        height: 1080,
        alt: "Skapra Zombie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo_quadratisch.jpg"],
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Skapra Zombie",
  description:
    "Skapra Zombie is a Ska Punk band from Zürich, Switzerland.",
  url: baseUrl,
  email: "skaprazombie@gmail.com",
  genre: ["Ska", "Punk", "Ska Punk"],
  location: {
    "@type": "Place",
    name: "Zürich",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
  },
  sameAs: ["https://www.instagram.com/skaprazombie/"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bangers.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
