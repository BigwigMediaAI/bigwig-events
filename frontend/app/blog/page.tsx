"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";
import ServicePopup from "@/components/layout/Popup";
import ContactFormCard from "@/components/layout/ContactFormCard";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  datePublished: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
const BLOGS_PER_PAGE = 10;

/* ================= SKELETON ================= */

function BlogSkeleton() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] overflow-hidden animate-pulse"
          >
            <div className="h-48 bg-[var(--bg-secondary)]" />

            <div className="p-6 space-y-3">
              <div className="h-4 w-3/4 rounded bg-[var(--bg-secondary)]" />
              <div className="h-3 w-full rounded bg-[var(--bg-secondary)]" />
              <div className="h-3 w-5/6 rounded bg-[var(--bg-secondary)]" />
            </div>
          </div>
        ))}
      </div>

      <div className="lg:col-span-2">
        <div className="h-[420px] rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] animate-pulse" />
      </div>
    </div>
  );
}

/* ================= PAGE ================= */

export default function BlogPage() {
  const [open, setOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/blog/viewblog`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (res.ok) {
          setBlogs(data || []);
        }
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE,
  );

  return (
    <div className="bg-[var(--bg)]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden pt-12">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image3.png')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12 lg:px-16">
          <div className="max-w-[650px]">
            <p className="text-[var(--primary)] uppercase tracking-[5px] text-xs md:text-sm mb-5">
              Latest Insights
            </p>

            <h1 className="font-serif text-[38px] md:text-[56px] lg:text-[72px] leading-[1.1] text-[var(--text)] font-light">
              Ideas That
              <br />
              <span className="italic text-[var(--primary)]">Drive Growth</span>
            </h1>

            <p className="mt-6 text-[var(--text-light)] text-base md:text-lg leading-8 max-w-[540px]">
              Expert insights on branding, digital strategy, business growth,
              and premium marketing experiences that create lasting impact.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        {/* LOADING */}
        {loading && <BlogSkeleton />}

        {/* EMPTY */}
        {!loading && blogs.length === 0 && (
          <div className="max-w-4xl mx-auto px-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] p-14 text-center shadow-sm">
              <h2 className="font-serif text-4xl text-[var(--text)] mb-4">
                Blogs Coming Soon
              </h2>

              <p className="text-lg text-[var(--text-light)] mb-8 max-w-xl mx-auto">
                We're preparing insightful articles, creative stories, and
                business growth ideas. Stay connected.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => setOpen(true)}
                  text="Start a Conversation"
                />

                <Link href="/portfolio">
                  <button className="h-12 px-8 border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
                    View Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* BLOGS */}
        {!loading && blogs.length > 0 && (
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* LEFT */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {paginatedBlogs.map((blog) => (
                  <Link
                    key={blog._id}
                    href={`/blog/${blog.slug}`}
                    className="group rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="line-clamp-2 text-xl font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition mb-3">
                        {blog.title}
                      </h3>

                      <p className="line-clamp-3 text-[var(--text-light)] leading-7">
                        {blog.excerpt}
                      </p>

                      <span className="block mt-5 text-sm text-[var(--muted)]">
                        {new Date(blog.datePublished).toLocaleDateString()}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center gap-4">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="h-11 px-6 border border-[var(--border)] text-[var(--text-light)] hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:opacity-40 transition-all"
                  >
                    Prev
                  </button>

                  <div className="h-11 px-6 flex items-center text-[var(--text)]">
                    {currentPage} / {totalPages}
                  </div>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="h-11 px-6 border border-[var(--border)] text-[var(--text-light)] hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:opacity-40 transition-all"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <ContactFormCard />
            </div>
          </div>
        )}
      </section>

      <CTA />

      <Footer />

      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
