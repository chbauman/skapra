import type { Metadata } from "next";
import Link from "next/link";
import { Cover, Footer, SectionHeading } from "@emeki/band-site-kit";
import { BandPhoto } from "../band-photo";
import { coverProps, footerProps } from "../site-config";

const title = "About Skapra Zombie – Ska Punk Band from Zürich";
const description =
  "Skapra Zombie is a six-piece ska punk band from Zürich, Switzerland, founded in 2024. Offbeat, tempo and catchy melodies with a pinch of 2000s vibes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website" },
};

const facts = [
  { label: "Founded", value: "2024" },
  { label: "From", value: "Zürich, Switzerland" },
  { label: "Genre", value: "Ska Punk" },
  { label: "Line-up", value: "Six members" },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cover {...coverProps} />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <SectionHeading title="About" />
          <section className="max-w-3xl mx-auto px-4 py-2 text-center">
            <BandPhoto />
            <p
              lang="de"
              className="mb-6 text-gray-700 dark:text-gray-300 text-lg"
            >
              Rude girls and boys unite! Skapra Zombie liefern sechsköpfigen
              Ska-Punk aus Zürich. Offbeat, ordentlich Tempo und eingängige
              Melodien werden abgerundet mit einer Prise 2000er-Vibes.
              Tanzbarkeit garantiert, Pogo erwünscht!
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-left max-w-sm mx-auto text-gray-700 dark:text-gray-300 text-lg">
              {facts.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt className="font-bold">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <p className="mt-8 mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            <Link
              href="/"
              className="text-brand underline hover:text-brand-dark"
            >
              Back to music &amp; gigs
            </Link>
          </p>
        </div>
      </main>
      <Footer {...footerProps} />
    </div>
  );
}
