"use client";
import Image from "next/image";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";
import {
  ClipboardPenLine,
  MapPin,
  Flower2,
  Users,
  Bell,
  Camera,
  MessageCircle,
  Pencil,
  ClipboardCheck,
  Settings,
  Heart,
} from "lucide-react";
import ServicePopup from "@/components/layout/Popup";
import { useState } from "react";

const features = [
  {
    icon: ClipboardPenLine,
    title: "Bespoke Planning",
    desc: "Customized wedding experiences crafted around your vision.",
  },
  {
    icon: MapPin,
    title: "Venue Selection",
    desc: "Handpicked venues that match your dream celebration.",
  },
  {
    icon: Flower2,
    title: "Design & Decor",
    desc: "Beautiful designs and magical decor experiences.",
  },
  {
    icon: Users,
    title: "Vendor Management",
    desc: "Trusted vendors and flawless coordination.",
  },
  {
    icon: Bell,
    title: "Hospitality",
    desc: "Exceptional guest experiences with premium care.",
  },
];

const process = [
  {
    icon: MessageCircle,
    title: "Consult",
    desc: "We understand your story, preferences and vision.",
  },
  {
    icon: Pencil,
    title: "Design",
    desc: "We create a concept that reflects your dream wedding.",
  },
  {
    icon: ClipboardCheck,
    title: "Plan",
    desc: "Every detail is planned with precision and care.",
  },
  {
    icon: Settings,
    title: "Execute",
    desc: "We bring everything together seamlessly.",
  },
  {
    icon: Heart,
    title: "Celebrate",
    desc: "You enjoy every moment while we handle everything.",
  },
];

const projects = [
  {
    image: "/training.png",
    title: "Royal Palace Wedding",
    location: "Udaipur",
  },
  {
    image: "/training.png",
    title: "Beachside Wedding",
    location: "Goa",
  },
  {
    image: "/training.png",
    title: "Luxury Ballroom Wedding",
    location: "New Delhi",
  },
  {
    image: "/training.png",
    title: "Garden Wedding",
    location: "Jaipur",
  },
];

export default function Wedding() {
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
              Weddings
            </p>

            <h1 className="font-serif text-[38px] md:text-[52px] lg:text-[64px] leading-[1.1] text-[var(--text)] font-light">
              Your Dream{" "}
              <span className="italic text-[var(--primary)]">Wedding.</span>
              <br />
              Our Passion To{" "}
              <span className="italic text-[var(--primary)]">
                Make It Perfect.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-[var(--text-light)] max-w-[550px]">
              From intimate ceremonies to grand celebrations, we design and
              execute weddings as unique as your love story.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Let’s Plan
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
          <div className="relative h-[500px]  overflow-hidden">
            <Image
              src="/about.png"
              alt="Corporate event"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              About Our Weddings
            </p>

            <h2 className="font-serif text-[36px] md:text-[54px] leading-[1.2] text-[var(--text)]">
              We Don't Just Plan Weddings,
              <br />
              We Create Timeless Stories.
            </h2>

            <p className="mt-6 text-[var(--text-light)] leading-8">
              We blend creativity, tradition and flawless execution to design
              weddings that reflect your personality and leave lasting memories.
            </p>

            <div className="grid grid-cols-2 gap-y-5 mt-10 text-[var(--text)]">
              <p>• Personalized Wedding Concepts</p>
              <p>• End-to-End Planning</p>
              <p>• Attention To Every Detail</p>
              <p>• Stress-Free Experience</p>
              <p>• Luxury Guest Management</p>
              <p>• Memories Forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)]">
              Our Process
            </p>

            <h2 className="mt-4 font-serif text-[42px] text-[var(--text)]">
              From Dream To I Do
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

      {/* PROJECTS */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)]">
              Weddings We've Crafted
            </p>

            <h2 className="mt-4 font-serif text-[42px] text-[var(--text)]">
              Real Weddings. Real Love Stories.
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
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
