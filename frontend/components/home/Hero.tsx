"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button2 from "../ui/Button2";
import ServicePopup from "../layout/Popup";
import Link from "next/link";

const slides = [
  {
    image: "/image1.png",
    tag: "Crafting Experiences",
    title: "That Stay\nWith You",
    desc: "From boardrooms to beachfronts, we design and deliver unforgettable events tailored to perfection.",
  },
  {
    image: "/image2.png",
    tag: "Corporate Excellence",
    title: "Events That\nBuild Brands",
    desc: "Premium conferences, product launches and business experiences designed to inspire impact.",
  },
  {
    image: "/image3.png",
    tag: "Luxury Celebrations",
    title: "Moments Worth\nRemembering",
    desc: "Destination weddings, social gatherings and iconic celebrations curated with elegance.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];

  return (
    <>
      <section
        className="relative h-screen w-full overflow-hidden bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-transparent" />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/80 backdrop-blur-md border border-[var(--border)] flex items-center justify-center hover:border-[var(--primary)] transition"
        >
          <ChevronLeft color="black" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/80 backdrop-blur-md border border-[var(--border)] flex items-center justify-center hover:border-[var(--primary)] transition"
        >
          <ChevronRight color="black" />
        </button>

        {/* Content */}
        <div className="relative z-10 h-full max-w-[1100px] mx-auto px-4 md:px-14 flex items-center">
          <div className="max-w-[540px] pt-16">
            <p className="text-[var(--primary)] uppercase tracking-[5px] text-xs md:text-sm mb-5">
              {currentSlide.tag}
            </p>

            <h1 className="font-serif text-[44px] md:text-[70px] leading-[1.05] text-[var(--text)] font-light whitespace-pre-line">
              {currentSlide.title}
            </h1>

            <p className="mt-6 text-[var(--text-light)] text-base md:text-lg leading-8">
              {currentSlide.desc}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => setOpen(true)}
                className=" px-6 h-11 items-center justify-center border border-[#b89b5e] text-[#b89b5e] text-sm uppercase tracking-wider hover:bg-[#b89b5e] hover:text-white transition"
              >
                Let's Plan
              </button>

              <Link href="/">
                <button className="h-11 px-6 border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition">
                  View Our Work
                </button>
              </Link>
            </div>

            {/* Indicators */}
            <div className="flex items-center mt-14">
              {slides.map((_, i) => (
                <div key={i} className="flex items-center">
                  <button
                    onClick={() => setIndex(i)}
                    className={`text-sm tracking-wider transition-all duration-300 ${
                      i === index
                        ? "text-[var(--text)] font-medium"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>

                  {/* Line */}
                  {i !== slides.length - 1 && (
                    <div
                      className={`w-10 md:w-14 h-[1px] mx-3 transition-all duration-300 ${
                        i === index
                          ? "bg-[var(--primary)]"
                          : "bg-[var(--border)]"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
