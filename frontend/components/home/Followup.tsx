"use client";

import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";

export default function InstagramSection() {
  return (
    <section className="bg-[var(--white)] py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="border border-[var(--border)] px-8 md:px-14 py-12 md:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[4px] text-[var(--primary)] mb-4">
              Follow Our Journey
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-[var(--text)] leading-tight mb-5">
              Experience Bigwig <br />
              Beyond Events
            </h2>

            <p className="text-[var(--text-light)] leading-8 text-lg">
              Get a glimpse of our latest celebrations, luxury experiences,
              behind-the-scenes moments, and event stories on Instagram.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="https://www.instagram.com/bigwig_events?igsh=OXNpd2ZrdGJhMmFo&utm_source=qr"
            target="_blank"
          >
            <button className="group border border-[var(--primary)] text-[var(--primary)] px-8 h-14 flex items-center gap-4 hover:bg-[var(--primary)] hover:text-white transition">
              <Instagram size={18} />

              <span className="uppercase text-xs tracking-[2px]">
                @bigwig.events
              </span>

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
