const services = [
  {
    id: 1,
    title: "Product Photography",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestiae.",
    image: "src/components/Samandar2/img/IMAGE (5).png",
  },
  {
    id: 2,
    title: "Architecture Photography",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestiae.",
    image: "src/components/Samandar2/img/THE-KAKTUS-TOWERS-850px-400x600.webp",
  },
  {
    id: 3,
    title: "Drone Photography",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestiae.",
    image: "src/components/Samandar2/img/stock-photo-160988895.jpg",
  },
  {
    id: 4,
    title: "Wildlife Photography",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestiae.",
    image: "src/components/Samandar2/img/deer-18566813.webp",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#111] text-white py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-semibold text-center">
          What we do.
        </h2>

        <p className="text-center text-gray-400 mt-3 mb-12">
          The things that we are really good at
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="relative h-[420px] overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="absolute inset-0 bg-black/60"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-xl font-bold uppercase">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm mt-3">
                  {item.desc}
                </p>

                <button className="mt-6 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}