"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const categories = ["Corporate", "Social"];

const portfolioItems = [
  { category: "Corporate", image: "/corporate/img1.webp" },
  { category: "Corporate", image: "/corporate/img7.webp" },
  { category: "Corporate", image: "/corporate/img3.webp" },
  { category: "Corporate", image: "/corporate/img10.webp" },

  { category: "Social", image: "/social/img1.webp" },
  { category: "Social", image: "/social/img6.webp" },
  { category: "Social", image: "/social/img3.webp" },
  { category: "Social", image: "/social/img4.webp" },
];

export default function FeaturedWork() {
  const [activeTab, setActiveTab] = useState("Corporate");

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeTab,
  );

  return (
    <section className="py-20 bg-[var(--white)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[4px] text-[var(--primary)] mb-3">
              Featured Work
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-[var(--text)]">
              Moments We've Crafted
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-6">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm uppercase tracking-wide transition ${
                  activeTab === tab
                    ? "text-[var(--primary)] border-b border-[var(--primary)] pb-1"
                    : "text-[var(--text-light)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {filteredItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden cursor-pointer">
                <div className="relative h-[250px]">
                  <Image
                    src={item.image}
                    alt="Bigwig Events"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
