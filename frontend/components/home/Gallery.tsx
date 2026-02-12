"use client";

import Image from "next/image";

const images = [
  { src: "/weding.png", title: "Luxury Weddings" },
  { src: "/events.png", title: "Corporate Events" },
  { src: "/travel.png", title: "Executive Travel" },
  { src: "/festi.png", title: "Corporate Festivities" },
  { src: "/acti.png", title: "Brand Activations" },
];

export default function Gallery() {
  return (
    <section className="bg-gradient-to-b from-black via-[#0a0a0a] to-black py-32 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-light mb-24">
          Our <span className="text-yellow-400 italic">Showcase</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer ${
                i === 0 || i === 3 ? "md:col-span-2 h-[520px]" : ""
              }`}
            >
              {/* Image */}
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition duration-1000 group-hover:scale-110"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Gold glow border */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-yellow-400 rounded-3xl transition duration-500" />

              {/* Text */}
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-yellow-400 transition">
                  {img.title}
                </h3>
                <p className="text-gray-300 mt-2 text-sm">
                  Crafted with elegance & precision
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-yellow-400/5 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
