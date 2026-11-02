import Image from "next/image";

export function BandPhoto() {
  return (
    <Image
      src="/bandfoto_skaprazombie.jpg"
      alt="Skapra Zombie Bandmitglieder"
      width={1600}
      height={1336}
      className="mx-auto mb-6 rounded-xl shadow-lg w-108 md:w-148 h-auto"
    />
  );
}
