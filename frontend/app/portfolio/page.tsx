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
  "Luxury Weddings",
  "Social Celebrations",
  "MICE",
  "Brand Activations",
  "Destination Experiences",
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
          style={{ backgroundImage: "url('/portfoliopage.png')" }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12">
          <div className="max-w-[650px]">
            <p className="text-[var(--primary)] uppercase tracking-[5px] text-xs mb-5">
              Our Portfolio
            </p>

            <h1 className="font-serif  text-[38px] md:text-[50px] lg:text-[60px] leading-[1.1] text-[var(--text)] font-light">
              Experiences We’ve <br />
              <span className="italic text-[var(--primary)]">Created</span>
            </h1>

            <p className="mt-6 text-[var(--text-light)] leading-7">
              Every event tells a story. Explore a collection of our corporate
              experiences, destination celebrations, luxury setups, and travel
              moments crafted with creativity and precision.
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
      <section className="py-14">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* LOADING */}
          {loading && (
            <div className="flex items-center justify-center min-h-[400px]">
              <p className="text-[var(--text-light)] text-lg">
                Loading portfolio...
              </p>
            </div>
          )}

          {/* EMPTY API */}
          {!loading && flattenedProjects.length === 0 && (
            <div className="min-h-[500px] flex items-center justify-center">
              <div className="text-center max-w-[500px] border border-[var(--border)] p-12 bg-white">
                <p className="uppercase tracking-[4px] text-xs text-[var(--primary)] mb-5">
                  Portfolio
                </p>

                <h2 className="font-serif text-4xl text-[var(--text)] mb-5">
                  Work Coming Soon
                </h2>

                <p className="text-[var(--text-light)] leading-7 mb-8">
                  We're currently curating our finest experiences. Your
                  celebration could be our next masterpiece.
                </p>

                <Button
                  onClick={() => setOpen(true)}
                  text="Let's Create Yours"
                />
              </div>
            </div>
          )}

          {/* CONTENT */}
          {!loading && flattenedProjects.length > 0 && (
            <div className="grid lg:grid-cols-[320px_1fr] gap-12">
              {/* LEFT FILTER */}

              <div className="lg:sticky lg:top-20 h-fit">
                <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl p-6 shadow-sm">
                  {/* CATEGORY LIST */}
                  <div className="flex flex-col gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`
            w-full text-left px-5 py-4 rounded-xl
            text-sm uppercase tracking-[1.5px]
            transition-all duration-300
            ${
              activeCategory === cat
                ? "bg-[var(--primary)] text-white shadow-md"
                : "text-[var(--text)] hover:bg-[var(--bg)]"
            }
          `}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div>
                {/* CATEGORY EMPTY */}
                {filteredProjects.length === 0 ? (
                  <div className="min-h-[500px] flex items-center justify-center border border-dashed border-[var(--border)] bg-white">
                    <div className="text-center px-8">
                      <h3 className="font-serif text-3xl text-[var(--text)] mb-4">
                        No Projects Yet
                      </h3>

                      <p className="text-[var(--text-light)]">
                        Portfolio for this category will be added soon.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="columns-1 sm:columns-2 xl:columns-3 gap-6 space-y-6">
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => setSelectedImage(project.image)}
                        className="relative group cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
                      >
                        <img
                          src={project.image}
                          alt={project.category}
                          className="w-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

                        {/* CATEGORY */}
                        <div className="absolute bottom-4 left-4 px-4 py-2 bg-white text-black text-xs uppercase tracking-[2px] rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
                          {project.category}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Portfolio"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
          />

          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}

      <FloatingContact />
      <CTA />
      <Footer />
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
