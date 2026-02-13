"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/home/CTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Client {
  _id: string;
  name: string;
  image: string;
}

export default function ClientPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/client`);

        const result = await res.json();

        if (res.ok && result.success) {
          setClients(result.data || []);
        } else {
          console.error("Failed:", result.message);
          setClients([]);
        }
      } catch (error) {
        console.error("Failed to fetch clients", error);
        setClients([]);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="relative bg-[var(--bg)] text-[var(--white)]">
      <Navbar />
      {/* HERO */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/acti.png"
          alt="Trusted clients and brand partnerships"
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
              <span className="text-[var(--text)]">Clients</span>
            </div>

            <h1 className="mb-6 text-4xl md:text-6xl font-bold text-[var(--white)]">
              Brands That <br />
              <span className="text-[var(--secondary)]">
                Trust & Grow With Us
              </span>
            </h1>

            <p className="max-w-xl text-lg text-[var(--text)]">
              From ambitious startups to established enterprises, we partner
              with brands that value strategy, creativity, and measurable
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="relative overflow-hidden bg-[var(--bg)] py-16">
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--secondary)]/12 blur-[200px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative z-10 mx-auto w-11/12 md:w-5/6">
          {loading ? (
            <div className="py-24 text-center text-[var(--text)]">
              Loading trusted brands...
            </div>
          ) : clients.length === 0 ? (
            <div className="mx-auto max-w-3xl py-12 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--secondary)]/15 text-4xl">
                🤝
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-[var(--white)] md:text-3xl">
                Your Brand Could Be Here
              </h3>

              <p className="mb-8 leading-relaxed text-[var(--text)]">
                We’re currently onboarding new partners. Be among the first
                brands to collaborate with us and grow your presence.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[var(--secondary)] px-6 py-3 font-medium text-black transition hover:opacity-90"
              >
                Become a Partner
              </Link>
            </div>
          ) : (
            <div>
              {" "}
              <div className="mb-20 text-center">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-sm text-[var(--text)] backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
                  Trusted Partnerships
                </p>

                <h2 className="text-3xl font-bold text-[var(--white)] md:text-5xl">
                  Trusted by{" "}
                  <span className="bg-gradient-to-r from-[var(--secondary)] via-[#FFD88A] to-[#ffcc33] bg-clip-text text-transparent">
                    Leading Brands
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-[var(--text)]">
                  We collaborate with ambitious brands to build long-term growth
                  and digital authority.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4">
                {clients.map((client, index) => (
                  <div
                    key={client._id}
                    data-aos="flip-left"
                    data-aos-delay={index * 120}
                    className="group relative flex items-center justify-center"
                  >
                    <div className="absolute -inset-4 rounded-3xl bg-[var(--secondary)]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex aspect-square w-full max-w-[230px] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[var(--secondary)]/40 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                      <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-[var(--secondary)] opacity-70" />

                      <Image
                        src={client.image}
                        alt={client.name}
                        width={180}
                        height={180}
                        className="object-contain rounded-xl bg-white p-4 shadow-[0_8px_25px_rgba(0,0,0,0.08)] grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
