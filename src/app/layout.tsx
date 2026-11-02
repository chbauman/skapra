import type { Metadata } from "next";
import { Bangers, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./navbar";
import { NAV_ITEMS } from "./site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

const bandName = "Skapra Zombie";
const title = `${bandName} – Ska Punk Band from Zürich`;
const description =
  "Skapra Zombie is a ska punk band from Zürich, Switzerland. Listen to our album Love and Petty Crimes, check our upcoming gigs and get in touch.";
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
    siteName: bandName,
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      // Google Search wants favicons in multiples of 48px
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: bandName,
  description:
    "Skapra Zombie is a ska punk band from Zürich, Switzerland.",
  url: baseUrl,
  image: `${baseUrl}/logo_quadratisch.jpg`,
  foundingDate: "2024",
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
  album: {
    "@type": "MusicAlbum",
    name: "Love and Petty Crimes",
    url: "https://skaprazombie.bandcamp.com/album/love-and-petty-crimes",
    byArtist: { "@type": "MusicGroup", name: bandName },
  },
  sameAs: [
    "https://www.instagram.com/skaprazombie/",
    "https://skaprazombie.bandcamp.com",
  ],
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
        <Navbar siteName={bandName} items={NAV_ITEMS} />
        {children}
      </body>
    </html>
  );
}
