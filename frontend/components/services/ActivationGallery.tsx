import Image from "next/image";

const images = [
  "/weding.png",
  "/events.png",
  "/travel.png",
  "/festi.png",
  "/acti.png",
  "/training.png",
];

export default function ActivationGallery() {
  return (
    <section className="px-6 py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-light mb-20 text-white">
          Activation <span className="italic text-yellow-400">Showcase</span>
        </h2>

        {/* Editorial gallery layout */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 relative h-[520px] rounded-3xl overflow-hidden group">
            <Image
              src={images[0]}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="relative h-[520px] rounded-3xl overflow-hidden group">
            <Image
              src={images[1]}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden group">
            <Image
              src={images[2]}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden group">
            <Image
              src={images[3]}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden group">
            <Image
              src={images[4]}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
