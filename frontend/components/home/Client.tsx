"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ClientsSection() {
  const clients = [
    "/clients/Gartner.png",
    "/clients/Airports_authority_of_India_Logo.png",
    "/clients/american-express-logo.png",
    "/clients/baidu.png",
    "/clients/luminous.png",
    "/clients/Mars_Logo.svg.png",
    "/clients/maruti.png",
    "/clients/MDH_spices_logo.png",
    "/clients/Nestle-Logo.png",
    "/clients/Samsung.png",
    "/clients/sembcorp.png",
    "/clients/shoolini.png",
    "/clients/iris.png",
    "/clients/itzcash.png",
    "/clients/jwmarriot.png",
    "/clients/kirby.png",
    "/clients/Oracle-Logo.png",
    "/clients/procam-logo-off.png",
    "/clients/styller.png",
    "/clients/taniran.png",

    "/clients/gena.png",
    "/clients/GMR_Group.png",
    "/clients/tcs.png",
    "/clients/volkswagen.png",
  ];

  // ✅ Split into two halves
  const half = Math.ceil(clients.length / 2);
  const firstRow = clients.slice(0, half);
  const secondRow = clients.slice(half);

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

        {/* 🔥 ROW 1 → LEFT */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false, // 👉 left
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {firstRow.map((logo, i) => (
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

        {/* 🔥 ROW 2 → RIGHT */}
        <div className="mt-6">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true, // 👉 right
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {secondRow.map((logo, i) => (
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
      </div>

      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full w-[120px] pointer-events-none bg-gradient-to-r from-[#faf8f5] to-transparent" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 h-full w-[120px] pointer-events-none bg-gradient-to-l from-[#faf8f5] to-transparent" />
    </section>
  );
}
