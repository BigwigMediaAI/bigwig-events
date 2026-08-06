"use client";
import Image from "next/image";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import ServicePopup from "@/components/layout/Popup";
import { useState } from "react";
import FloatingContact from "@/components/Floating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const projects = [
  {
    image: "/social/img9.jpeg",
  },
  {
    image: "/social/img5.webp",
  },
  {
    image: "/social/img7.jpeg",
  },
  {
    image: "/social/img6.webp",
  },
  {
    image: "/social/img10.jpeg",
  },
  {
    image: "/social/img11.jpeg",
  },
];

export default function SocialCelebrations() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[var(--bg)]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/socialpage.png')",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12">
          <div className="max-w-[700px]">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              Social Celebrations
            </p>

            <h1 className="font-serif text-[38px] md:text-[52px] lg:text-[62px] leading-[1.1] text-[var(--text)] font-light">
              Celebrate With{" "}
              <span className="italic text-[var(--primary)]">Style.</span>
              <br />
              Create Memories{" "}
              <span className="italic text-[var(--primary)]">Forever.</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-[var(--text-light)] max-w-[550px]">
              From birthdays to anniversaries and intimate gatherings, we bring
              your special moments to life with creativity, elegance and care.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Let’s Plan
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="mb-12">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-3">
              Social Event Services
            </p>

            <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] text-[var(--text)]">
              Events Designed
              <br />
              For Memorable Celebrations.
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Image */}
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/social/img8.jpeg"
                alt="Social event"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Services */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Birthday Parties",
                "Kids’ Theme Parties",
                "Milestone Celebrations",
                "Baby Showers",
                "Naming Ceremonies",
                "Graduation Parties",
                "Housewarming Events",
                "Family Get-Togethers",
                "Reunion Parties",
                "High Tea Gatherings",
                "Brunch Events",
                "Poolside Parties",
                "Yacht Parties",
                "Sundowner Experiences",
                "Private Dining Experiences",
                "VIP Guest Experiences",
                "Curated Luxury Celebrations",
              ].map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">✦</span>

                  <p className="text-[15px] text-[var(--text)] leading-6">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)]">
              Recent Socail Events
            </p>

            <h2 className="mt-4 font-serif text-[42px] text-[var(--text)]">
              Moments That Made Impact
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="corporate-gallery"
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[260px] rounded-xl overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={`Corporate Event ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <CTA />
      <Footer />
      <FloatingContact />
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
// asd
