"use client";

import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TravelGallery from "@/components/services/TravelGallery";
import Image from "next/image";

export default function CorporateTravelPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-black text-white">
        {/* HERO */}
        <section className="relative h-[80vh] md:h-[100vh] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="/travel.png"
            alt="Corporate Travel"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 px-6">
            <h1 className="text-6xl md:text-8xl font-light">
              Corporate{" "}
              <span className="italic text-yellow-400 font-serif">Travel</span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Luxury logistics, executive comfort, and seamless global journeys.
            </p>
          </div>
        </section>

        {/* CALLIGRAPHY INTRO */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <p
              className="text-5xl md:text-6xl leading-relaxed text-gray-200"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              We curate executive travel experiences where{" "}
              <span className="text-yellow-400">precision</span>, comfort, and
              elegance transform movement into luxury.
            </p>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="relative py-32 px-6 overflow-hidden">
          {/* background glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[600px] h-[600px] bg-yellow-400/10 blur-[160px] rounded-full" />
          </div>

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            {/* LEFT TEXT */}
            <div>
              <div className="w-16 h-[1px] bg-yellow-400 mb-8" />

              <h2 className="text-5xl md:text-6xl font-light leading-tight mb-10">
                Executive{" "}
                <span className="italic text-yellow-400 font-serif">
                  Journeys
                </span>
              </h2>

              <p className="text-gray-400 text-xl leading-relaxed">
                From VIP airport handling to private luxury accommodations, we
                engineer seamless corporate travel experiences where every
                movement reflects precision, comfort, and prestige.
              </p>
            </div>

            {/* RIGHT GLASS CARD */}
            <div className="relative group">
              {/* glow border */}
              <div className="absolute -inset-[1px] rounded-[40px] bg-gradient-to-r from-yellow-400/40 via-transparent to-yellow-400/40 opacity-40 blur-md group-hover:opacity-70 transition" />

              <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 p-16 rounded-[40px]">
                <h3 className="text-yellow-400 text-sm tracking-widest mb-10">
                  SIGNATURE SERVICES
                </h3>

                <ul className="space-y-6 text-gray-200 text-xl">
                  <li className="flex items-center gap-4">
                    <span className="text-yellow-400">✦</span>
                    Executive flight coordination
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-yellow-400">✦</span>
                    Luxury hotel & villa bookings
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-yellow-400">✦</span>
                    VIP airport concierge
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-yellow-400">✦</span>
                    Chauffeur & limousine services
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-yellow-400">✦</span>
                    International travel logistics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TravelGallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
