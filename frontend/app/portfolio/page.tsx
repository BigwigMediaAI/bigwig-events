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
  name: string;
  image: string;
  category: string;
}

const categories = [
  "All",
  "Wedding",
  "Corporate",
  "Private Party",
  "Brand Launch",
  "Birthday",
  "Luxury Decor",
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
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="relative bg-[var(--bg)] text-[var(--white)]">
      <Navbar />
      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/acti.png"
          alt="Luxury event portfolio showcase"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--secondary)]/20 blur-[200px]" />

        <div className="relative z-10 mx-auto flex h-full w-11/12 md:w-5/6 items-center">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--muted)]">
              <Link href="/" className="hover:text-[var(--secondary)]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--text)]">Portfolio</span>
            </div>

            <h1 className="mb-6 text-4xl md:text-6xl font-bold text-[var(--white)]">
              Moments We’ve <br />
              <span className="text-[var(--secondary)]">
                Crafted & Celebrated
              </span>
            </h1>

            <p className="max-w-xl text-lg text-[var(--text)]">
              Explore our curated collection of weddings, corporate events, and
              luxury celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO SECTION ================= */}
      <section className="relative overflow-hidden bg-[var(--bg)] py-16">
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--secondary)]/12 blur-[200px]" />

        <div className="relative z-10 mx-auto w-11/12 md:w-5/6">
          {loading ? (
            <div className="py-24 text-center text-[var(--text)]">
              Loading our events...
            </div>
          ) : projects.length === 0 ? (
            <div className="mx-auto max-w-3xl py-16 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--secondary)]/15 text-4xl">
                ✨
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-[var(--white)]">
                Our Next Masterpiece Could Be Yours
              </h3>

              <p className="mb-8 text-[var(--text)]">
                Let’s craft something extraordinary together.
              </p>

              <Button onClick={() => setOpen(true)} text="Plan Your Event" />
            </div>
          ) : (
            <>
              {/* FILTER BUTTONS */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm border transition ${
                      activeCategory === cat
                        ? "bg-[var(--secondary)] text-black border-[var(--secondary)]"
                        : "border-white/10 text-[var(--text)] hover:border-[var(--secondary)]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project._id}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-[var(--secondary)] text-black font-medium">
                      {project.category}
                    </span>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-lg font-semibold text-[var(--white)]">
                        {project.name}
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
