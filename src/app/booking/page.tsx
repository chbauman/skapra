import type { Metadata } from "next";
import Link from "next/link";
import { Cover, Footer, SectionHeading } from "@emeki/band-site-kit";
import { coverProps, footerProps } from "../site-config";

const title = "Book Skapra Zombie – Ska Punk Band from Zürich";
const description =
  "Book Skapra Zombie for your event: ska nights and club shows, festivals, support slots and private parties such as weddings and birthdays. Six-piece ska punk from Zürich.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/booking" },
  openGraph: { title, description, url: "/booking", type: "website" },
};

const events = [
  {
    name: "Concerts and ska nights",
    text: "Club shows and shared bills, like our SKA nights with Huge Puppies, Zero Talent and others.",
  },
  {
    name: "Festivals",
    text: "Festival stages, like the Mattefestival in Horgen.",
  },
  {
    name: "Support slots",
    text: "Warming up the crowd for bigger acts, like for Los Fastidios at Dynamo Zürich.",
  },
  {
    name: "Themed nights",
    text: "Special evenings such as our Halloween gig.",
  },
  {
    name: "Private parties",
    text: "Weddings, birthdays and other celebrations.",
  },
];

const linkClass =
  "text-brand hover:text-brand-dark font-medium hover:underline";

export default function Booking() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cover {...coverProps} />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <SectionHeading title="Booking" />
          <section className="max-w-3xl mx-auto px-4 py-2 text-center">
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
              Want Skapra Zombie at your event? We are a six-piece ska punk
              band from Zürich: offbeat, fast and made for dancing.
            </p>
          </section>

          <SectionHeading title="Events we play" />
          <ul className="max-w-2xl mx-auto space-y-4 text-gray-700 dark:text-gray-300 text-lg">
            {events.map(({ name, text }) => (
              <li key={name}>
                <strong>{name}</strong>
                <br />
                {text}
              </li>
            ))}
          </ul>
          <p className="mt-6 mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            Have a look at our{" "}
            <Link href="/" className={linkClass}>
              past and upcoming gigs
            </Link>{" "}
            to get an idea.
          </p>

          <SectionHeading title="Get in touch" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            Write us the date, the place and what kind of event it is:{" "}
            <a
              href="mailto:skaprazombie@gmail.com?subject=Booking%20request"
              aria-label="Email"
              className={linkClass}
            >
              skaprazombie@gmail.com
            </a>
            . You can also reach us on{" "}
            <a
              href="https://www.instagram.com/skaprazombie/"
              aria-label="Instagram"
              className={linkClass}
            >
              Instagram @skaprazombie
            </a>
            .
          </p>
        </div>
      </main>
      <Footer {...footerProps} />
    </div>
  );
}
