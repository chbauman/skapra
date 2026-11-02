import Link from "next/link";
import {
  AgendaProvider,
  Cover,
  Footer,
  FutureEvents,
  PastEvents,
  SectionHeading,
  VideoEmbed,
  fetchAgenda,
  stripMarkdownLinks,
  toISODate,
} from "@emeki/band-site-kit";
import { BandPhoto } from "./band-photo";
import { SHEET_ID, coverProps, footerProps } from "./site-config";

export default async function Home() {
  // There is no 'use client' directive, so this is called only
  // once at build time!
  const agenda = await fetchAgenda(SHEET_ID);

  const eventsJsonLd = agenda.future.map((event) => ({
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: stripMarkdownLinks(event.Was),
    startDate: toISODate(event.Wann),
    location: {
      "@type": "Place",
      name: stripMarkdownLinks(event.Wo),
    },
    performer: {
      "@type": "MusicGroup",
      name: "Skapra Zombie",
    },
  }));

  return (
    <div className="min-h-screen flex flex-col">
      {eventsJsonLd.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
        />
      )}
      <Cover {...coverProps} />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <VideoEmbed youtubeId="n2q1eTwwIfc" time={260} />

          <SectionHeading title="Music" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            Skapra Zombie is a ska punk band from Zürich, Switzerland. We write
            our own songs, and these are the first few we have published. Listen
            to our album Love and Petty Crimes on{" "}
            <a
              href="https://skaprazombie.bandcamp.com"
              className="text-brand hover:text-brand-dark font-medium hover:underline"
            >
              Bandcamp
            </a>
            :
          </p>
          <div className="max-w-3xl mx-auto px-4 py-2 text-center">
            <iframe
              title="Love and Petty Crimes by Skapra Zombie"
              style={{
                border: 0,
                width: "100%",
                height: "120px",
                padding: 0,
                margin: 0,
              }}
              src="https://bandcamp.com/EmbeddedPlayer/album=788399799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://skaprazombie.bandcamp.com/album/love-and-petty-crimes">
                Love and Petty Crimes by Skapra Zombie
              </a>
            </iframe>
          </div>

          <AgendaProvider sheetId={SHEET_ID} initialData={agenda}>
            <SectionHeading title="Gigs" />
            <FutureEvents
              surfaceClassName="bg-surface"
              stripeClassName="odd:bg-surface-alt"
            />
            <SectionHeading title="Band Members" />
            <section className="max-w-3xl mx-auto px-4 py-2 text-center">
              <BandPhoto />
              <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
                <Link
                  href="/about"
                  className="text-brand hover:text-brand-dark font-medium hover:underline"
                >
                  More about the band
                </Link>
              </p>
            </section>
            <SectionHeading title="Past Gigs" />
            <PastEvents
              surfaceClassName="bg-surface"
              stripeClassName="odd:bg-surface-alt"
            />
          </AgendaProvider>

          <SectionHeading title="Contact" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            Follow us on{" "}
            <a
              href="https://www.instagram.com/skaprazombie/"
              aria-label="Instagram"
              className="text-brand hover:text-brand-dark font-medium hover:underline"
            >
              Instagram @skaprazombie
            </a>
            {""} or contact us via{" "}
            <a
              href="mailto:skaprazombie@gmail.com"
              aria-label="Email"
              className="text-brand hover:text-brand-dark font-medium hover:underline"
            >
              skaprazombie@gmail.com
            </a>
            {""}.
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            Want to book us for your event? See our{" "}
            <Link
              href="/booking"
              className="text-brand hover:text-brand-dark font-medium hover:underline"
            >
              booking page
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer {...footerProps} />
    </div>
  );
}
