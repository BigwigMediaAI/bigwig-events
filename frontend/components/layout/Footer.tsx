"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState, FormEvent } from "react";

type MessageType = {
  type: "success" | "error";
  text: string;
} | null;

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageType>(null);

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/subscribers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      const data: { message?: string } = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage({
        type: "success",
        text: "Subscribed successfully!",
      });

      setEmail("");
    } catch (error: unknown) {
      let errorMessage = "Something went wrong";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-black text-white pt-16 pb-12 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[800px] h-[800px] bg-yellow-400/10 blur-[200px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-[40px] p-12 shadow-2xl">
          {/* Top grid */}
          <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
            {/* Brand */}
            <div>
              <Image
                src="/logo.png"
                alt="BigWig logo"
                width={140}
                height={80}
                className="mb-6"
              />
              <p className="text-gray-400 leading-relaxed">
                Crafting unforgettable corporate and wedding experiences with
                elegance, precision, and luxury execution.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-yellow-400">
                Services
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="/corporate-events"
                    className="hover:text-yellow-400 transition"
                  >
                    Corporate Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-travel"
                    className="hover:text-yellow-400 transition"
                  >
                    Corporate Travel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-training"
                    className="hover:text-yellow-400 transition"
                  >
                    Corporate Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/weddings"
                    className="hover:text-yellow-400 transition"
                  >
                    Weddings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-yellow-400">
                Company
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-yellow-400 transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/folio"
                    className="hover:text-yellow-400 transition"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clients"
                    className="hover:text-yellow-400 transition"
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-yellow-400 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-yellow-400">
                Contact
              </h4>

              <p className="text-gray-400 mb-3">hello@bigwigevents.com</p>
              <p className="text-gray-400 mb-8">+91 98765 43210</p>

              <div className="flex gap-4">
                {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer backdrop-blur-md"
                  >
                    <Icon size={14} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Email Subscriber Section */}
          <div className="pt-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
                Stay Updated
              </h3>

              <p className="text-gray-400 mb-8">
                Subscribe to receive updates on corporate events, luxury
                weddings, and exclusive experiences.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col md:flex-row gap-4 justify-center"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full md:w-96 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition backdrop-blur-md"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition shadow-lg disabled:opacity-60"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {message && (
                <p
                  className={`mt-6 text-sm ${
                    message.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {message.text}
                </p>
              )}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 text-center text-gray-500 text-sm italic">
            © {new Date().getFullYear()} BigWig Events — Crafted with elegance.
          </div>
        </div>
      </div>
    </footer>
  );
}
