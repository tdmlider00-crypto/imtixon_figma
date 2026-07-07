export default function MuhammadazizK() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Tog%27_manzarasi.jpg?_=20240614122651"
        alt="Mount Fuji"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-end px-8 md:px-20">
        <div className="max-w-sm text-white">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest uppercase">
            Sunset At Mount Fuji
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Duis tristique sed lorem a vestibulum, commodo consequat orci,
            in convallis risus egestas non.
          </p>
        </div>
      </div>

      {/* Bottom Camera Info */}
      <div className="absolute bottom-8 right-8 md:right-20 z-10 flex items-center gap-4 text-white text-sm">
        <span>0°</span>

        <span className="w-2 h-2 rounded-full bg-white"></span>

        <span>f/16</span>

        <span className="border border-white px-2 py-1 rounded text-xs">
          ISO
        </span>

        <span>400</span>
      </div>
    </section>
  );
}