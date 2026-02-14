"use client";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Testimonial {
  _id: string;
  name: string;
  message: string;
  designation?: string;
  image?: string;
  rating?: number;
  isActive: boolean;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [overflowMap, setOverflowMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/testimonial`,
          { cache: "no-store" },
        );

        const data = await res.json();

        if (res.ok && Array.isArray(data)) {
          const activeTestimonials = data.filter(
            (t: Testimonial) => t.isActive,
          );
          setTestimonials(activeTestimonials);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="relative bg-[var(--bg)] py-16 text-white">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-center text-5xl md:text-6xl font-light mb-10 opacity-30">
            Client{" "}
            <span className="text-[var(--secondary)] italic font-serif">
              Experiences
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-black/60 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-lg animate-pulse"
              >
                {/* Quote line */}
                <div className="h-4 bg-white/10 rounded w-3/4 mb-4" />
                <div className="h-4 bg-white/10 rounded w-full mb-3" />
                <div className="h-4 bg-white/10 rounded w-5/6 mb-6" />

                {/* Divider */}
                <div className="w-10 h-[1px] bg-white/10 my-6" />

                {/* Avatar + text */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/10" />
                  <div className="flex-1">
                    <div className="h-4 bg-white/10 rounded w-1/2 mb-2" />
                    <div className="h-3 bg-white/10 rounded w-1/3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials.length) return null;

  return (
    <section className="relative bg-[var(--bg)] py-16 text-white">
      <div className="w-11/12 md:w-5/6 mx-auto">
        <h2 className="text-center text-5xl md:text-6xl font-light mb-10">
          Client{" "}
          <span className="text-[var(--secondary)] italic font-serif">
            Experiences
          </span>
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t._id} className="flex">
              <TestimonialCard
                testimonial={t}
                expanded={expanded === t._id}
                onToggle={() => setExpanded(expanded === t._id ? null : t._id)}
                setOverflowMap={setOverflowMap}
                overflowMap={overflowMap}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

function TestimonialCard({
  testimonial,
  expanded,
  onToggle,
  overflowMap,
  setOverflowMap,
}: {
  testimonial: Testimonial;
  expanded: boolean;
  onToggle: () => void;
  overflowMap: Record<string, boolean>;
  setOverflowMap: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      const isOverflowing = el.scrollHeight > el.clientHeight + 1;

      setOverflowMap((prev) => ({
        ...prev,
        [testimonial._id]: isOverflowing,
      }));
    }
  }, [testimonial.message, expanded]);

  return (
    <div className="group relative flex flex-col justify-between bg-black/60 backdrop-blur-lg border border-white/10 p-8 rounded-3xl transition duration-500 hover:border-[var(--secondary)] shadow-lg w-full min-h-[300px]">
      {/* Message */}
      <div>
        {/* Decorative Quote */}
        <div className="absolute -top-6 left-6 text-[120px] text-[var(--secondary)]/40 font-serif select-none">
          “
        </div>
        <p
          ref={textRef}
          className={`mt-10 text-gray-300 leading-relaxed italic text-base transition-all duration-300 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {testimonial.message}
        </p>

        {/* Show button ONLY if overflowing */}
        {overflowMap[testimonial._id] && (
          <button
            onClick={onToggle}
            className="mt-3 text-sm text-[var(--secondary)] font-medium hover:underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Bottom Section */}
      <div>
        <div className="w-10 h-[1px] bg-[var(--secondary)]/50 my-6" />

        <div className="flex items-center gap-4">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-11 h-11 rounded-full object-cover border border-white/10"
            />
          ) : (
            <div className="w-11 h-11 rounded-full bg-[var(--secondary)] flex items-center justify-center text-black font-semibold">
              {testimonial.name.charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <h4 className="text-lg font-semibold group-hover:text-[var(--secondary)] transition">
              {testimonial.name}
            </h4>
            {testimonial.designation && (
              <p className="text-sm text-gray-400 italic">
                {testimonial.designation}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
