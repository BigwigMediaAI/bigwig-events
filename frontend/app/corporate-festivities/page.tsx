"use client";

import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FestivitesGallery from "@/components/services/FestivtiesGallery";
import Image from "next/image";

export default function CorporateFestivitiesPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-black text-white">
        {/* HERO */}
        <section className="relative h-[80vh] md:h-[100vh] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="/festi.png"
            alt="Corporate Festivities"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 px-6">
            <h1 className="text-6xl md:text-8xl font-light">
              Corporate{" "}
              <span className="italic text-yellow-400 font-serif">
                Festivities
              </span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Celebrations designed to ignite energy, elegance, and
              unforgettable moments.
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
              We craft celebrations where{" "}
              <span className="text-yellow-400">joy</span>, elegance, and
              spectacle merge into unforgettable corporate memories.
            </p>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[600px] h-[600px] bg-yellow-400/10 blur-[160px] rounded-full" />
          </div>

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            {/* TEXT */}
            <div>
              <div className="w-16 h-[1px] bg-yellow-400 mb-8" />

              <h2 className="text-5xl md:text-6xl font-light mb-10">
                Celebration{" "}
                <span className="italic text-yellow-400 font-serif">
                  Design
                </span>
              </h2>

              <p className="text-gray-400 text-xl leading-relaxed">
                From luxury gala nights to themed corporate parties, we curate
                immersive environments where entertainment, lighting, and
                atmosphere elevate every celebration into a cinematic
                experience.
              </p>
            </div>

            {/* GLASS CARD */}
            <div className="relative group">
              <div className="absolute -inset-[1px] rounded-[40px] bg-gradient-to-r from-yellow-400/40 via-transparent to-yellow-400/40 opacity-40 blur-md group-hover:opacity-70 transition" />

              <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 p-16 rounded-[40px]">
                <h3 className="text-yellow-400 text-sm tracking-widest mb-10">
                  SIGNATURE FESTIVITIES
                </h3>

                <ul className="space-y-6 text-gray-200 text-xl">
                  <li className="flex gap-4">
                    <span className="text-yellow-400">✦</span>Luxury corporate
                    galas
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-400">✦</span>Award night
                    productions
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-400">✦</span>Theme celebrations
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-400">✦</span>Entertainment
                    staging
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-400">✦</span>Live performance
                    curation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FestivitesGallery />
        {/* STATS / CREDIBILITY */}
        <section className="py-28 px-6 text-center">
          <h2 className="text-5xl font-light mb-16">
            Trusted at <span className="italic text-yellow-400">Scale</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-5xl font-light text-yellow-400">200+</h3>
              <p className="text-gray-400 mt-4">
                Corporate productions delivered
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-light text-yellow-400">40+</h3>
              <p className="text-gray-400 mt-4">Global brand partnerships</p>
            </div>

            <div>
              <h3 className="text-5xl font-light text-yellow-400">1M+</h3>
              <p className="text-gray-400 mt-4">Attendees engaged</p>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
