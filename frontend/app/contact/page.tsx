"use client";

import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

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
    <div className="bg-[var(--secondary-bg)] text-[var(--text)]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden pt-12">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image1.png')",
          }}
        />

        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12 lg:px-16">
          <div className="max-w-[650px]">
            <p className="text-[var(--primary)] uppercase tracking-[5px] text-xs md:text-sm mb-5">
              Contact Bigwig Events
            </p>

            <h1 className="font-serif text-[38px] md:text-[58px] lg:text-[72px] leading-[1.1] font-light text-[var(--text)]">
              Let’s Create
              <br />
              Something{" "}
              <span className="italic text-[var(--primary)]">Exceptional</span>
            </h1>

            <p className="mt-6 text-[var(--text-light)] text-base md:text-lg leading-8 max-w-[540px]">
              Whether you're planning a luxury wedding, destination celebration,
              or corporate experience, our team is ready to bring your vision to
              life.
            </p>

            <button className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
              Let’s Connect
            </button>
          </div>
        </div>
      </section>

      {/* SOCIAL + CONTACT */}
      <section className="py-20 bg-[var(--secondary-bg)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p className="text-[var(--primary)] uppercase tracking-[5px] text-sm font-medium mb-4">
                Stay Connected
              </p>

              <h2 className="font-serif text-[36px] md:text-[52px] font-light leading-[1.2] text-[var(--text)] mb-6">
                Connect With
                <br />
                Our Team
              </h2>

              <p className="text-[var(--text-light)] leading-8 max-w-[520px]">
                Follow our journey, explore our latest celebrations, and connect
                with us across social platforms.
              </p>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-[var(--primary)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                        <Icon size={18} className="text-[var(--primary)]" />
                      </div>

                      <span className="text-sm font-medium text-[var(--text)]">
                        {item.name}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-[var(--text-light)] group-hover:text-[var(--primary)]"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm">
              <MapPin className="mb-4 text-[var(--primary)]" />

              <h4 className="font-serif text-2xl mb-3">Visit Us</h4>

              <p className="text-[var(--text-light)] leading-7">
                New Delhi, India
              </p>
            </div>

            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm">
              <Phone className="mb-4 text-[var(--primary)]" />

              <h4 className="font-serif text-2xl mb-3">Call Us</h4>

              <p className="text-[var(--text-light)] leading-7">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm">
              <Mail className="mb-4 text-[var(--primary)]" />

              <h4 className="font-serif text-2xl mb-3">Email Us</h4>

              <p className="text-[var(--text-light)] leading-7">
                hello@bigwigevents.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="pb-20 bg-[var(--secondary-bg)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactFormCard />

            <div className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm h-[500px]">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=New%20Delhi&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
