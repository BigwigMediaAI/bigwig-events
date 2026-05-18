"use client";
import Image from "next/image";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import ServicePopup from "@/components/layout/Popup";
import { useState } from "react";
import FloatingContact from "@/components/Floating";

const projects = [
  {
    image: "/training.png",
  },
  {
    image: "/training.png",
  },
  {
    image: "/training.png",
  },
  {
    image: "/training.png",
  },
];

export default function Wedding() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[var(--bg)]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/wedding.png')",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12">
          <div className="max-w-[700px]">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              Weddings & Social Celebrations
            </p>

            <h1 className="font-serif text-[38px] md:text-[50px] lg:text-[60px] leading-[1.1] text-[var(--text)] font-light">
              Beautiful Celebrations.
              <br />
              <span className="italic text-[var(--primary)]">
                Timeless Memories.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-[var(--text-light)] max-w-[550px]">
              Designing unforgettable celebrations filled with elegance,
              emotions, and personalized experiences for every special occasion.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Create Timeless Celebrations
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px]  overflow-hidden">
            <Image
              src="/about.png"
              alt="Corporate event"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              About Our Celebrations
            </p>

            <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] text-[var(--text)]">
              Weddings, Parties &
              <br />
              Moments That Matter.
            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-10">
              {[
                "Destination Weddings",
                "Wedding Planning & Coordination",
                "Luxury Decor & Styling",
                "Venue Selection & Hospitality",
                "Artist & Entertainment Management",
                "Birthday Celebrations",
                "Anniversary Parties",
                "Baby Showers & Private Gatherings",
                "Theme-Based Celebrations",
                "Guest Management Services",
                "Food & Beverage Coordination",
                "Entertainment & Live Performances",
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
              Celebrations We've Crafted
            </p>

            <h2 className="mt-4 font-serif text-[42px] text-[var(--text)]">
              Real Moments. Timeless Memories.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((item, i) => (
              <div key={i}>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt="Wedding and social events"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <FloatingContact />
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
