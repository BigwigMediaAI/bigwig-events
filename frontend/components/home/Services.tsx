import Image from "next/image";

const features = [
  {
    icon: "/icons/corporate.svg",
    title: "Corporate\nEvents",
    subtitle: "Strategic. Professional. Impactful.",
  },
  {
    icon: "/icons/conference.svg",
    title: "Conferences\n& Seminars",
    subtitle: "Big ideas. Flawless execution.",
  },
  {
    icon: "/icons/wedding.svg",
    title: "Weddings",
    subtitle: "Timeless. Elegant. Unforgettable.",
  },
  {
    icon: "/icons/glass.svg",
    title: "Social\nCelebrations",
    subtitle: "Celebrate life's most special moments.",
  },
  {
    icon: "/icons/travel.svg",
    title: "Travel &\nDestinations",
    subtitle: "Journeys crafted into extraordinary experiences.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-[var(--white)] border-y border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map((item, index) => (
            <div
              key={index}
              className={`
                py-8 md:py-10 px-4 text-center
                ${
                  index !== features.length - 1
                    ? "lg:border-r border-[var(--border)]"
                    : ""
                }
              `}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="whitespace-pre-line uppercase text-sm md:text-[15px] font-semibold tracking-wide text-[var(--text)] leading-6">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-2 text-xs md:text-sm text-[var(--text-light)] leading-6 max-w-[170px] mx-auto">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
