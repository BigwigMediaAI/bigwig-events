import Image from "next/image";
import Button from "@/components/ui/Button";
import ActivationGallery from "@/components/services/ActivationGallery";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";

export default function CorporateActivation() {
  return (
    <div>
      <Navbar />
      <main className="bg-black text-white">
        {/* HERO */}
        <section className="relative h-[80vh] md:h-[100vh] w-full overflow-hidden">
          <Image
            src="/acti.png"
            alt="Corporate Activation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-6xl md:text-7xl font-light">
              Corporate{" "}
              <span className="italic text-yellow-400">Activation</span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-2xl">
              Immersive brand experiences that captivate audiences and elevate
              corporate presence.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
          {/* glow background */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <p
              className="text-5xl md:text-6xl leading-relaxed text-gray-200"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              We design large-scale brand activations that blend{" "}
              <span className="text-yellow-400">creativity</span>, technology,
              and live engagement — turning audiences into participants and
              brands into unforgettable moments.
            </p>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="relative py-28 px-6 overflow-hidden">
          {/* background glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[600px] h-[600px] bg-yellow-400/10 blur-[160px] rounded-full" />
          </div>

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div>
              <div className="w-12 h-[1px] bg-yellow-400 mb-6" />

              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                Crafted for{" "}
                <span className="italic font-serif text-yellow-400">
                  Impact
                </span>
              </h2>

              <p className="text-gray-400 leading-relaxed text-lg">
                From experiential installations to interactive showcases, we
                engineer environments that create emotional connection and
                lasting brand memory. Every activation is designed to command
                attention.
              </p>
            </div>

            {/* Right Premium Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-400/5 blur-2xl rounded-[36px] opacity-0 group-hover:opacity-100 transition duration-700" />

              <div className="relative bg-black/70 backdrop-blur-xl border border-white/10 p-14 rounded-[36px] shadow-2xl">
                <ul className="space-y-6 text-gray-200 text-lg">
                  {[
                    "Experiential marketing",
                    "Product launch activations",
                    "Interactive installations",
                    "Trade show showcases",
                    "Brand engagement zones",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      {/* gold dot */}
                      <span className="w-2 h-2 bg-yellow-400 rounded-full" />

                      <span className="italic">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* PREMIUM GALLERY */}
        <ActivationGallery />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
