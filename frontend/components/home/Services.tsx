import Link from "next/link";

const services = [
  {
    title: "Corporate Events",
    href: "/corporate-events",
    img: "/events.png",
  },
  {
    title: "Corporate Travel",
    href: "/corporate-travel",
    img: "/travel.png",
  },
  {
    title: "Corporate Training",
    href: "/corporate-training",
    img: "/training.png",
  },
  {
    title: "Corporate Festivities",
    href: "/corporate-festivities",
    img: "/festi.png",
  },
  {
    title: "Corporate Activation",
    href: "/corporate-activation",
    img: "/acti.png",
  },
  {
    title: "Weddings",
    href: "/weddings",
    img: "/weding.png",
  },
];

export default function Services() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="w-11/12 md:w-5/6 mx-auto">
        {/* Heading */}
        <h2 className="text-center text-5xl font-light mb-10">
          Our <span className="text-yellow-400 italic">Experiences</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative h-96 rounded-2xl overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.img})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Glow Border */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-yellow-400 rounded-2xl transition" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <h3 className="text-2xl font-semibold group-hover:text-yellow-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-300 mt-3 text-sm">
                  Premium event management crafted with precision.
                </p>

                <span className="mt-5 inline-block text-yellow-400 group-hover:translate-x-2 transition">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
