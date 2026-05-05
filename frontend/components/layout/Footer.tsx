"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Corporate Events",
  "Conferences & Seminars",
  "Weddings",
  "Social Celebrations",
  "Travel & Destinations",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setMessage("Please enter email");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/subscribers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("Subscribed successfully");
        setEmail("");
      } else {
        setMessage(data.message || "Subscription failed");
      }
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <Image
              src="/logo2.png"
              alt="Bigwig Events"
              width={70}
              height={70}
            />

            <h3 className="font-serif text-3xl text-[var(--text)] mt-5 leading-tight">
              Let's Create Something
              <br />
              Exceptional Together
            </h3>

            <p className="mt-4 text-sm text-[var(--text-light)] leading-7">
              Crafting experiences that stay with you.
            </p>

            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="group w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-[var(--primary)] transition"
                >
                  <Icon
                    size={16}
                    className="text-[var(--text)] group-hover:text-[var(--primary)] transition"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="uppercase tracking-[2px] text-xs text-[var(--primary)] mb-5">
              Quick Links
            </h4>

            <div className="space-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-[var(--text-light)] hover:text-[var(--primary)] transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="uppercase tracking-[2px] text-xs text-[var(--primary)] mb-5">
              Our Services
            </h4>

            <div className="space-y-3">
              {services.map((item) => (
                <p key={item} className="text-sm text-[var(--text-light)]">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="uppercase tracking-[2px] text-xs text-[var(--primary)] mb-5">
              Contact Us
            </h4>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone size={16} className="text-[var(--primary)] mt-1" />
                <span className="text-sm text-[var(--text-light)]">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex gap-3">
                <Mail size={16} className="text-[var(--primary)] mt-1" />
                <span className="text-sm text-[var(--text-light)]">
                  hello@bigwigevents.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin size={16} className="text-[var(--primary)] mt-1" />
                <span className="text-sm text-[var(--text-light)]">
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="uppercase tracking-[2px] text-xs text-[var(--primary)] mb-5">
              Newsletter
            </h4>

            <p className="text-sm text-[var(--text-light)] leading-7 mb-5">
              Stay updated with our latest stories and offers.
            </p>

            <div className="flex border border-[var(--border)] h-12">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 outline-none text-sm bg-transparent text-[var(--text)] placeholder:text-[var(--muted)]"
              />

              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="cursor-pointer w-12 flex items-center justify-center hover:text-[var(--primary)] transition"
              >
                <ArrowRight size={18} className="text-[var(--text)]" />
              </button>
            </div>

            {message && (
              <p className="text-xs text-[var(--primary)] mt-3">{message}</p>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--border)] mt-12 pt-6 text-center">
          <p className="text-sm text-[var(--text-light)]">
            © 2026 Bigwig Events. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
