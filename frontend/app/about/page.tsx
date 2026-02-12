"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import ServicePopup from "@/components/layout/Popup";
import CTA from "@/components/home/CTA";

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-[var(--bg)] text-[var(--white)]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/acti.png"
          alt="Luxury event management and wedding planning"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Gold Glow */}
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--secondary)]/20 blur-[200px]" />

        <div className="relative z-10 mx-auto flex h-full w-11/12 md:w-5/6 items-center">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--muted)]">
              <Link
                href="/"
                className="hover:text-[var(--secondary)] transition"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--text)]">About Us</span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl md:text-6xl font-bold leading-tight text-[var(--white)]">
              Crafting Unforgettable <br />
              <span className="text-[var(--secondary)]">
                Luxury Events & Experiences
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-lg leading-relaxed text-[var(--text)]">
              Bigwig Events is a premium event management company creating
              extraordinary weddings, corporate gatherings, and private
              celebrations designed to leave lasting impressions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative bg-[var(--bg)]">
        {/* Subtle Dots Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* LEFT CONTENT */}
            <div className="lg:sticky lg:top-32 self-start">
              <p className="mb-4 inline-block rounded-full border border-white/10 px-4 py-1 text-sm text-[var(--text)]">
                About Bigwig Events
              </p>

              <h2 className="mb-6 text-3xl md:text-4xl font-bold leading-tight text-[var(--white)]">
                A Creative Partner Built <br />
                <span className="text-[var(--secondary)]">
                  for Exceptional Celebrations
                </span>
              </h2>

              <p className="mb-6 max-w-xl text-lg leading-relaxed text-[var(--text)]">
                We design and execute premium events that blend creativity,
                elegance, and flawless coordination — ensuring every detail
                reflects your vision and personality.
              </p>

              <p className="mb-10 max-w-xl text-[var(--muted)]">
                From luxury weddings and high-profile corporate events to
                exclusive private celebrations, we turn ideas into unforgettable
                experiences crafted with precision and passion.
              </p>

              <Button
                onClick={() => setOpen(true)}
                text="Plan Your Event With Us"
              />
            </div>

            {/* RIGHT STORY CARDS */}
            <div className="relative h-[260vh]">
              {/* CARD 1 */}
              <div className="sticky top-32 z-10">
                <Card
                  label="Our Mission"
                  title="Deliver Seamless Event Experiences"
                  text="To plan and execute events with precision, creativity, and attention to detail — ensuring every moment feels extraordinary."
                  icon="mission"
                />
              </div>

              {/* CARD 2 */}
              <div className="sticky top-32 z-20 mt-[30vh]">
                <Card
                  label="Our Vision"
                  title="Set the Standard for Luxury Events"
                  text="To become a trusted name in premium event management, known for innovation, elegance, and unforgettable celebrations."
                  icon="vision"
                />
              </div>

              {/* CARD 3 */}
              <div className="sticky top-32 z-30 mt-[60vh]">
                <Card
                  label="Plan With Us"
                  title="Your Vision, Our Expertise"
                  text="We work closely with you to understand your ideas and transform them into a flawlessly executed event that exceeds expectations."
                  icon="collaborate"
                  cta
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

type CardProps = {
  label: string;
  title: string;
  text: string;
  icon: "mission" | "vision" | "collaborate";
  cta?: boolean;
};

const ICONS = {
  mission: Target,
  vision: Eye,
  collaborate: Users,
};

function Card({ label, title, text, icon, cta }: CardProps) {
  const Icon = ICONS[icon];

  return (
    <div className="h-[320px] rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md flex flex-col justify-between">
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)]/15 text-[var(--secondary)]">
          <Icon size={22} />
        </div>

        <span className="mb-3 inline-block text-sm text-[var(--secondary)]">
          {label}
        </span>

        <h3 className="mb-4 text-2xl font-semibold text-[var(--white)]">
          {title}
        </h3>

        <p className="text-[var(--text)] leading-relaxed">{text}</p>
      </div>

      {cta && (
        <button className="mt-6 self-start text-sm font-medium text-[var(--secondary)]">
          Start a Conversation →
        </button>
      )}
    </div>
  );
}
