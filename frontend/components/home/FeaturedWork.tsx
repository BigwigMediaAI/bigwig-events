"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Corporate", "Social", "Weddings", "Travel"];

const portfolioItems = [
  {
    category: "Corporate",
    image: "/corporate/img1.webp",
  },
  {
    category: "Corporate",
    image: "/corporate/img7.webp",
  },
  {
    category: "Corporate",
    image: "/corporate/img3.webp",
  },
  {
    category: "Corporate",
    image: "/corporate/img10.webp",
  },
  {
    category: "Social",
    image: "/social/img1.webp",
  },
  {
    category: "Social",
    image: "/social/img6.webp",
  },
  {
    category: "Social",
    image: "/social/img3.webp",
  },
  {
    category: "Social",
    image: "/social/img4.webp",
  },
  {
    category: "Travel",
    image: "/travel.png",
  },
  {
    category: "Weddings",
    image: "/weding.png",
  },
];

export default function FeaturedWork() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? portfolioItems.slice(0, 4)
      : portfolioItems
          .filter((item) => item.category === activeTab)
          .slice(0, 4);

  return (
    <section className="py-20 bg-[var(--white)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          {/* Heading */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[250px]">
                <Image
                  src={item.image}
                  alt="Bigwig Events"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
