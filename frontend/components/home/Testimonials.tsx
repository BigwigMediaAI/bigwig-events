"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Ananya & Rishabh",
    event: "Jaipur Wedding",
    quote:
      "Bigwig Events turned our vision into a dream come true. Every detail was perfect and the experience was beyond our expectations.",
    image: "/image1.png",
  },
  {
    name: "Rahul Mehta",
    event: "Corporate Summit",
    quote:
      "From planning to execution, the entire event felt effortless. Truly world-class management and creativity.",
    image: "/image2.png",
  },
  {
    name: "Priya Kapoor",
    event: "Destination Celebration",
    quote:
      "Every guest was amazed. The attention to detail and hospitality created memories for a lifetime.",
    image: "/about.png",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[active];

  return (
    <section className="w-full overflow-hidden border-y border-[var(--border)]">
      {/* MOBILE */}
      <div className="block md:hidden bg-[var(--bg-secondary)]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="px-5 py-10 text-center">
                <Quote
                  size={28}
                  className="text-[var(--primary)] mx-auto mb-4"
                />

                <p className="text-sm leading-7 text-[var(--text)]">
                  {item.quote}
                </p>

                <div className="mt-5">
                  <h4 className="uppercase tracking-[2px] text-xs font-semibold text-[var(--text)]">
                    {item.name}
                  </h4>

                  <p className="mt-1 uppercase tracking-[2px] text-[10px] text-[var(--text-light)]">
                    {item.event}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-2 h-[240px]">
        {/* LEFT */}
        <div className="bg-[var(--bg-secondary)] px-6 md:px-12 flex flex-col justify-center">
          <Quote size={30} className="text-[var(--primary)] mb-4" />

          <p className="text-sm md:text-base text-[var(--text)] leading-7 max-w-[500px]">
            {current.quote}
          </p>

          <div className="mt-5">
            <h4 className="uppercase tracking-[2px] text-xs font-semibold text-[var(--text)]">
              {current.name}
            </h4>

            <p className="mt-1 uppercase tracking-[2px] text-[10px] text-[var(--text-light)]">
              {current.event}
            </p>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2 h-2 rounded-full ${
                  active === index
                    ? "bg-[var(--primary)]"
                    : "bg-[var(--border)]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-full">
          <Image
            src={current.image}
            alt={current.name}
            fill
            className="object-cover"
          />

          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
          >
            <ChevronLeft className="text-[var(--primary)]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
          >
            <ChevronRight className="text-[var(--primary)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
