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
    image: "/corporate/img20.jpeg",
  },
  {
    image: "/corporate/img5.webp",
  },
  {
    image: "/corporate/img2.webp",
  },
  {
    image: "/corporate/img4.webp",
  },
];

const services = [
  "Conferences & Seminars",
  "Annual Day Celebrations",
  "Family Day Celebrations",
  "Product Launches",
  "Dealer Meets & Channel Partner Events",
  "Exhibitions & Trade Shows",
  "Award Nights & Gala Dinners",
  "Team Building Activities",
  "Corporate Offsites",
  "Employee Engagement Programs",
  "Brand Activations",
  "Hybrid & Virtual Events",
  "Artist & Celebrity Management",
  "Corporate Gifting Solutions",

  "Sound, Light & AV Solutions",
  "LED Walls & Visual Effects",
  "Stage Production",
  "Special Effects & Fireworks",
  "Photography & Videography",
  "Live Streaming Services",

  "Venue Selection Assistance",
  "Vendor Management",
  "Permissions & Licensing",
  "Security & Crowd Management",
  "On-Ground Coordination",
  "End-to-End Event Execution",
];

export default function CorporateEvents() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[var(--bg)]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/corporate.png')",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12">
          <div className="max-w-[700px]">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              Corporate Events
            </p>

            <h1 className="font-serif  text-[38px] md:text-[50px] lg:text-[60px] leading-[1.1] text-[var(--text)] font-light">
              Events That{" "}
              <span className="italic text-[var(--primary)]">Inspire.</span>
              <br />
              Connections That{" "}
              <span className="italic text-[var(--primary)]">Last.</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-[var(--text-light)] max-w-[550px]">
              Delivering professionally curated corporate experiences that
              inspire engagement, strengthen brand presence, and create
              meaningful business connections.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Explore Corporate Experiences
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="mb-12">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-3">
              Corporate Services
            </p>

            <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] text-[var(--text)]">
              Events Designed
              <br />
              For Business Growth.
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Image */}
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/corporate/img19.jpeg"
                alt="Corporate event"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Services */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {services.map((service, i) => (
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
              Recent Corporate Events
            </p>

            <h2 className="mt-4 font-serif text-[42px] text-[var(--text)]">
              Moments That Made Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((item, i) => (
              <div key={i}>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt="Bigwig event"
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
