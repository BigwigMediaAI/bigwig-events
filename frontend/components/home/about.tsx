import Image from "next/image";
import { CalendarDays, Star, MapPin } from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: Star,
    value: "500+",
    label: "Events Delivered",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Cities & Destinations",
  },
];

export default function About() {
  return (
    <section className="bg-[#F8F5F0] py-20">
      <div className=" mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-13 ">
          {/* Left Image */}
          <div className="lg:col-span-5 relative min-h-[400px]">
            <Image
              src="/about.png"
              alt="Bigwig Events"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-5 p-4 md:p-7 border-r-2 border-[var(--border)]">
            <p className="text-[var(--primary)] uppercase tracking-[4px] text-xs mb-4">
              About Bigwig Events
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[var(--text)]">
              Passion. Precision.
              <br />
              Perfection.
            </h2>

            <div className="mt-4 space-y-3 text-[var(--text-light)] leading-8">
              <p>
                At Bigwig Events, we don't just organize events — we create
                experiences that reflect your vision and leave a lasting
                impression.
              </p>

              <p>
                With creativity, meticulous planning and a trusted network of
                partners, we bring your ideas to life across corporate, social
                and destination celebrations.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <h4 className="text-3xl italic text-[var(--primary)] font-serif">
                Ashima Arora Dutta
              </h4>

              <p className="mt-2 text-xs uppercase tracking-[2px] text-[var(--text)]">
                Founder & Creative Director
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-3 p-4 ">
            <div className="space-y-10">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-start gap-4">
                    <Icon size={28} className="text-[var(--primary)] mt-1" />

                    <div>
                      <h3 className="text-4xl font-serif text-[var(--text)]">
                        {item.value}
                      </h3>

                      <p className="mt-2 uppercase tracking-[2px] text-xs text-[var(--text-light)]">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
