"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Weddings", "Corporate", "Social", "Travel"];

const portfolioItems = [
  {
    title: "Royal Wedding",
    location: "Jaipur",
    category: "Weddings",
    image: "/weding.png",
  },
  {
    title: "Leadership Summit",
    location: "New Delhi",
    category: "Corporate",
    image: "/training.png",
  },
  {
    title: "50th Anniversary",
    location: "Mumbai",
    category: "Social",
    image: "/festi.png",
  },
  {
    title: "Destination Retreat",
    location: "Maldives",
    category: "Travel",
    image: "/travel.png",
  },
];

export default function FeaturedWork() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

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
              <div className="relative h-[350px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between items-end">
                <div>
                  <h3 className="font-serif text-2xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[2px] text-white/80">
                    {item.location}
                  </p>
                </div>

                {/* Arrow */}
                {/* <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center group-hover:bg-[var(--primary)] transition">
                  <ArrowRight
                    size={18}
                    className="text-black group-hover:text-white"
                  />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
