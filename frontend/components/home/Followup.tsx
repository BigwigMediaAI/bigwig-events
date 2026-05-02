import Image from "next/image";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  "/about.png",
  "/acti.png",
  "/events.png",
  "/festi.png",
  "/training.png",
  "/weding.png",
];

export default function InstagramSection() {
  return (
    <section className="bg-[var(--white)] py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[4px] text-[var(--primary)] mb-2">
              Follow Our Journey
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text)]">
              @bigwig.events
            </h2>
          </div>

          {/* Button */}
          <button className="group border border-[var(--border)] h-12 px-6 flex items-center gap-3 hover:border-[var(--primary)] transition">
            <span className="uppercase text-xs tracking-[2px] text-[var(--text)]">
              View Instagram
            </span>

            <ArrowRight
              size={16}
              className="group-hover:text-[var(--primary)] transition"
            />
          </button>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden cursor-pointer group"
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
