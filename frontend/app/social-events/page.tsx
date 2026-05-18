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
              Celebrations We've Crafted
            </p>

            <h2 className="mt-4 font-serif text-[42px] text-[var(--text)]">
              Moments Of Joy. Memories For A Lifetime.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((item, i) => (
              <div key={i}>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-5 font-serif text-xl text-[var(--text)]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[2px] text-[var(--primary)]">
                  {item.location}
                </p>
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
// asd
