"use client";

import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WeddingGallery from "@/components/services/WeddingGallery";
import Image from "next/image";

export default function WeddingsPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-black text-white">
        {/* HERO */}
        <section className="relative h-[80vh] md:h-[100vh] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="/weding.png"
            alt="Luxury Weddings"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 px-6">
            <h1 className="text-6xl md:text-8xl font-light">
              Luxury{" "}
              <span className="italic text-yellow-400 font-serif">
                Weddings
              </span>
            </h1>

            <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
              Where love is designed, celebrated, and remembered forever.
            </p>
          </div>
        </section>

        {/* CALLIGRAPHY MANIFESTO */}
        <section className="py-36 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <p
              className="text-6xl md:text-7xl leading-relaxed text-gray-200"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              We design weddings where{" "}
              <span className="text-yellow-400">emotion</span>, elegance, and
              artistry become eternal memories.
            </p>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[600px] h-[600px] bg-yellow-400/10 blur-[160px] rounded-full" />
          </div>

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            {/* TEXT */}
            <div>
              <div className="w-16 h-[1px] bg-yellow-400 mb-8" />

              <h2 className="text-5xl md:text-6xl font-light mb-10">
                A Love{" "}
                <span className="italic text-yellow-400 font-serif">Story</span>
              </h2>

              <p className="text-gray-400 text-xl leading-relaxed">
                Every wedding is a cinematic narrative. From intimate ceremonies
                to grand destination celebrations, we compose experiences that
                reflect the soul of your story.
              </p>
            </div>

            {/* GLASS CARD */}
            <div className="relative group">
              <div className="absolute -inset-[1px] rounded-[40px] bg-gradient-to-r from-yellow-400/40 via-transparent to-yellow-400/40 opacity-40 blur-md group-hover:opacity-70 transition" />

              <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 p-16 rounded-[40px]">
                <h3 className="text-yellow-400 text-sm tracking-widest mb-10">
                  SIGNATURE WEDDINGS
                </h3>

                <ul className="space-y-6 text-gray-200 text-xl">
                  <li className="flex gap-4">
                    <span className="text-yellow-400">✦</span>Destination
                    weddings
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-400">✦</span>Luxury venue
                    design
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-400">✦</span>Floral & décor
                    styling
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-400">✦</span>Wedding production
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-400">✦</span>Celebrity-style
                    celebrations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FABULOUS WEDDING GALLERY */}
        <WeddingGallery />
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
