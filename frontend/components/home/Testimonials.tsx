"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

interface Testimonial {
  _id: string;
  name: string;
  message: string;
  designation?: string;
  image?: string;
  isActive: boolean;
}

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  /* Fetch API */
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/testimonial`,
          {
            cache: "no-store",
          },
        );

        const data = await res.json();

        const activeTestimonials = data.filter(
          (item: Testimonial) => item.isActive,
        );

        setTestimonials(activeTestimonials);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="border-y border-[var(--border)]">
        <div className="hidden md:grid grid-cols-2 h-[240px] animate-pulse">
          {/* Left skeleton */}
          <div className="bg-[var(--bg-secondary)] px-12 flex flex-col justify-center">
            <div className="h-4 w-10 bg-gray-200 rounded mb-6" />
            <div className="h-4 w-[80%] bg-gray-200 rounded mb-3" />
            <div className="h-4 w-[70%] bg-gray-200 rounded mb-6" />
            <div className="h-3 w-32 bg-gray-200 rounded mb-2" />
            <div className="h-2 w-20 bg-gray-200 rounded" />
          </div>

          {/* Right skeleton */}
          <div className="bg-gray-200" />
        </div>

        {/* Mobile skeleton */}
        <div className="md:hidden p-6 bg-[var(--bg-secondary)] animate-pulse">
          <div className="h-4 w-10 bg-gray-200 rounded mx-auto mb-5" />
          <div className="h-4 w-full bg-gray-200 rounded mb-3" />
          <div className="h-4 w-[80%] mx-auto bg-gray-200 rounded mb-5" />
          <div className="h-3 w-28 mx-auto bg-gray-200 rounded" />
        </div>
      </section>
    );
  }

  if (!testimonials.length) return null;

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
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="px-5 py-10 text-center">
                <Quote
                  size={28}
                  className="text-[var(--primary)] mx-auto mb-4"
                />

                <p className="text-sm leading-7 text-[var(--text)]">
                  {item.message}
                </p>

                <div className="mt-5">
                  <h4 className="uppercase tracking-[2px] text-xs font-semibold text-[var(--text)]">
                    {item.name}
                  </h4>

                  {item.designation && (
                    <p className="mt-1 uppercase tracking-[2px] text-[10px] text-[var(--text-light)]">
                      {item.designation}
                    </p>
                  )}
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
            {current.message}
          </p>

          <div className="mt-5">
            <h4 className="uppercase tracking-[2px] text-xs font-semibold text-[var(--text)]">
              {current.name}
            </h4>

            {current.designation && (
              <p className="mt-1 uppercase tracking-[2px] text-[10px] text-[var(--text-light)]">
                {current.designation}
              </p>
            )}
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
            src={current.image || "/placeholder.jpg"}
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
