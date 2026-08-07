"use client";
import Image from "next/image";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import ServicePopup from "@/components/layout/Popup";
import { useState } from "react";
import FloatingContact from "@/components/Floating";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const projects = [
  // TaskUs Noida
  {
    image: "/corporate/taskus-noida/tn (1).jpeg",
  },
  {
    image: "/corporate/taskus-noida/tn (4).jpeg",
  },

  // Tata Tele Services
  {
    image: "/corporate/taskus-noida/tts1.jpeg",
  },
  {
    image: "/corporate/taskus-noida/tts2.jpeg",
  },

  // Study Group
  {
    image: "/corporate/taskus-noida/sg (1).jpeg",
  },
  {
    image: "/corporate/taskus-noida/sg (3).jpeg",
  },

  // Sembcorp
  {
    image: "/corporate/taskus-noida/sc (1).png",
  },
  {
    image: "/corporate/taskus-noida/sc (2).png",
  },

  // AI in Education Summit
  {
    image: "/corporate/taskus-noida/ag (1).png",
  },
  {
    image: "/corporate/taskus-noida/ag (2).png",
  },

  // SEIL Annual Bankers' Meet
  {
    image: "/corporate/taskus-noida/seil (1).png",
  },
  {
    image: "/corporate/taskus-noida/seil (2).png",
  },

  // Tadiran – DCM Shriram

  {
    image: "/corporate/taskus-noida/tadiran (2).png",
  },

  // TaskUs UHC Client Visit
  {
    image: "/corporate/taskus-noida/taskus (1).png",
  },
  {
    image: "/corporate/taskus-noida/taskus (2).png",
  },
  {
    image: "/corporate/taskus-noida/img (1).jpeg",
  },
  {
    image: "/corporate/taskus-noida/img (2).jpeg",
  },
  {
    image: "/corporate/taskus-noida/img (3).jpeg",
  },
  {
    image: "/corporate/taskus-noida/img (4).jpeg",
  },
  {
    image: "/corporate/taskus-noida/img (5).jpeg",
  },
  {
    image: "/corporate/taskus-noida/img (6).jpeg",
  },
  {
    image: "/corporate/taskus-noida/img (7).jpeg",
  },
  {
    image: "/corporate/taskus-noida/img (8).jpeg",
  },
];

const services = [
  "Conferences & Seminars",
  "Annual Day Celebrations",
  "Family Day Celebrations",
  "Product Launches",
  "Dealer Meets & Channel Partner Events",
  "Exhibitions & Trade Shows",
  "Award Nights & Gala Dinners",
  "Team Building Activities",
  "Corporate Offsites",
  "Employee Engagement Programs",
  "Brand Activations",
  "Hybrid & Virtual Events",
  "Artist & Celebrity Management",
  "Corporate Gifting Solutions",

  "Sound, Light & AV Solutions",
  "LED Walls & Visual Effects",
  "Stage Production",
  "Special Effects & Fireworks",
  "Photography & Videography",
  "Live Streaming Services",

  "Venue Selection Assistance",
  "Vendor Management",
  "Permissions & Licensing",
  "Security & Crowd Management",
  "On-Ground Coordination",
  "End-to-End Event Execution",
];

const showcaseCards = [
  {
    title: "Study Group – Masquerade R&R Night",
    description:
      "A spectacular evening where elegance met appreciation. Inspired by the allure of a masquerade, the event celebrated outstanding achievements through captivating décor, heartfelt recognitions, engaging in-house performances, and an unforgettable guest experience.",
    images: [
      "/corporate/taskus-noida/sg (1).jpeg",
      "/corporate/taskus-noida/sg (2).jpeg",
      "/corporate/taskus-noida/sg (3).jpeg",
    ],
  },
  {
    title: "MARUTI NEXA",
    description: `We got a brief from Maruti Suzuki- One of Maruti Suzuki's most loved sedan, CIAZ was moving exclusively to NEXA (Maruti's premium dealerships)\n\nThe idea of a cargo box with priority delivery was finalised to build curiosity & hype- Executing it simultaneously in Delhi, Mumbai, Bangalore, Hyderabad & Ahmedabad was a huge logistical challenge that team All Terrain delivered with efficiency & precision`,
    images: ["/corporate/taskus-noida/nexa.png"],
  },
  {
    title: "Taskus Noida - Honouring Heroes. Celebrating Milestones.",
    description:
      "An unforgettable experience created to commemorate the inauguration of TaskUs’ new office and recognise exceptional talent. Inspired by iconic Indian superheroes, the event brought together immersive storytelling, engaging entertainment, and seamless execution.",
    images: [
      "/corporate/taskus-noida/tn (1).jpeg",
      "/corporate/taskus-noida/tn (2).jpeg",
      "/corporate/taskus-noida/tn (3).jpeg",
      "/corporate/taskus-noida/tn (4).jpeg",
      "/corporate/taskus-noida/tn (5).jpeg",
      "/corporate/taskus-noida/tn (6).jpeg",
    ],
  },
  {
    title: "Tata Tele services - One Tribe 2.0 – A Celebration Beyond Work",
    description:
      "Conceptualised and executed end-to-end by Bigwig Travel & Events, this family-centric celebration united employees, spouses, and children through thoughtfully curated entertainment, engaging experiences, seamless production, and heartfelt moments of appreciation.",
    images: [
      "/corporate/taskus-noida/tts1.jpeg",
      "/corporate/taskus-noida/tts2.jpeg",
    ],
  },

  {
    title: "Sembcorp Green Hydrogen MoU Signing",
    description: `Sembcorp Green Hydrogen MoU Signing marked
a landmark international collaboration, bringing
together global partners, government
representatives, and industry leaders for the
formal signing of a multi-nation green hydrogen
initiative.
Hosted at The Lodhi, New Delhi, the high-profile
event seamlessly combined protocol, media
engagement, and elegant hospitality.`,
    images: [
      "/corporate/taskus-noida/sc (1).png",
      "/corporate/taskus-noida/sc (2).png",
    ],
  },
  {
    title: "AI in Education & Future of Work Summit",
    description: `The summit at Netaji Subhash Chandra University
Delhi brought together leaders from industry,
academia, government, and policy to explore the
transformative impact of Artificial Intelligence on
education, careers, and the future workforce.`,
    images: [
      "/corporate/taskus-noida/ag (1).png",
      "/corporate/taskus-noida/ag (2).png",
    ],
  },
  {
    title: "SEIL Annual Bankers’ Meet",
    description: `SEIL Annual Bankers’ Meet brought together
leading banking and financial partners for an
exclusive evening of strategic discussions,
leadership insights, recognition, and networking. Thoughtfully curated with elegant hospitality, live
entertainment, and bespoke memorabilia, the
event celebrated enduring partnerships and
shared growth.`,
    images: [
      "/corporate/taskus-noida/seil (2).png",
      "/corporate/taskus-noida/seil (1).png",
    ],
  },
  {
    title: "Tadiran– DCM Shriram Partnership Announcement",
    description: `Tadiran– DCM Shriram Partnership
Announcement marked the strategic alliance
between the Israeli technology leader and its
Indian manufacturing partner, celebrating the
signing of the MoU for local production and
exports.`,
    images: [
      "/corporate/taskus-noida/tadiran (2).png",
      "/corporate/taskus-noida/tadiran (1).png",
    ],
  },
  {
    title: "TaskUs UHC Client Visit– Gurgaon & Noida",
    description: `TaskUs UHC Client Visit– Gurgaon & Noida celebrated the partnership with UnitedHealthcare
through two immersive, superhero-themed experiences across the Gurgaon and Noida facilities.`,
    images: [
      "/corporate/taskus-noida/taskus (2).png",
      "/corporate/taskus-noida/taskus (1).png",
    ],
  },
];

export default function CorporateEvents() {
  const [open, setOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const currentCard = showcaseCards[activeCard];

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % showcaseCards.length);
    setActiveImage(0);
  };

  const prevCard = () => {
    setActiveCard(
      (prev) => (prev - 1 + showcaseCards.length) % showcaseCards.length,
    );
    setActiveImage(0);
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % currentCard.images.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) =>
        (prev - 1 + currentCard.images.length) % currentCard.images.length,
    );
  };
  return (
    <div className="bg-[var(--bg)]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/corporate.png')",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12">
          <div className="max-w-[700px]">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-5">
              Corporate Events
            </p>

            <h1 className="font-serif  text-[38px] md:text-[50px] lg:text-[60px] leading-[1.1] text-[var(--text)] font-light">
              Events That{" "}
              <span className="italic text-[var(--primary)]">Inspire.</span>
              <br />
              Connections That{" "}
              <span className="italic text-[var(--primary)]">Last.</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-[var(--text-light)] max-w-[550px]">
              Delivering professionally curated corporate experiences that
              inspire engagement, strengthen brand presence, and create
              meaningful business connections.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Explore Corporate Experiences
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="mb-12">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)] mb-3">
              Corporate Services
            </p>

            <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.2] text-[var(--text)]">
              Events Designed
              <br />
              For Business Growth.
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Image */}
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/corporate/img19.jpeg"
                alt="Corporate event"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Services */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1">✦</span>

                  <p className="text-[15px] text-[var(--text)] leading-6">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fafafa]">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-20">
          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
            <div>
              <p className="uppercase tracking-[4px] text-sm text-[var(--primary)]">
                Featured Experiences
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--text)]">
                Corporate Events
              </h2>
            </div>

            {/* Mobile Card Navigation */}
            <div className="flex lg:hidden gap-3 mt-6">
              <button
                onClick={prevCard}
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center bg-[var(--primary)] hover:text-white transition"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextCard}
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center bg-[var(--primary)] hover:text-white transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Desktop Card Navigation */}
          <button
            onClick={prevCard}
            className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full  items-center justify-center text-[var(--primary)]  transition"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={nextCard}
            className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full  items-center justify-center text-[var(--primary)]  transition"
          >
            <ChevronRight size={48} />
          </button>

          {/* Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl grid lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-[280px] sm:h-[400px] lg:h-[550px]">
              <Image
                src={currentCard.images[activeImage]}
                alt={currentCard.title}
                fill
                className="object-cover transition-all duration-500"
              />

              {/* Image Previous */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full backdrop-blur bg-white text-[var(--primary)] flex items-center justify-center shadow-lg transition"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Image Next */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full  backdrop-blur bg-white text-[var(--primary)] flex items-center justify-center shadow-lg transition"
              >
                <ChevronRight size={28} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {currentCard.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`transition-all duration-300 rounded-full ${
                      activeImage === index
                        ? "w-8 h-2 bg-white"
                        : "w-2 h-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-serif text-[var(--text)]">
                {currentCard.title}
              </h3>

              <p className="whitespace-pre-line mt-6 text-base sm:text-lg leading-7 text-[var(--text-light)]">
                {currentCard.description}
              </p>

              <button
                onClick={() => setOpen(true)}
                className="mt-10 w-fit px-8 h-12 rounded-full bg-[var(--primary)] text-white font-medium hover:opacity-90 transition"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-sm text-[var(--primary)]">
              Recent Corporate Events
            </p>

            <h2 className="mt-4 font-serif text-[42px] text-[var(--text)]">
              Moments That Made Impact
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="corporate-gallery"
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[260px] rounded-xl overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={`Corporate Event ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <CTA />
      <Footer />
      <FloatingContact />
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
