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
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import Floating from "@/components/Floating";

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
            backgroundImage: "url('/contactpage.png')",
          }}
        />

        {/* Luxury Overlay */}

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12 lg:px-16">
          <div className="max-w-[650px]">
            <p className="text-[var(--primary)] uppercase tracking-[5px] text-xs md:text-sm mb-5">
              Contact Bigwig Events
            </p>

            <h1 className="font-serif  text-[38px] md:text-[50px] lg:text-[60px] leading-[1.1] font-light text-[var(--text)]">
              Let’s Create
              <br />
              Something{" "}
              <span className="italic text-[var(--primary)]">
                Extraordinary
              </span>
            </h1>

            <p className="mt-6 text-[var(--text-light)] text-base md:text-lg leading-8 max-w-[540px]">
              Whether you are planning a corporate event, destination wedding,
              incentive travel program, or private celebration, our team is here
              to bring your vision to life with creativity, elegance, and
              seamless execution.
            </p>

            <button className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
              Schedule a Consultation
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
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm">
              <Phone className="mb-4 text-[var(--primary)]" />

              <h4 className="font-serif text-2xl mb-3">Call Us</h4>

              <p className="text-[var(--text-light)] leading-7">
                +91 8800818156
              </p>
            </div>

            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm">
              <Mail className="mb-4 text-[var(--primary)]" />

              <h4 className="font-serif text-2xl mb-3">Email Us</h4>

              <p className="text-[var(--text-light)] leading-7">
                ashima@bigwigmedia.in
              </p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm">
              <BsInstagram className="mb-4 text-[var(--primary)]" />

              <h4 className="font-serif text-2xl mb-3">Follow Us</h4>

              <Link
                href="https://www.instagram.com/bigwig_events?igsh=OXNpd2ZrdGJhMmFo&utm_source=qr"
                target="_blank"
              >
                <p className="text-[var(--text-light)] leading-7">
                  @bigwigevents
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Floating />
    </div>
  );
}
