"use client";

import { useEffect, useState } from "react";
import Button2 from "../ui/Button2";

const images = [
  "/weding.png",
  "/events.png",
  "/travel.png",
  "/festi.png",
  "/acti.png",
  "/training.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p className="tracking-widest text-sm mb-4 text-yellow-400">
          BIGWIG EVENTS • INDIA
        </p>

        <h1 className="text-5xl md:text-7xl font-serif font-light">
          Creating <span className="italic text-yellow-400">Unforgettable</span>{" "}
          Moments
        </h1>

        <p className="mt-6 max-w-2xl text-gray-300">
          Corporate events, travel, weddings & luxury celebrations crafted with
          perfection.
        </p>

        <Button2 text="Explore Events" className="mt-8" />
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ⌄
      </div>
    </section>
  );
}
