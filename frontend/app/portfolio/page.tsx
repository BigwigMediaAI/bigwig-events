"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/home/CTA";
import Button from "@/components/ui/Button";
import ServicePopup from "@/components/layout/Popup";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Portfolio {
  _id: string;
  title: string;
  image: string;
  category: string;
}

const categories = [
  "All",
  "Weddings",
  "Corporate",
  "Social Events",
  "Destinations",
];

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/portfolio`,
        );

        const result = await res.json();

        if (res.ok && result.success) {
          setProjects(result.data || []);
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.error("Failed to fetch portfolio", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category?.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <div className="bg-[var(--secondary-bg)]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden pt-12">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image1.png')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12 lg:px-16">
          <div className="max-w-[650px]">
            <p className="text-[var(--primary)] uppercase tracking-[5px] text-xs md:text-sm mb-5">
              Our Portfolio
            </p>

            <h1 className="font-serif text-[38px] md:text-[58px] lg:text-[72px] leading-[1.1] text-[var(--text)] font-light">
              Celebrations
              <br />
              We’re{" "}
              <span className="italic text-[var(--primary)]">Proud Of</span>
            </h1>

            <p className="mt-6 text-[var(--text-light)] text-base md:text-lg leading-8 max-w-[540px]">
              A glimpse into the extraordinary experiences we’ve designed, the
              unforgettable celebrations we’ve curated, and the timeless
              memories we’ve helped create.
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

      {/* PORTFOLIO */}
      <section className="py-20 bg-[var(--secondary-bg)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          {loading ? (
            <div className="py-24 text-center text-[var(--text-light)]">
              Loading our celebrations...
            </div>
          ) : projects.length === 0 ? (
            <div className="mx-auto max-w-[900px] py-24 text-center">
              {/* Icon */}
              <div className="mb-8 flex justify-center">
                <div className="h-24 w-24 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 flex items-center justify-center">
                  <span className="text-4xl text-[var(--primary)]">✦</span>
                </div>
              </div>

              {/* Label */}
              <p className="text-[var(--primary)] uppercase tracking-[5px] text-sm font-medium mb-5">
                Portfolio Coming Soon
              </p>

              {/* Heading */}
              <h2 className="font-serif text-[38px] md:text-[58px] leading-[1.2] text-[var(--text)] font-light">
                Our Finest
                <br />
                <span className="italic text-[var(--primary)]">
                  Moments Are Being Curated
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-[var(--text-light)] text-base md:text-lg leading-8 max-w-[680px] mx-auto">
                Behind every celebration is a story worth remembering. We’re
                currently preparing a showcase of our weddings, destination
                events, luxury celebrations, and unforgettable experiences.
              </p>

              {/* CTA */}
              <div className="mt-10">
                <Button
                  onClick={() => setOpen(true)}
                  text="Let's Create Yours"
                />
              </div>

              {/* Quote */}
              <p className="mt-12 font-serif italic text-xl text-[var(--primary)]">
                Your celebration could be our next masterpiece.
              </p>
            </div>
          ) : (
            <>
              {/* FILTER */}
              <div className="flex flex-wrap justify-center gap-4 mb-14">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 text-sm uppercase tracking-[2px] border transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                        : "border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div key={project._id} className="group cursor-pointer">
                    <div className="overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={450}
                        className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-[3px] text-[var(--primary)] mb-2">
                        {project.category}
                      </p>

                      <h3 className="font-serif text-2xl text-[var(--text)]">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
