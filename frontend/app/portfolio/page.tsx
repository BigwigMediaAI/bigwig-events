"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";
import FloatingContact from "@/components/Floating";
import ServicePopup from "@/components/layout/Popup";
import Button from "@/components/ui/Button";

interface Portfolio {
  _id: string;
  category: string;
  images: string[];
}

const categories = [
  "All",
  "Corporate Events",
  "Social Celebrations",
  "Weddings",
  "Travel",
  "Destination Events",
];

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /* FETCH */
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

  /* FLATTEN */
  const flattenedProjects = projects.flatMap((item) =>
    item.images.map((img, index) => ({
      id: item._id + "-" + index,
      image: img,
      category: item.category,
    })),
  );

  /* FILTER */
  const filteredProjects =
    activeCategory === "All"
      ? flattenedProjects
      : flattenedProjects.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <div className="bg-[var(--secondary-bg)]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image1.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12">
          <div className="max-w-[650px]">
            <p className="text-[var(--primary)] uppercase tracking-[5px] text-xs mb-5">
              Our Portfolio
            </p>

            <h1 className="font-serif text-[42px] md:text-[64px] leading-[1.1] text-[var(--text)] font-light">
              Celebrations <br />
              <span className="italic text-[var(--primary)]">
                We’re Proud Of
              </span>
            </h1>

            <p className="mt-6 text-[var(--text-light)] leading-7">
              A glimpse into the extraordinary experiences we’ve designed and
              the memories we’ve created.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition"
            >
              Let’s Plan
            </button>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* LOADING */}
          {loading && (
            <div className="text-center py-20 text-[var(--text-light)]">
              Loading portfolio...
            </div>
          )}

          {/* EMPTY */}
          {!loading && flattenedProjects.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-3xl font-serif mb-4">
                Portfolio Coming Soon
              </h2>
              <Button onClick={() => setOpen(true)} text="Let's Create Yours" />
            </div>
          )}

          {/* CONTENT */}
          {!loading && flattenedProjects.length > 0 && (
            <>
              {/* FILTER */}
              <div className="flex flex-wrap justify-center gap-4 mb-14">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 text-sm uppercase tracking-[2px] border transition ${
                      activeCategory === cat
                        ? "bg-[var(--primary)] text-white"
                        : "border-[var(--border)] hover:border-[var(--primary)] text-black"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* PREMIUM GRID */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                    onClick={() => setSelectedImage(project.image)}
                  >
                    <img
                      src={project.image}
                      className="w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                    {/* CATEGORY */}
                    <div className="absolute bottom-3 left-3 px-3 py-1 text-xs uppercase bg-white/90 text-black rounded-full opacity-0 group-hover:opacity-100 transition">
                      {project.category}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
          />
        </div>
      )}

      <FloatingContact />
      <CTA />
      <Footer />
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
