"use client";

import { useState } from "react";

import ServicePopup from "@/components/layout/Popup";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Sparkles, Lightbulb, Handshake, Heart, Users } from "lucide-react";
import { CalendarDays, Star, MapPin, Gem } from "lucide-react";
import CTA from "@/components/home/CTA";

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    desc: "We deliver the highest standards in every detail.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    desc: "Original ideas that bring your vision to life.",
  },
  {
    icon: Handshake,
    title: "Trust",
    desc: "Transparent communication and reliable execution.",
  },
  {
    icon: Heart,
    title: "Passion",
    desc: "We love what we do, and it shows in every experience.",
  },
  {
    icon: Users,
    title: "Client First",
    desc: "Your happiness is our greatest success.",
  },
];

const stats = [
  {
    icon: CalendarDays,
    number: "10+",
    title: "Years of Experience",
  },
  {
    icon: Star,
    number: "500+",
    title: "Events Delivered",
  },
  {
    icon: MapPin,
    number: "50+",
    title: "Cities & Destinations",
  },
  {
    icon: Gem,
    number: "100%",
    title: "Client Satisfaction",
  },
];

const teamMembers = [
  {
    image: "/team1.png",
    name: "Ashima Arora Datta",
    role: "Founder & Creative Director",
  },
  {
    image: "/team2.png",
    name: "Vipul Dutta",
    role: "Managing Director",
  },
  {
    image: "/team3.png",
    name: "Creative Team",
    role: "Design & Event Specialists",
  },
];

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-[var(--bg)] text-[var(--white)]">
      <Navbar />

      <section className="relative min-h-screen w-full overflow-hidden pt-12">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image1.png')",
          }}
        />

        {/* White Luxury Overlay */}

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12 lg:px-16">
          <div className="max-w-[650px]">
            <p className="text-[var(--primary)] uppercase tracking-[5px] text-xs md:text-sm mb-5">
              About Bigwig Events
            </p>

            <h1 className="font-serif text-[38px] md:text-[56px] lg:text-[72px] leading-[1.1] text-[var(--text)] font-light">
              Crafting Experiences
              <br />
              That Stay{" "}
              <span className="italic text-[var(--primary)]">With You</span>
            </h1>

            <p className="mt-6 text-[var(--text-light)] text-base md:text-lg leading-8 max-w-[520px]">
              At Bigwig Events, we believe every celebration should be as unique
              as the people behind it. We blend creativity, precision, and
              passion to design unforgettable moments.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Let's Plan
            </button>
          </div>
        </div>
      </section>

      <section className="py-20  bg-[var(--secondary-bg)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT IMAGE */}
            <div className="relative max-w-[520px]">
              {/* Border Frame */}
              <div className="absolute top-5 left-5 w-full h-full border border-[var(--primary)]/30 z-0" />

              {/* Main Image */}
              <div className="relative z-10 overflow-hidden">
                <img
                  src="/events.png"
                  alt="Who We Are"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-[var(--primary)] uppercase tracking-[4px] text-xs mb-4">
                Who We Are
              </p>

              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[var(--text)]">
                Your Vision. Our Expertise.
                <br />
                Unforgettable Results.
              </h2>

              <p className="mt-4 space-y-3 text-[var(--text-light)] leading-8">
                Founded with a passion for perfection, Bigwig Events has become
                a trusted name in luxury event planning and execution.
              </p>

              <p className="mt-4 space-y-3 text-[var(--text-light)] leading-8">
                From intimate gatherings to grand celebrations, we handle every
                detail so you can enjoy every moment.
              </p>

              {/* Signature */}
              <div className="mt-8">
                <h4 className="text-3xl italic text-[var(--primary)] font-serif">
                  Ashima Arora Dutta
                </h4>

                <p className="mt-2 text-xs uppercase tracking-[2px] text-[var(--text)]">
                  Founder & Creative Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-secondary)] ">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-[var(--primary)] uppercase tracking-[4px] text-xs mb-4">
              What Drives Us
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[var(--text)]">
              Our Values
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="text-center px-4 py-6 border-r last:border-r-0 border-[var(--border)]"
                >
                  <div className="flex justify-center mb-5">
                    <Icon
                      size={34}
                      className="text-[var(--primary)]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-lg font-medium text-[var(--text)] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-[var(--text-light)]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#faf8f5] border-y border-[var(--border)]/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="text-center py-6 border-r last:border-r-0 border-[var(--border)]"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <Icon
                      size={30}
                      strokeWidth={1.5}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  {/* Number */}
                  <h3 className="font-serif text-[34px] md:text-[46px] text-[var(--text)]">
                    {item.number}
                  </h3>

                  {/* Label */}
                  <p className="mt-2 text-xs md:text-sm uppercase tracking-[2px] text-[var(--text-light)]">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20  bg-[var(--secondary-bg)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-[var(--primary)] uppercase tracking-[4px] text-xs mb-4">
              Meet The Experts
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[var(--text)]">
              Our Leadership Team
            </h2>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group">
                {/* Image */}
                <div className="overflow-hidden mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-[var(--text)]">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[2px] text-[var(--text-light)]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />

      <Footer />

      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
