import Link from "next/link";
import Image from "next/image";
import rnrImage1 from "../../assets/Hero/RR2.webp";
import awardsImage1 from "../../assets/Hero/awards.webp";
import productLaunchImage1 from "../../assets/Hero/productlaunch.webp";
import townhallsImage1 from "../../assets/background.webp";
import miceImage1 from "../../assets/Hero/MICE.webp";
import offsiteImage1 from "../../assets/Hero/OFSITE.webp";
import domesticImage1 from "../../assets/background.webp";
import teamBuildingImage from "../../assets/Hero/TEAM.webp";
import decorImage1 from "../../assets/Hero/Decor.webp";
import partyImage1 from "../../assets/Hero/parties.webp";
import atlImage1 from "../../assets/Hero/ATL.webp";
import btlImage1 from "../../assets/Hero/BTL.webp";

const events = [
  {
    title: "Rewards & Recognition",
    subtitle: "Celebrate success with impact.",
    description:
      "We create memorable recognition events that celebrate achievement, boost morale, and strengthen culture.",
    image: rnrImage1,
  },
  {
    title: "Awards Ceremonies",
    subtitle: "Elegant production for every winner.",
    description:
      "From stage lighting to guest experience, we design award nights that feel premium and unforgettable.",
    image: awardsImage1,
  },
  {
    title: "Product Launches",
    subtitle: "Reveal your next big idea.",
    description:
      "We build launch experiences that showcase your product with energy, storytelling, and polished execution.",
    image: productLaunchImage1,
  },
  {
    title: "Townhalls",
    subtitle: "Connect teams with clarity.",
    description:
      "Interactive townhalls that elevate communication and keep every attendee engaged from start to finish.",
    image: townhallsImage1,
  },
];

const travels = [
  {
    title: "MICE Experiences",
    subtitle: "Meetings, incentives, conferences and exhibitions.",
    description:
      "We manage every detail for corporate travel programs so your teams arrive inspired, connected, and ready to perform.",
    image: miceImage1,
  },
  {
    title: "Offsites",
    subtitle: "Strategic retreats designed to energize.",
    description:
      "Our offsite events blend purposeful work with curated leisure, creating a refreshing environment for team growth.",
    image: offsiteImage1,
  },
  {
    title: "Domestic Travel",
    subtitle: "Thoughtful itineraries with seamless logistics.",
    description:
      "From transport to venues and hospitality, we make domestic travel effortless and memorable for every group.",
    image: domesticImage1,
  },
];

const training = [
  "Interactive team-building exercises that spark collaboration.",
  "Custom learning journeys aligned to your company goals.",
  "Expert facilitation delivered with polished execution.",
  "Long-term impact through thoughtful storytelling and design.",
];

const festivities = [
  {
    title: "Office Décor",
    subtitle: "Set the scene with premium style.",
    description:
      "From holiday themes to branded activations, our décor transforms spaces into immersive environments.",
    image: decorImage1,
  },
  {
    title: "Celebration Parties",
    subtitle: "Designed for joy and remarkable moments.",
    description:
      "We plan parties that feel polished, fun, and effortless from start to finish.",
    image: partyImage1,
  },
];

const activations = [
  {
    title: "ATL Activations",
    subtitle: "Scale awareness across mass audiences.",
    description:
      "We design Above-the-Line campaigns that blend media, visuals and activation moments for strong brand presence.",
    items: [
      "TV and streaming campaigns",
      "Radio and audio promotions",
      "Print and outdoor media",
      "Integrated brand storytelling",
    ],
    image: atlImage1,
  },
  {
    title: "BTL Activations",
    subtitle: "Create deeper connections on the ground.",
    description:
      "From branded experiences to promotional activations, we help you build direct engagement with your audience.",
    items: [
      "Event activations and pop-ups",
      "Sampling and in-store demos",
      "Experiential roadshows",
      "Targeted relationship campaigns",
    ],
    image: btlImage1,
  },
];

export default function Services() {
  return (
    <>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr] items-center">
            <div>
              <span className="inline-block uppercase tracking-[0.35em] text-yellow-400 text-sm mb-4">
                bigwig events
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                Premium events that feel modern, elevated, and unforgettable.
              </h2>
              <p className="text-gray-300 leading-8 mb-6">
                At <strong className="text-yellow-400">Bigwig Events</strong>,
                we bring thoughtful design and flawless execution together for
                weddings, corporate activations, travel programs, and private
                celebrations. Every detail is curated to create a lasting,
                unforgettable experience.
              </p>
              <ul className="grid gap-3 text-gray-300 mb-8">
                <li className="flex gap-3">
                  <span className="text-yellow-400">•</span>
                  Expert creative direction with polished, boutique service.
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">•</span>
                  Seamless, end-to-end planning for every moment of your event.
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">•</span>
                  Memorable experiences designed to feel premium and effortless.
                </li>
              </ul>
              <p className="text-gray-300 leading-8">
                Our boutique approach means we accept a limited number of
                events, so your project receives the attention it deserves.
                Expect polished service, creative storytelling, and a truly
                tailored celebration.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-[32px] border border-gray-800 bg-[#111111] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400 mb-3">
                  What we do
                </p>
                <h3 className="text-2xl text-white font-semibold mb-3">
                  Bespoke event planning with premium care.
                </h3>
                <p className="text-gray-300 leading-7">
                  From concept to execution, we design each moment with style,
                  precision, and emotion.
                </p>
              </div>

              <div className="rounded-[32px] border border-gray-800 bg-[#111111] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400 mb-3">
                  Our promise
                </p>
                <h3 className="text-2xl text-white font-semibold mb-3">
                  Exceptional service, every step of the way.
                </h3>
                <p className="text-gray-300 leading-7">
                  We ensure seamless coordination, inspired design, and a
                  stress-free client experience from first call to final
                  details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#090909]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
              corporate events
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Executive experiences designed for every team.
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-8">
              From R&R awards to launches and townhalls, we plan corporate
              events that feel elegant, strategic, and distinctly tailored to
              your brand.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {events.map((event, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-gray-800 bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
                      {event.title}
                    </p>
                    <p className="text-white text-2xl font-semibold mt-3">
                      {event.subtitle}
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 leading-7">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0b0b0d]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
              corporate travels
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Travel programs with precision, comfort, and visual polish.
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-8">
              From incentive journeys to executive retreats, our team handles
              crafting experiences that feel premium and effortless.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {travels.map((travel, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-gray-800 bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={travel.image}
                    alt={travel.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
                      {travel.title}
                    </p>
                    <p className="text-white text-2xl font-semibold mt-3">
                      {travel.subtitle}
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 leading-7">
                    {travel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
            corporate training
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Training experiences that energize teams and create real momentum.
          </h2>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <p className="text-gray-300 leading-8 mb-8">
                Whether your team needs leadership coaching, soft-skill
                development, or a memorable team-building day, we design
                learning experiences that feel premium, purposeful, and easy to
                engage with.
              </p>
              <div className="grid gap-4">
                {training.map((item, index) => (
                  <div
                    key={index}
                    className="group rounded-[28px] border border-gray-800 bg-[#111111] p-4 transition duration-300 hover:-translate-y-1 shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                  >
                    <p className="text-gray-200 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-gray-800 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
              <Image
                src={teamBuildingImage}
                alt="Team Building"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-8">
                <p className="text-white text-3xl font-semibold drop-shadow-lg">
                  Build stronger teams with confidence.
                </p>
                <p className="mt-3 text-gray-300 max-w-xl leading-7">
                  Designed for leadership, connection, and long-term momentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#090909]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
              corporate festivities
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Festive experiences crafted with bold, modern style.
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-8">
              We combine decor, entertainment and seamless planning to deliver
              celebrations that look incredible and feel effortless.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {festivities.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-gray-800 bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
                      {item.title}
                    </p>
                    <h3 className="text-white text-2xl font-semibold mt-3">
                      {item.subtitle}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 leading-7">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
              corporate activations
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Activation campaigns with visual impact and strategic energy.
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-8">
              From broad awareness to personalized engagement, our activations
              move audiences with clarity and creative direction.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {activations.map((section, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-gray-800 bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
                      {section.title}
                    </p>
                    <h3 className="text-white text-2xl font-semibold mt-3">
                      {section.subtitle}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 leading-7 mb-6">
                    {section.description}
                  </p>
                  <ul className="list-disc space-y-3 pl-5 text-gray-300">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
