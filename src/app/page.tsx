"use client";

import Cover from "./cover";
import Footer from "./footer";
import { SectionHeading, VideoEmbed } from "./common";
import { useAgenda } from "./agenda";

export default function Home() {
  const [futureEvents, pastEvents] = useAgenda();

  const bandPhoto = (
    <img
      src="/bandfoto_skaprazombie.jpg"
      alt="Skapra Zombie Members"
      className="mx-auto mb-6 w-108 md:w-148"
    />
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Cover />
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
          <SectionHeading title="Gigs" />
          {futureEvents}
          <SectionHeading title="Band Members" />
          <section className="max-w-3xl mx-auto px-4 py-2 text-center">
            {bandPhoto}
          </section>
          <SectionHeading title="Past Gigs" />
          {pastEvents}
          <SectionHeading title="Contact" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            Follow us on{" "}
            <a
              href="https://www.instagram.com/skaprazombie/"
              aria-label="Email"
              className="text-blue-600 hover:underline"
            >
              Instagram @skaprazombie
            </a>
            {""} or contact us via{" "}
            <a
              href="mailto:skaprazombie@gmail.com"
              aria-label="Email"
              className="text-blue-600 hover:underline"
            >
              skaprazombie@gmail.com
            </a>
            {""}.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
