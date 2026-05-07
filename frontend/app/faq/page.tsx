"use client";

import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServicePopup from "@/components/layout/Popup";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "We specialize in weddings, corporate events, and social celebrations. From concept to execution, we manage every detail.",
    },
    {
      q: "Do you offer customized event planning?",
      a: "Yes, every event is tailored to your vision, style, and budget to create a unique and memorable experience.",
    },
    {
      q: "How early should I book your services?",
      a: "We recommend booking at least 2–4 months in advance, especially for weddings and large-scale events.",
    },
    {
      q: "Do you handle destination events?",
      a: "Absolutely. We plan and execute destination events across India and internationally.",
    },
    {
      q: "What is your pricing structure?",
      a: "Pricing depends on the scale, location, and requirements of the event. Contact us for a customized quote.",
    },
  ];

  return (
    <div className="bg-[var(--bg)]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image2.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[rgba(253,251,247,0.95)] to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-[70vh] flex items-center px-6 md:px-12">
          <div className="max-w-[650px]">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              Help Center
            </p>

            <h1 className="font-serif text-[32px] md:text-[48px] lg:text-[60px] leading-[1.15] text-[var(--text)] font-light">
              Frequently Asked
              <br />
              <span className="italic text-[var(--primary)]">Questions</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-[var(--text-light)] max-w-[550px]">
              Everything you need to know about our services, planning process,
              and how we bring your events to life.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = active === i;

              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-500 overflow-hidden ${
                    isOpen ? "shadow-lg" : ""
                  }`}
                  style={{
                    borderColor: isOpen
                      ? "rgba(180,140,90,0.5)"
                      : "rgba(180,140,90,0.2)",
                    background: isOpen ? "#fff" : "#ffffff",
                  }}
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                    style={{
                      background: isOpen
                        ? "rgba(180,140,90,0.06)"
                        : "transparent",
                    }}
                  >
                    {/* LEFT ACCENT BAR */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-6 w-[3px] rounded-full transition-all duration-300 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ background: "var(--primary)" }}
                      />

                      <span className="text-[15px] md:text-[17px] font-medium text-[var(--text)] leading-6">
                        {faq.q}
                      </span>
                    </div>

                    {/* ICON */}
                    <div className="relative h-5 w-5">
                      <span
                        className={`absolute left-0 top-1/2 w-5 h-[2px] bg-[var(--primary)] transition-all duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span
                        className={`absolute left-1/2 top-0 h-5 w-[2px] bg-[var(--primary)] transition-all duration-300 ${
                          isOpen ? "opacity-0 scale-0" : "opacity-100"
                        }`}
                        style={{ transform: "translateX(-50%)" }}
                      />
                    </div>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="px-6 pb-6 text-[14px] text-[var(--text-light)] leading-7">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />

      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
