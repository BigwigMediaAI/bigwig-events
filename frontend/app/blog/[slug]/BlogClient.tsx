"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import ContactFormCard from "@/components/layout/ContactFormCard";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import ServicePopup from "@/components/layout/Popup";
import FloatingContact from "@/components/Floating";

interface RelatedBlogType {
  title: string;
  slug: string;
  coverImage: string;
  excerpt: string;
  datePublished: string;
  author?: string;
}

export default function BlogClient({
  blog,
  relatedBlogs,
}: {
  blog: any;
  relatedBlogs: RelatedBlogType[];
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  /* popup buttons inside blog html */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("[data-open-popup='true']")) {
        setIsPopupOpen(true);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-14 border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h1 className="font-serif text-[32px] md:text-[52px] lg:text-[64px] leading-[1.15] text-[var(--text)] max-w-5xl">
            {blog.title}
          </h1>

          <p className="mt-5 text-[var(--text-light)] text-sm md:text-base">
            By{" "}
            <span className="text-[var(--text)] font-medium">
              {blog.author || "Bigwig Team"}
            </span>{" "}
            • {new Date(blog.datePublished).toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* COVER IMAGE */}
      {blog.coverImage && (
        <section className="py-10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="relative h-[280px] sm:h-[420px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden">
              <Image
                src={blog.coverImage}
                alt={blog.coverImageAlt || blog.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* BLOG CONTENT */}
          <article className="lg:col-span-3">
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6 md:p-10 shadow-sm">
              <div
                className="blog-content text-[var(--text)]"
                dangerouslySetInnerHTML={{
                  __html: blog.content,
                }}
              />
            </div>
            {/* FAQ SECTION */}
            {blog.faqs && blog.faqs.length > 0 && (
              <div className="lg:col-span-3">
                <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6 md:p-10">
                  <h2 className="font-serif text-2xl md:text-3xl text-[var(--text)] mb-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {blog.faqs.map((faq: any, index: number) => {
                      const isOpen = openIndex === index;

                      return (
                        <div
                          key={index}
                          className="border border-[var(--border)] rounded-xl overflow-hidden"
                        >
                          {/* Question */}
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="
                  w-full text-left px-5 py-4
                  flex justify-between items-center
                  bg-[var(--bg-secondary)]
                  hover:bg-[var(--bg-hover)]
                  transition
                "
                          >
                            <span className="font-medium text-[var(--text)]">
                              {faq.question}
                            </span>

                            <span className="text-xl">
                              {isOpen ? "-" : "+"}
                            </span>
                          </button>

                          {/* Answer */}
                          <div
                            className={`
                  px-5 transition-all duration-300 ease-in-out
                  ${isOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"}
                `}
                          >
                            <p className="text-[var(--text-light)] text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </article>

          {/* SIDEBAR */}
          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-28 space-y-8">
              <ContactFormCard />

              {/* RELATED BLOGS */}
              {relatedBlogs?.length > 0 && (
                <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6">
                  <h3 className="font-serif text-2xl text-[var(--text)] mb-6">
                    Related Articles
                  </h3>

                  <div className="space-y-5">
                    {relatedBlogs.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        className="group block"
                      >
                        <div className="flex gap-4">
                          {/* Thumbnail */}
                          {item.coverImage && (
                            <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0">
                              <Image
                                src={item.coverImage}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            </div>
                          )}

                          {/* Content */}
                          <div>
                            <p className="line-clamp-2 text-[var(--text)] font-medium group-hover:text-[var(--primary)] transition">
                              {item.title}
                            </p>

                            <p className="text-sm text-[var(--muted)] mt-2">
                              {new Date(
                                item.datePublished,
                              ).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      <CTA />

      <Footer />
      <FloatingContact />
      <ServicePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
