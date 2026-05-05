"use client";

import Link from "next/link";
import Button from "../ui/Button";
import ServicePopup from "../layout/Popup";
import { useState } from "react";

export default function CTA() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/about.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
        <p className="text-[var(--primary)] uppercase tracking-[5px] text-sm font-medium mb-5">
          Let's Create Something Extraordinary
        </p>

        <h2 className="font-serif text-white text-[36px] md:text-[58px] leading-[1.2] font-light">
          Ready To Turn Your
          <br />
          Dream Event Into Reality?
        </h2>

        <p className="mt-6 text-white/80 text-base md:text-lg leading-8 max-w-[700px] mx-auto">
          From intimate celebrations to grand luxury experiences, we bring your
          vision to life with creativity, elegance, and flawless execution.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button
            onClick={() => setOpen(true)}
            className="h-12 px-8 bg-[var(--primary)] text-white uppercase tracking-[2px] text-sm hover:opacity-90 transition"
          >
            Let's Plan
          </button>

          <Link href="/contact">
            <button className="h-12 px-8 border border-white text-white uppercase tracking-[2px] text-sm hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
