"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-black py-32 px-6 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-yellow-400/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-light leading-tight">
          Ready to Create Your
          <span className="block text-yellow-400 italic">Next Big Event?</span>
        </h2>

        {/* Subtext */}
        <p className="mt-8 text-gray-300 text-lg">
          From luxury weddings to corporate experiences — we design moments that
          stay unforgettable.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          <Link
            href="/contact"
            className="px-10 py-4 bg-yellow-400 text-black font-semibold rounded-xl hover:scale-105 transition duration-300 shadow-lg shadow-yellow-400/20"
          >
            Book Your Event
          </Link>

          <Link
            href="/folio"
            className="px-10 py-4 border border-yellow-400 text-yellow-400 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
