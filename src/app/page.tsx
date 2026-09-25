import Image from "next/image";
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

  const bandPhoto = (
    <Image
      src="/bandfoto_skaprazombie.jpg"
      alt="Skapra Zombie Bandmitglieder"
      width={1600}
      height={1336}
      className="mx-auto mb-6 rounded-xl shadow-lg w-108 md:w-148 h-auto"
    />
  );

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
            Listen to our music on BandCamp:
          </p>
          <div className="max-w-3xl mx-auto px-4 py-2 text-center">
            <iframe
              title="track"
              style={{
                border: 0,
                width: "100%",
                height: "120px",
                padding: 0,
                margin: 0,
              }}
              src="https://bandcamp.com/EmbeddedPlayer/size=large/album=2119557876/linkcol=0687f5/artwork=small/track=253287084/"
              seamless
            ></iframe>
          </div>

          <AgendaProvider sheetId={SHEET_ID} initialData={agenda}>
            <SectionHeading title="Gigs" />
            <FutureEvents />
            <SectionHeading title="Band Members" />
            <section className="max-w-3xl mx-auto px-4 py-2 text-center">
              {bandPhoto}
            </section>
            <SectionHeading title="Past Gigs" />
            <PastEvents />
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
        </div>
      </main>
      <Footer {...footerProps} />
    </div>
  );
}
