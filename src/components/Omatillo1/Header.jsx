export default function Header() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
      }}
    >
      {/* Qora overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Pastki qism */}
      <div className="relative z-10 h-full flex items-end justify-center pb-20">
        <div className="text-center text-white max-w-2xl px-4">
          <p className="uppercase tracking-[6px] text-xs text-gray-300">
            Photographer & Filmmaker
          </p>

          <h1 className="text-6xl font-light mt-2">
            Aperture Studios
          </h1>

          <p className="text-gray-300 mt-5 text-sm leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
            ut commodo diam libero vitae erat.
          </p>
        </div>
      </div>

      {/* Past o'ngdagi ma'lumotlar */}
      <div className="absolute bottom-8 right-10 text-white text-sm flex gap-6">
        <span>⏱ 1/2000s</span>
        <span>◉ f/11</span>
        <span>ISO 100</span>
        <span>📍 Iceland</span>
      </div>
    </section>
  );
}