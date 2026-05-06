"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ClientsSection() {
  const clients = [
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client5.png",
    "/clients/client2.png",
  ];

  return (
    <section className="py-20 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[4px] text-xs text-[var(--primary)]">
            Trusted By
          </p>

          <h2 className="mt-4 font-serif text-[34px] md:text-[50px] text-[var(--text)]">
            Our Esteemed Clients
          </h2>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {clients.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center h-[100px] group">
                <img
                  src={logo}
                  alt="client logo"
                  className="max-h-[45px] object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* LEFT GRADIENT FADE */}
      <div
        className="absolute left-0 top-0 h-full w-[120px] pointer-events-none"
        style={{
          background: "linear-gradient(to right, #faf8f5, rgba(250,248,245,0))",
        }}
      />

      {/* RIGHT GRADIENT FADE */}
      <div
        className="absolute right-0 top-0 h-full w-[120px] pointer-events-none"
        style={{
          background: "linear-gradient(to left, #faf8f5, rgba(250,248,245,0))",
        }}
      />
    </section>
  );
}
