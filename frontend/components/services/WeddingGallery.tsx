"use client";

import Image from "next/image";

const images = [
  "/weding.png",
  "/events.png",
  "/travel.png",
  "/festi.png",
  "/acti.png",
];

export default function WeddingGallery() {
  return (
    <section className="py-36 px-6 max-w-7xl mx-auto">
      <h2 className="text-center text-5xl font-light mb-20 text-white">
        Wedding{" "}
        <span className="italic text-yellow-400 font-serif">Moments</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Hero image */}
        <div className="relative md:col-span-2 h-[540px] rounded-3xl overflow-hidden group">
          <Image
            src={images[0]}
            alt=""
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Side image */}
        <div className="relative h-[540px] rounded-3xl overflow-hidden group">
          <Image
            src={images[1]}
            alt=""
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Bottom row */}
        <div className="relative h-[380px] rounded-3xl overflow-hidden group">
          <Image
            src={images[2]}
            alt=""
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="relative md:col-span-2 h-[380px] rounded-3xl overflow-hidden group">
          <Image
            src={images[3]}
            alt=""
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* Optional extra image */}
        {/* <div className="relative h-[380px] rounded-3xl overflow-hidden group">
          <Image
            src={images[4]}
            alt=""
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
        </div> */}
      </div>
    </section>
  );
}
