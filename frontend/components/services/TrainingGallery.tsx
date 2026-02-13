import Image from "next/image";

const images = [
  "/weding.png",
  "/events.png",
  "/travel.png",
  "/festi.png",
  "/acti.png",
];

export default function TrainingGallery() {
  return (
    <section className="px-6 py-28 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-light mb-20 text-white">
          Event <span className="italic text-yellow-400">Gallery</span>
        </h2>

        {/* Editorial grid */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 md:row-span-2 relative h-[640px] rounded-3xl overflow-hidden group">
            <Image
              src={images[0]}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="relative h-[300px] rounded-3xl overflow-hidden group">
            <Image
              src={images[1]}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="relative h-[300px] rounded-3xl overflow-hidden group">
            <Image
              src={images[2]}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="relative h-[300px] rounded-3xl overflow-hidden group">
            <Image
              src={images[3]}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="relative h-[300px] rounded-3xl overflow-hidden group">
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
