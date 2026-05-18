"use client";
import {
  Crown,
  Lightbulb,
  Handshake,
  Globe,
  Gem,
  Search,
  Pencil,
  CalendarDays,
  Settings,
  Heart,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const features = [
  {
    icon: Crown,
    title: "End-to-End\nManagement",
    desc: "From concept to completion, we handle it all.",
  },
  {
    icon: Lightbulb,
    title: "Creative\nConcepts",
    desc: "Unique ideas that bring your vision to life.",
  },
  {
    icon: Handshake,
    title: "Trusted\nNetwork",
    desc: "Strong relationships with the best in the industry.",
  },
  {
    icon: Globe,
    title: "Pan India &\nGlobal Reach",
    desc: "Events that travel seamlessly across locations.",
  },
  {
    icon: Gem,
    title: "Detail Driven\nApproach",
    desc: "Precision in planning for flawless execution.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F8F5F0] ">
      {/* WHY CHOOSE US */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20">
        <p className="text-center text-xs uppercase tracking-[4px] text-[var(--primary)] mb-3">
          Why Choose Us
        </p>

        <h2 className="text-center font-serif text-4xl md:text-5xl text-[var(--text)] mb-10">
          We Make Every Detail Count
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  px-4 py-6 text-center
                  ${
                    index !== features.length - 1
                      ? "lg:border-r border-[var(--border)]"
                      : ""
                  }
                `}
              >
                <div className="flex justify-center mb-4">
                  <Icon
                    size={28}
                    className="text-[var(--primary)]"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="whitespace-pre-line uppercase text-sm font-semibold leading-6 text-[var(--text)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-light)]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
