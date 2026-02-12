"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Button from "../ui/Button";
import ServicePopup from "./Popup";

const events = [
  { name: "Corporate Events", href: "/corporate-events" },
  { name: "Corporate Travel", href: "/corporate-travel" },
  { name: "Corporate Training", href: "/corporate-training" },
  { name: "Corporate Festivities", href: "/corporate-festivities" },
  { name: "Corporate Activation", href: "/corporate-activation" },
  { name: "Weddings", href: "/weddings" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" width={120} height={60} alt="BigWig logo" />
        </Link>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About Us
          </Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="nav-link cursor-pointer">Big Events</span>

            {open && (
              <div className="absolute top-7 left-0 w-64 bg-black/90 backdrop-blur-lg border border-yellow-500/20 rounded-xl shadow-xl p-2">
                {events.map((event) => (
                  <Link
                    key={event.href}
                    href={event.href}
                    className="block px-4 py-2  rounded-md hover:bg-yellow-500 hover:text-black transition"
                  >
                    {event.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/portfolio" className="nav-link">
            Big Folio
          </Link>
          <Link href="/clients" className="nav-link">
            Big Clients
          </Link>
          <Link href="/contact" className="nav-link">
            Contact Us
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">
          {/* Social Icons */}
          <div className="flex gap-4 text-white text-sm">
            <FaFacebookF className="cursor-pointer hover:text-yellow-400 transition" />
            <FaTwitter className="cursor-pointer hover:text-yellow-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-yellow-400 transition" />
          </div>

          {/* Book Now */}
          <Button onClick={() => setOpenForm(true)} text="Book Now" />
        </div>

        {/* Mobile */}
        <div className="md:hidden text-yellow-400 text-2xl cursor-pointer">
          ☰
        </div>
      </div>
      <ServicePopup isOpen={openForm} onClose={() => setOpenForm(false)} />
    </nav>
  );
}
