"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import CTA from "@/components/home/CTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePopup from "@/components/layout/Popup";
import { FaPlay } from "react-icons/fa";
interface Testimonial {
  _id: string;
  name: string;
  message: string;
  designation?: string;
  image?: string;
  rating?: number;
}

export default function TestimonialsPage() {
  const [open, setOpen] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/testimonial`,
        );

        const data = await res.json();

        if (res.ok) {
          setTestimonials(data || []);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleVideoToggle = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image2.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[rgba(253,251,247,0.92)] to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12">
          <div className="max-w-[650px]">
            <p className="text-[var(--primary)] uppercase tracking-[5px] text-xs md:text-sm mb-5">
              Testimonials
            </p>

            <h1 className="font-serif text-[42px] md:text-[72px] leading-[1.1] text-[var(--text)]">
              Experiences
              <br />
              That <span className="italic text-[var(--primary)]">Inspire</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-[var(--text-light)] max-w-[520px]">
              Words from our amazing clients who trusted us to create
              unforgettable celebrations and timeless memories.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-6">
          {[
            ["500+", "Happy Clients"],
            ["4.9/5", "Average Rating"],
            ["50+", "Cities Covered"],
            ["10+", "Years Experience"],
          ].map((item, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl font-serif text-[var(--text)]">
                {item[0]}
              </h3>

              <p className="text-sm mt-2 text-[var(--text-light)]">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL SLIDER */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-4">
              Client Testimonials
            </p>

            <h2 className="font-serif text-5xl text-[var(--text)]">
              Loved by Our Clients
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="bg-[var(--card-bg)] border border-[var(--border)] p-8 min-h-[300px] shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Quote */}
                  <div className="text-5xl text-[var(--primary)] mb-2">“</div>

                  {/* Message */}
                  <div className="h-[100px] overflow-y-auto pr-2 mb-4 custom-scrollbar">
                    <p className="leading-6 text-[var(--text-light)]">
                      {item.message}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="mb-3 text-[var(--primary)]">
                    {"★".repeat(item.rating || 5)}
                  </div>

                  {/* User */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    {item.image ? (
                      <div className="relative h-14 w-14 rounded-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-14 w-14 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-semibold text-lg uppercase">
                        {item.name?.charAt(0)}
                      </div>
                    )}

                    {/* User Info */}
                    <div>
                      <h4 className="font-semibold text-[var(--text)]">
                        {item.name}
                      </h4>

                      {item.designation && (
                        <p className="text-sm text-[var(--primary)]">
                          {item.designation}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className=" bg-[var(--white)]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="relative h-[420px] overflow-hidden border border-[var(--border)] shadow-lg group">
            <video
              ref={videoRef}
              className="h-full w-full object-cover cursor-pointer"
              playsInline
              loop
              muted
              onClick={handleVideoToggle}
            >
              <source src="/abc.mp4" type="video/mp4" />
            </video>

            {/* Play Button */}
            {!isPlaying && (
              <button
                onClick={handleVideoToggle}
                className="absolute inset-0 flex items-center justify-center bg-black/20"
              >
                <div className="h-20 w-20 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300">
                  <FaPlay className="ml-1 text-xl" />
                </div>
              </button>
            )}
          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-4">
              Real Stories
            </p>

            <h2 className="font-serif text-5xl text-[var(--text)] mb-6">
              Hear From Our Clients
            </h2>

            <p className="text-[var(--text-light)] leading-8 mb-8">
              Watch our clients share their journey and discover how we
              transformed their vision into unforgettable memories.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="h-12 px-8 bg-[var(--primary)] text-white uppercase tracking-wider text-sm hover:bg-[var(--primary-dark)] transition-all"
            >
              Let's Plan
            </button>
          </div>
        </div>
      </section>

      {/* RATING */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border)] py-16">
        <div className="text-center px-6">
          <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-4">
            Our Clients Rate Us
          </p>

          <h2 className="font-serif text-4xl text-[var(--text)] mb-3">
            Excellent ★★★★★ 4.9/5
          </h2>

          <p className="text-[var(--text-light)]">
            Based on 250+ verified reviews
          </p>
        </div>
      </section>

      <CTA />

      <Footer />

      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
