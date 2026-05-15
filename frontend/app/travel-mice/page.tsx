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
    title: "Global Destinations",
    desc: "Exclusive business and leisure destinations worldwide.",
  },
  {
    icon: Plane,
    title: "Travel Management",
    desc: "Flights, visas, transfers and logistics handled smoothly.",
  },
  {
    icon: Hotel,
    title: "Luxury Hospitality",
    desc: "Premium stays for executives, teams and delegates.",
  },
  {
    icon: Compass,
    title: "MICE Expertise",
    desc: "Strategic meetings, conferences and incentive programs.",
  },
  {
    icon: Camera,
    title: "Memorable Experiences",
    desc: "Business journeys designed to inspire and connect.",
  },
];

const process = [
  {
    icon: Search,
    title: "Discover",
    desc: "Understanding business goals, destination and audience.",
  },
  {
    icon: MessageCircle,
    title: "Consult",
    desc: "Budget, travel style and event expectations discussed.",
  },
  {
    icon: ClipboardCheck,
    title: "Plan",
    desc: "Flights, stays, venues and activities planned perfectly.",
  },
  {
    icon: Settings,
    title: "Execute",
    desc: "Managing every travel and event detail seamlessly.",
  },
  {
    icon: Heart,
    title: "Experience",
    desc: "Creating journeys that leave lasting impact.",
  },
];

const projects = [
  {
    image: "/training.png",
  },
  {
    image: "/training.png",
  },
  {
    image: "/training.png",
  },
  {
    image: "/training.png",
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
            backgroundImage: "url('/travelmice.png')",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12">
          <div className="max-w-[700px]">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              Travel & MICE
            </p>

            <h1 className="font-serif text-[38px] md:text-[50px] lg:text-[60px] leading-[1.15] text-[var(--text)] font-light max-w-[700px]">
              Business Travel.
              <br />
              Global Experiences.
              <br />
              <span className="italic text-[var(--primary)]">
                Exceptional Results.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-[var(--text-light)] max-w-[550px]">
              Curating seamless domestic and international travel experiences
              with complete planning, hospitality, logistics, and destination
              management services.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Discover Global Journeys
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
              alt="Travel and MICE"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              Travel & MICE Services
            </p>

            <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] text-[var(--text)]">
              Business Travel.
              <br />
              Elevated Experiences.
            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-10">
              {[
                "International Incentive Tours",
                "Corporate MICE Programs",
                "Destination Conferences",
                "Leadership Retreats",
                "Corporate Offsites",
                "Group Travel Management",
                "Luxury Leisure Holidays",
                "Hotel & Flight Reservations",
                "Visa Assistance",
                "Transportation & Logistics",
                "Cruise Experiences",
                "Customized Travel Itineraries",
                "Destination Management Services",
              ].map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">✦</span>

                  <p className="text-[15px] text-[var(--text)] leading-6">
                    {service}
                  </p>
                </div>
              ))}
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
              From Planning To Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {process.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="text-center relative">
                  {/* connector line */}
                  {i !== process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-[1px] bg-[rgba(0,0,0,0.08)] z-0" />
                  )}

                  {/* icon circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white border border-[rgba(0,0,0,0.08)] flex items-center justify-center mx-auto">
                    <Icon size={28} className="text-[var(--primary)]" />
                  </div>

                  {/* number */}
                  <p className="mt-5 text-sm font-medium text-[var(--primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  {/* title */}
                  <h3 className="mt-2 font-semibold text-[var(--text)] uppercase tracking-[1px]">
                    {item.title}
                  </h3>

                  {/* description */}
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
                    alt="Travel & Mice"
                    fill
                    className="object-cover"
                  />
                </div>
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
