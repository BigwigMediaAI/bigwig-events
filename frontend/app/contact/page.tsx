"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import ContactFormCard from "@/components/layout/ContactFormCard";
import Footer from "@/components/layout/Footer";

const socials = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export default function ContactPage() {
  return (
    <div className="relative bg-[var(--bg)] text-[var(--white)]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/acti.png"
          alt="Event Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--secondary)]/20 blur-[200px]" />

        <div className="relative z-10 mx-auto flex h-full w-11/12 md:w-5/6 items-center">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--muted)]">
              <Link
                href="/"
                className="hover:text-[var(--secondary)] transition"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--text)]">Contact Us</span>
            </div>

            <h2 className="mb-6 text-4xl md:text-6xl font-bold leading-tight text-[var(--white)]">
              Let’s Start a <br />
              <span className="text-[var(--secondary)]">
                Meaningful Conversation
              </span>
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-[var(--text)]">
              Tell us about your event vision. Our team will guide you with
              creativity, precision, and premium execution.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL + INFO SECTION */}
      <section className="relative bg-[var(--bg)] overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--secondary)]/10 blur-[120px]" />
        <div className="absolute bottom-0 -right-40 h-[400px] w-[400px] rounded-full bg-[var(--secondary)]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <p className="mb-4 inline-block rounded-full border border-white/10 px-4 py-1 text-sm text-[var(--text)] backdrop-blur">
                Contact Us
              </p>

              <h2 className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-[var(--white)]">
                Want to work with us? <br />
                <span className="bg-gradient-to-r from-[var(--secondary)] via-[#FFD88A] to-[#ffcc33] bg-clip-text text-transparent">
                  Let’s connect
                </span>
              </h2>

              <p className="max-w-xl text-[var(--text)]">
                Follow us on social platforms or reach out directly — we’re
                always ready to plan extraordinary events.
              </p>
            </div>

            {/* RIGHT SOCIAL GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md transition-all duration-300 hover:border-[var(--secondary)]/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary)]/15 text-[var(--secondary)] transition group-hover:scale-110">
                        <Icon size={18} />
                      </div>
                      <span className="text-sm font-medium text-[var(--white)]">
                        {item.name}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-[var(--muted)] transition group-hover:text-[var(--secondary)]"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <MapPin className="mb-3 text-[var(--secondary)]" />
              <h4 className="text-lg font-semibold text-[var(--white)]">
                Office Address
              </h4>
              <p className="text-sm text-[var(--text)]">
                Business Bay, Dubai <br />
                United Arab Emirates
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <Phone className="mb-3 text-[var(--secondary)]" />
              <h4 className="text-lg font-semibold text-[var(--white)]">
                Phone
              </h4>
              <p className="text-sm text-[var(--text)]">+971 50 123 4567</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <Mail className="mb-3 text-[var(--secondary)]" />
              <h4 className="text-lg font-semibold text-[var(--white)]">
                Email
              </h4>
              <p className="text-sm text-[var(--text)]">
                hello@bigwigevents.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="bg-[var(--bg)] py-20">
        <div className="mx-auto w-11/12 md:w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <ContactFormCard />
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Business%20Bay%20Dubai&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
