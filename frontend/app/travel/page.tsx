"use client";

import Image from "next/image";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServicePopup from "@/components/layout/Popup";
import { useState } from "react";

import {
  MapPinned,
  Plane,
  Hotel,
  Compass,
  Camera,
  MessageCircle,
  ClipboardCheck,
  Settings,
  Heart,
  Search,
} from "lucide-react";
import FloatingContact from "@/components/Floating";

const features = [
  {
    icon: MapPinned,
    title: "Dream Destinations",
    desc: "Curated locations that match your vision and style.",
  },
  {
    icon: Plane,
    title: "Travel Planning",
    desc: "Flights, transfers and logistics managed perfectly.",
  },
  {
    icon: Hotel,
    title: "Luxury Stays",
    desc: "Premium resorts, villas and unforgettable hospitality.",
  },
  {
    icon: Compass,
    title: "Local Experiences",
    desc: "Authentic experiences crafted for your celebration.",
  },
  {
    icon: Camera,
    title: "Memories Forever",
    desc: "Beautiful moments captured for a lifetime.",
  },
];

const process = [
  {
    icon: Search,
    title: "Discover",
    desc: "We understand your dream destination and expectations.",
  },
  {
    icon: MessageCircle,
    title: "Consult",
    desc: "We discuss experiences, budget and guest planning.",
  },
  {
    icon: ClipboardCheck,
    title: "Plan",
    desc: "Travel, stay, venues and activities planned perfectly.",
  },
  {
    icon: Settings,
    title: "Execute",
    desc: "Our team manages every detail seamlessly.",
  },
  {
    icon: Heart,
    title: "Explore",
    desc: "Celebrate, relax and create lifelong memories.",
  },
];

const projects = [
  {
    image: "/training.png",
    title: "Beach Celebration",
    location: "Maldives",
  },
  {
    image: "/training.png",
    title: "Mountain Retreat",
    location: "Switzerland",
  },
  {
    image: "/training.png",
    title: "Royal Experience",
    location: "Udaipur",
  },
  {
    image: "/training.png",
    title: "Island Escape",
    location: "Bali",
  },
];

export default function TravelDestinations() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[var(--bg)]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image2.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[rgba(253,251,247,0.94)] to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12">
          <div className="max-w-[700px]">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              Travel & Destinations
            </p>

            <h1 className="font-serif text-[32px] md:text-[48px] lg:text-[62px] leading-[1.15] text-[var(--text)] font-light max-w-[650px]">
              Explore The World.
              <br />
              Celebrate In{" "}
              <span className="italic text-[var(--primary)]">
                Extraordinary Places.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-[var(--text-light)] max-w-[550px]">
              From exotic beaches to royal palaces and mountain escapes, we
              create destination experiences filled with elegance, adventure and
              unforgettable memories.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Plan Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-[rgba(0,0,0,0.06)] bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="text-center px-6 py-10 border-r last:border-r-0 border-[rgba(0,0,0,0.06)]"
              >
                <Icon size={30} className="mx-auto text-[var(--primary)]" />

                <h3 className="mt-4 font-semibold text-[var(--text)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text-light)]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] overflow-hidden">
            <Image
              src="/about.png"
              alt="Destination"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              About Destination Experiences
            </p>

            <h2 className="font-serif text-[36px] md:text-[54px] leading-[1.2] text-[var(--text)]">
              Every Journey.
              <br />A Story Worth Telling.
            </h2>

            <p className="mt-6 text-[var(--text-light)] leading-8">
              We create immersive destination experiences where travel,
              celebration and luxury come together beautifully.
            </p>

            <div className="grid grid-cols-2 gap-y-5 mt-10 text-[var(--text)]">
              <p>• Luxury Destinations</p>
              <p>• Guest Hospitality</p>
              <p>• Travel Management</p>
              <p>• Venue Planning</p>
              <p>• Local Experiences</p>
              <p>• Lifetime Memories</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)]">
              Our Journey
            </p>

            <h2 className="mt-4 font-serif text-[42px] text-[var(--text)]">
              From Planning To Paradise
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {process.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="text-center relative">
                  {i !== process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-[1px] bg-[rgba(0,0,0,0.08)] z-0" />
                  )}

                  <div className="relative z-10 w-20 h-20 rounded-full bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center mx-auto">
                    <Icon size={28} className="text-[var(--primary)]" />
                  </div>

                  <p className="mt-5 text-sm font-medium text-[var(--primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 font-semibold text-[var(--text)] uppercase tracking-[1px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-light)] max-w-[180px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)]">
              Destinations We've Crafted
            </p>

            <h2 className="mt-4 font-serif text-[42px] text-[var(--text)]">
              Travel. Celebrate. Remember.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((item, i) => (
              <div key={i}>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-5 font-serif text-xl text-[var(--text)]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[2px] text-[var(--primary)]">
                  {item.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <FloatingContact />
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
