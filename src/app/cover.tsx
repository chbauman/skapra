"use client";

export default function Cover() {
  return (
    <section className="relative  w-full overflow-hidden bg-black">
      <div className="relative w-full">
        <div className="h-30 md:h-60 xl:h-110 mb-1 mx-auto"  />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

        <div className="absolute top-[50%] inset-x-0 z-10 px-4">
          <div className="max-w-6xl mx-auto text-center text-white -translate-y-1/2">
            <img
              src="/logo_quadratisch.jpg"
              alt="Logo"
              className="w-32 md:w-80 xl:w-120 mb-1 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
