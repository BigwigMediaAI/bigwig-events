"use client";

import Image from "next/image";

import img1 from "../../assets/Hero/town3.webp";
import img2 from "../../assets/Hero/weeding.webp";
import img3 from "../../assets/Hero/weeding4.webp";
import img4 from "../../assets/Hero/weeding2.webp";

export default function Gallery() {
  return (
    <section className="py-20 bg-[#090909]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
            weddings
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Make Your Dream Wedding a Reality
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-8">
            Discover stunning venues, breathtaking decor, and seamless planning
            to make your special day unforgettable.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="grid grid-cols-2 gap-4">
            {[img1, img2, img3, img4].map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[28px] border border-gray-800 bg-[#111111] shadow-[0_25px_60px_rgba(0,0,0,0.25)] h-60"
              >
                <Image
                  src={src}
                  alt={`Wedding image ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-white">
              Your Perfect Day, Tailored to You
            </h2>
            <p className="text-gray-300 leading-8">
              At our wedding planning services, we specialize in transforming
              your dreams into reality. Whether it's a grand celebration or an
              intimate gathering, we ensure every detail is carefully handled.
            </p>
            <p className="text-gray-300 leading-8">
              Our personalized approach means we listen to your unique vision
              and turn it into a beautifully orchestrated experience with
              flawless execution.
            </p>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-gray-800 bg-[#111111] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                <p className="text-yellow-400 uppercase tracking-[0.25em] text-sm mb-3">
                  Planning highlights
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 leading-7">
                  <li>Stunning venues handpicked to match your vision.</li>
                  <li>
                    Flawless execution of every detail, from start to finish.
                  </li>
                  <li>
                    Personalized decor and entertainment designed around you.
                  </li>
                </ul>
              </div>
              <div className="rounded-[28px] border border-gray-800 bg-[#111111] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                <p className="text-yellow-400 uppercase tracking-[0.25em] text-sm mb-3">
                  Seamless experience
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 leading-7">
                  <li>Dedicated coordination for a stress-free celebration.</li>
                  <li>High-quality catering that delights every guest.</li>
                  <li>Beautiful style and storytelling that feel timeless.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
