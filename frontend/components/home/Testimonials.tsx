"use client";

const testimonials = [
  {
    name: "Amit Verma",
    role: "Corporate Director",
    text: "BigWig transformed our annual conference into a world-class experience. Every detail was flawless.",
  },
  {
    name: "Riya Kapoor",
    role: "Wedding Client",
    text: "They didn’t just plan a wedding — they created magic. Our guests still talk about it.",
  },
  {
    name: "Rahul Mehta",
    role: "Brand Manager",
    text: "Professional, creative, and luxury execution. The activation campaign exceeded expectations.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black py-36 px-6 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-yellow-400/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-light mb-28">
          Client{" "}
          <span className="text-yellow-400 italic font-serif">Experiences</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-black/70 backdrop-blur-xl border border-white/10 p-12 rounded-[32px] transition duration-500 hover:-translate-y-4 hover:border-yellow-400 shadow-xl"
            >
              {/* Giant decorative quote */}
              <div className="absolute -top-6 left-6 text-[80px] text-yellow-400/10 font-serif select-none">
                “
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed italic font-light text-lg">
                {t.text}
              </p>

              {/* Divider line */}
              <div className="w-12 h-[1px] bg-yellow-400/50 my-8" />

              {/* Name */}
              <div>
                <h4 className="text-xl font-semibold group-hover:text-yellow-400 transition">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500 italic">{t.role}</p>
              </div>

              {/* Glow layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-yellow-400/5 blur-3xl rounded-[32px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
