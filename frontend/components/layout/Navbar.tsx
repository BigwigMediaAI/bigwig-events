"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";
import { CgMenuLeft } from "react-icons/cg";
import ServicePopup from "./Popup";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Destinations", href: "/" },
  { name: "Testimonials", href: "/testimonial" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-[var(--border)] shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        {" "}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-[88px] flex items-center justify-between">
          {/* Left Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/logo2.png" alt="Bigwig" width={140} height={60} />
          </Link>

          {/* Center Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[13px] uppercase tracking-wider text-black hover:text-[var(--primary)] transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <button
              onClick={() => setOpen(true)}
              className="cursor-pointer hidden md:flex px-6 h-11 items-center justify-center border border-[#b89b5e] text-[#b89b5e] text-sm uppercase tracking-wider hover:bg-[#b89b5e] hover:text-white transition"
            >
              Let's Plan
            </button>

            {/* Menu Icon */}
            <button onClick={() => setMenuOpen(true)}>
              <CgMenuLeft size={28} className="text-[#b89b5e] cursor-pointer" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[340px] md:w-[420px] bg-[var(--white)] shadow-2xl z-[60] transform transition-all duration-500 overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="px-6 py-5 flex justify-between items-center border-b border-[var(--border)]">
          <Image src="/logo2.png" alt="Bigwig" width={140} height={60} />

          <button
            onClick={() => setMenuOpen(false)}
            className="text-[var(--text)] hover:text-[var(--primary)] transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Mobile Menu */}
          <div className="lg:hidden flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[var(--text)] text-lg hover:text-[var(--primary)] transition"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => setOpen(true)}
              className="mt-2 border border-[var(--primary)] text-[var(--primary)] h-11 px-5 hover:bg-[var(--primary)] hover:text-white transition"
            >
              Let's Plan
            </button>
          </div>

          {/* Desktop Info */}
          <div className="hidden lg:block space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-[3px] text-[var(--primary)] mb-3">
                About Us
              </h3>

              <p className="text-[var(--text-light)] leading-7">
                We craft unforgettable weddings, corporate gatherings,
                destination celebrations and luxury experiences worldwide.
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="border border-[var(--primary)] text-[var(--primary)] h-11 px-5 hover:bg-[var(--primary)] hover:text-white transition"
            >
              Let's Plan
            </button>
          </div>

          {/* Contact - shown once for both */}
          <div className="border-t border-[var(--border)] pt-6 space-y-4">
            <h3 className="text-sm uppercase tracking-[3px] text-[var(--primary)]">
              Contact
            </h3>

            <div className="flex items-center gap-3 text-[var(--text)]">
              <Phone size={18} />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-3 text-[var(--text)]">
              <Mail size={18} />
              <span>hello@bigwigevents.com</span>
            </div>

            <div className="flex items-center gap-3 text-[var(--text)]">
              <Instagram size={18} />
              <span>@bigwig.events</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-50"
        />
      )}
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
