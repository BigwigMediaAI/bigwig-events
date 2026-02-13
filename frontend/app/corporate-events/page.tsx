import Image from "next/image";
import Button from "@/components/ui/Button";
import EventsGallery from "@/components/services/EventsGallery";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function CorporateEvents() {
  return (
    <div>
      <Navbar />
      <main className="bg-black text-white">
        {/* HERO */}
        <section className="relative h-[80vh] md:h-[100vh] w-full overflow-hidden">
          <Image
            src="/events.png"
            alt="Corporate Events"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-6xl md:text-7xl font-light">
              Corporate <span className="italic text-yellow-400">Events</span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-2xl">
              High-impact corporate productions engineered with precision,
              elegance, and unforgettable scale.
            </p>
          </div>
        </section>

        <section className="py-32 px-6 text-center relative overflow-hidden">
          {/* glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <p
              className="text-5xl md:text-6xl leading-relaxed text-gray-200"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              From executive summits to global conferences, we design corporate
              experiences that inspire{" "}
              <span className="text-yellow-400">confidence</span>, command
              attention, and elevate brand authority.
            </p>
          </div>
        </section>

        {/* SIGNATURE EXPERIENCE */}
        <section className="relative py-32 px-6 overflow-hidden">
          {/* background cinematic glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[700px] h-[700px] bg-yellow-400/10 blur-[180px] rounded-full" />
          </div>

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            {/* LEFT — Editorial text */}
            <div className="space-y-8">
              <span className="text-yellow-400 tracking-widest text-sm uppercase">
                Our Craft
              </span>

              <h2 className="text-5xl md:text-6xl font-light leading-tight">
                Signature{" "}
                <span className="italic font-serif text-yellow-400">
                  Experiences
                </span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                We merge architecture, lighting, storytelling, and stage design
                to craft immersive corporate environments that redefine
                expectations. Every event becomes a statement of scale and
                elegance.
              </p>

              {/* gold divider */}
              <div className="w-20 h-[1px] bg-yellow-400/60" />
            </div>

            {/* RIGHT — Premium floating card */}
            <div className="relative group">
              {/* glow aura */}
              <div className="absolute inset-0 bg-yellow-400/5 blur-3xl rounded-[40px] opacity-0 group-hover:opacity-100 transition duration-700" />

              <div className="relative bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-xl border border-white/10 p-16 rounded-[40px] shadow-2xl">
                <ul className="space-y-8 text-lg">
                  {[
                    "Global conferences",
                    "Executive summits",
                    "Corporate award nights",
                    "Product unveilings",
                    "Leadership retreats",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-5">
                      {/* gold accent bar */}
                      <span className="w-1 h-8 bg-yellow-400 rounded-full" />

                      <span className="italic text-gray-200 tracking-wide">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FABULOUS GALLERY */}
        <EventsGallery />

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

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
