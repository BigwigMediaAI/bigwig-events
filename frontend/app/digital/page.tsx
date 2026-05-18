"use client";

import Image from "next/image";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServicePopup from "@/components/layout/Popup";
import { useState } from "react";

import {
  MonitorPlay,
  Video,
  Presentation,
  Users,
  Camera,
  Search,
  MessageCircle,
  ClipboardCheck,
  Settings,
  BarChart3,
} from "lucide-react";
import FloatingContact from "@/components/Floating";

const features = [
  {
    icon: MonitorPlay,
    title: "Virtual Events",
    desc: "Immersive digital experiences designed for global audiences.",
  },
  {
    icon: Video,
    title: "Live Streaming",
    desc: "High-quality streaming with flawless technical execution.",
  },
  {
    icon: Presentation,
    title: "Product Launches",
    desc: "Digital launches that build excitement and engagement.",
  },
  {
    icon: Users,
    title: "Audience Engagement",
    desc: "Interactive sessions that keep audiences connected.",
  },
  {
    icon: Camera,
    title: "Content Creation",
    desc: "Creative visuals and media designed for maximum impact.",
  },
];

const process = [
  {
    icon: Search,
    title: "Discover",
    desc: "Understanding your brand, goals and audience.",
  },
  {
    icon: MessageCircle,
    title: "Strategize",
    desc: "Creating digital concepts tailored to your vision.",
  },
  {
    icon: ClipboardCheck,
    title: "Plan",
    desc: "Mapping content, platform and engagement flow.",
  },
  {
    icon: Settings,
    title: "Execute",
    desc: "Technical production managed flawlessly.",
  },
  {
    icon: BarChart3,
    title: "Measure",
    desc: "Track performance, engagement and business results.",
  },
];

const projects = [
  {
    image: "/training.png",
    title: "Tech Product Launch",
    location: "Global Stream",
  },
  {
    image: "/training.png",
    title: "Investor Webinar",
    location: "Dubai",
  },
  {
    image: "/training.png",
    title: "Virtual Brand Summit",
    location: "Singapore",
  },
  {
    image: "/training.png",
    title: "Hybrid Conference",
    location: "Mumbai",
  },
];

export default function DigitalExperiences() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[var(--bg)]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/digitalpage.png')",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12">
          <div className="max-w-[700px]">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              Digital Experiences
            </p>

            <h1 className="font-serif  text-[38px] md:text-[50px] lg:text-[60px] leading-[1.15] text-[var(--text)] font-light max-w-[650px]">
              Digital Events.
              <br />
              Real{" "}
              <span className="italic text-[var(--primary)]">
                Powerful Connections.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-[var(--text-light)] max-w-[550px]">
              From live streams to virtual launches and hybrid conferences, we
              create digital experiences that inspire, engage and deliver
              measurable impact.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Plan Your Experience
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="mb-12">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-3">
              Digital Event Services
            </p>

            <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] text-[var(--text)]">
              Where Innovation.
              <br />
              Meets Engagement.
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Image */}
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/about.png"
                alt="Digital experience"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Services */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Virtual Conferences",
                "Hybrid Events",
                "Webinars & Live Sessions",
                "Virtual Product Launches",
                "Online Award Ceremonies",
                "Live Streaming Solutions",
                "Online Training Programs",
                "Digital Team-Building Activities",
                "Online Workshops & Masterclasses",
                "Registration & Ticketing Platforms",
                "Event App Integration",
                "Audience Engagement Tools",
                "Live Polls & Q&A Management",
                "Virtual Booth Management",
                "Speaker & Panel Coordination",
                "Digital Branding & Creatives",
                "Social Media Live Coverage",
                "Event Analytics & Reporting",
                "AV & Technical Production",
                "Backstage Production Management",
                "Recording & Post-Event Editing",
                "Simultaneous Interpretation Services",
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

      {/* PROJECTS */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)]">
              Experiences We've Created
            </p>

            <h2 className="mt-4 font-serif text-[42px] text-[var(--text)]">
              Digital. Interactive. Memorable.
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
