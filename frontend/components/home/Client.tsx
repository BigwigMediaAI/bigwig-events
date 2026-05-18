"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Client {
  _id: string;
  name: string;
  image: string;
}

export default function ClientsSection() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/client`, {
          cache: "no-store",
        });

        const result = await res.json();

        if (res.ok && result.success) {
          setClients(result.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch clients", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <section className="py-20 ">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <div className="h-3 w-28 mx-auto bg-gray-200 animate-pulse rounded" />
            <div className="h-10 w-72 mx-auto mt-4 bg-gray-200 animate-pulse rounded" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="
                h-[100px]
                rounded-xl
                bg-gray-200
                animate-pulse
              "
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* Split into 2 rows */
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

        {/* ROW 1 */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {firstRow.map((client) => (
            <SwiperSlide key={client._id}>
              <div className="flex items-center justify-center h-[100px] group">
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-[45px] object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ROW 2 */}
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
              reverseDirection: true,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {secondRow.map((client) => (
              <SwiperSlide key={client._id}>
                <div className="flex items-center justify-center h-[100px] group">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-h-[45px] object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* FADE EFFECTS */}
      <div className="absolute left-0 top-0 h-full w-[120px] pointer-events-none bg-gradient-to-r from-[#faf8f5] to-transparent" />

      <div className="absolute right-0 top-0 h-full w-[120px] pointer-events-none bg-gradient-to-l from-[#faf8f5] to-transparent" />
    </section>
  );
}
