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

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    desc: "We understand your goals, ideas and expectations.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design",
    desc: "We craft a creative concept tailored just for you.",
  },
  {
    icon: CalendarDays,
    step: "03",
    title: "Plan",
    desc: "Detailed planning, timelines and seamless coordination.",
  },
  {
    icon: Settings,
    step: "04",
    title: "Execute",
    desc: "Flawless execution with precision and passion.",
  },
  {
    icon: Heart,
    step: "05",
    title: "Deliver",
    desc: "Creating experiences that stay with your guests.",
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

        <h2 className="text-center font-serif text-4xl md:text-5xl text-[var(--text)] mb-14">
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

      {/* PROCESS */}
      <div className="bg-[var(--white)]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20">
          <p className="text-center text-xs uppercase tracking-[4px] text-[var(--primary)] mb-3">
            Our Process
          </p>

          <h2 className="text-center font-serif text-4xl md:text-5xl text-[var(--text)] mb-16">
            From Concept to Celebration
          </h2>

          {/* MOBILE */}
          <div className="block lg:hidden">
            <Swiper slidesPerView={1.2} spaceBetween={20}>
              {processSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <SwiperSlide key={index}>
                    <div className="border border-[var(--border)] p-6  min-h-[260px]">
                      <div className="w-12 h-12 rounded-full bg-[var(--white)] border border-[var(--primary)] flex items-center justify-center text-sm font-medium text-[var(--primary)] mb-5">
                        {item.step}
                      </div>

                      <h3 className="uppercase text-sm font-semibold text-[var(--text)] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-7 text-[var(--text-light)]">
                        {item.desc}
                      </p>

                      <div className="mt-5">
                        <Icon size={22} className="text-[var(--primary)]" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block relative">
            {/* Line */}
            <div className="absolute top-6 left-[10%] right-[10%] h-[1px] bg-[var(--border)]" />

            <div className="grid grid-cols-5 gap-10 relative z-10">
              {processSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[var(--white)] border border-[var(--primary)] flex items-center justify-center text-sm font-medium text-[var(--primary)] mb-6">
                      {item.step}
                    </div>

                    <h3 className="uppercase text-sm font-semibold text-[var(--text)] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-[var(--text-light)] max-w-[180px] mx-auto">
                      {item.desc}
                    </p>

                    <div className="flex justify-center mt-4">
                      <Icon size={22} className="text-[var(--text-light)]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
