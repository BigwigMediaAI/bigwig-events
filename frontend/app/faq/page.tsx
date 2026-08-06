"use client";

import FloatingContact from "@/components/Floating";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServicePopup from "@/components/layout/Popup";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Why should I hire a professional event management company?",
    a: "A professional event management company handles everything from planning and venue selection to production, logistics, vendor coordination, and on-site execution. This ensures a seamless event experience while saving you time, reducing stress, and delivering exceptional results.",
  },
  {
    q: "What services does your event management company provide?",
    a: "We provide end-to-end event management services including corporate events, conferences, exhibitions, product launches, brand activations, annual day celebrations, award nights, corporate travel, digital events, live streaming, employee engagement programs, and event production.",
  },
  {
    q: "Are you one of the best corporate event management companies in India?",
    a: "We specialize in creating premium corporate events with innovative concepts, flawless execution, experienced professionals, and customized solutions designed to achieve your business objectives.",
  },
  {
    q: "Do you provide complete event planning and management services?",
    a: "Yes. We manage every aspect of your event including concept development, budgeting, venue sourcing, branding, entertainment, production, logistics, vendor management, and post-event support.",
  },
  {
    q: "Can you organize events anywhere in India?",
    a: "Yes. We organize corporate events, conferences, exhibitions, and business meetings across India while ensuring consistent quality, professional execution, and local coordination.",
  },
  {
    q: "What industries do you work with for corporate events?",
    a: "We work with IT companies, healthcare, manufacturing, finance, education, hospitality, startups, FMCG brands, automobile companies, real estate businesses, and multinational organizations.",
  },
  {
    q: "How much does corporate event management cost?",
    a: "The cost depends on factors such as event size, venue, production requirements, guest count, travel arrangements, entertainment, and customization. We provide transparent quotations based on your specific requirements.",
  },
  {
    q: "How far in advance should I book an event management company?",
    a: "For the best venue availability and planning, we recommend booking at least 2–6 months before your event. Larger conferences and exhibitions may require even earlier planning.",
  },
  {
    q: "Do you offer customized event planning services?",
    a: "Absolutely. Every event is customized according to your brand identity, business objectives, audience, budget, and desired experience to create a unique and memorable event.",
  },
  {
    q: "What makes your event management services different?",
    a: "Our focus on creativity, strategic planning, premium production, experienced event professionals, and seamless execution ensures every event delivers maximum impact and measurable business value.",
  },
  {
    q: "Can you manage both small and large corporate events?",
    a: "Yes. Whether it's a board meeting for 20 executives or a corporate conference with thousands of attendees, our team has the expertise to manage events of every scale.",
  },
  {
    q: "Do you provide venue selection services?",
    a: "Yes. We help clients identify and book the most suitable venue based on location, audience size, event objectives, budget, accessibility, and overall experience.",
  },
  {
    q: "Do you manage event vendors and suppliers?",
    a: "Yes. We coordinate with trusted vendors for staging, lighting, sound, catering, decoration, photography, entertainment, branding, transportation, and other event requirements.",
  },
  {
    q: "Can you handle last-minute event planning?",
    a: "Yes. Our experienced team can manage urgent event requirements while maintaining quality, professionalism, and smooth execution whenever timelines are limited.",
  },
  {
    q: "Do you provide event branding and creative design?",
    a: "Yes. We create customized event branding including stage design, digital creatives, backdrops, registration counters, signage, LED content, promotional materials, and branded experiences.",
  },
  {
    q: "Do you organize product launch events?",
    a: "Yes. We specialize in product launch events that combine creative storytelling, immersive experiences, media engagement, live demonstrations, and brand activation strategies.",
  },
  {
    q: "Can you organize conferences and business seminars?",
    a: "Yes. We manage conferences, seminars, leadership summits, business meetings, investor events, and corporate conventions with complete production and logistics support.",
  },
  {
    q: "Do you provide exhibition and trade show management?",
    a: "Yes. Our exhibition management services include stall design, visitor engagement, branding, logistics, registration, production, and complete event execution.",
  },
  {
    q: "Do you organize annual day celebrations for companies?",
    a: "Yes. We plan memorable annual day celebrations with entertainment, award ceremonies, employee engagement activities, stage production, and complete event management.",
  },
  {
    q: "Can you organize employee engagement events?",
    a: "Yes. We create engaging employee events including team-building activities, family day celebrations, recognition programs, wellness initiatives, and corporate outings.",
  },
  {
    q: "Do you offer event production services?",
    a: "Yes. We provide complete event production including stage setup, LED walls, sound systems, lighting, special effects, audiovisual equipment, and technical management.",
  },
  {
    q: "Can you arrange celebrity appearances and artist management?",
    a: "Yes. We coordinate celebrity appearances, keynote speakers, performers, musicians, anchors, influencers, and entertainers based on your event requirements.",
  },
  {
    q: "Do you provide photography and videography services?",
    a: "Yes. Our professional photography and videography team captures every important moment while also creating promotional videos, highlight reels, and branded event content.",
  },
  {
    q: "Can you manage event registration and attendee management?",
    a: "Yes. We provide complete registration solutions including online registration, QR check-in, attendee management, guest communication, and on-site support.",
  },
  {
    q: "Why should businesses invest in professional event management?",
    a: "Professional event management improves brand visibility, strengthens business relationships, enhances attendee engagement, increases event ROI, and ensures every event is professionally planned and successfully executed.",
  },
  {
    q: "What is a corporate brand activation event?",
    a: "A corporate brand activation event is a marketing experience designed to engage customers through interactive activities, live demonstrations, product experiences, and memorable brand interactions that increase awareness and customer loyalty.",
  },
  {
    q: "How do brand activation campaigns benefit businesses?",
    a: "Brand activation campaigns help businesses increase brand awareness, generate qualified leads, improve customer engagement, strengthen brand recall, and encourage direct customer interaction.",
  },
  {
    q: "Do you organize experiential marketing campaigns?",
    a: "Yes. We create experiential marketing campaigns that combine creativity, technology, and audience participation to deliver unforgettable brand experiences.",
  },
  {
    q: "Can you manage product launch activation events?",
    a: "Absolutely. We plan and execute product launch events that include creative concepts, media engagement, interactive experiences, stage production, and promotional campaigns.",
  },
  {
    q: "What types of corporate activations do you offer?",
    a: "We offer product launch activations, mall activations, retail activations, roadshows, trade show activations, experiential marketing campaigns, promotional events, and interactive brand experiences.",
  },
  {
    q: "Do you organize corporate training programs?",
    a: "Yes. We organize customized corporate training programs focused on leadership development, communication skills, employee engagement, team building, and professional growth.",
  },
  {
    q: "What are the benefits of corporate training programs?",
    a: "Corporate training programs improve employee performance, leadership skills, teamwork, productivity, communication, decision-making, and overall organizational effectiveness.",
  },
  {
    q: "Can you arrange leadership development workshops?",
    a: "Yes. We design leadership development workshops that help managers and executives strengthen decision-making, strategic thinking, communication, and team management skills.",
  },
  {
    q: "Do you provide executive coaching sessions?",
    a: "Yes. Our executive coaching programs help professionals enhance leadership capabilities, business communication, performance management, and personal development.",
  },
  {
    q: "Can corporate training programs be customized?",
    a: "Absolutely. Every training program is customized according to your organization's goals, employee roles, industry, and desired learning outcomes.",
  },
  {
    q: "What is corporate travel management?",
    a: "Corporate travel management includes planning business trips, booking flights and hotels, arranging transportation, managing travel logistics, and ensuring a seamless travel experience for executives and employees.",
  },
  {
    q: "Do you provide corporate travel and MICE services?",
    a: "Yes. We offer complete corporate travel and MICE solutions including meetings, incentives, conferences, exhibitions, accommodation, transportation, and destination management.",
  },
  {
    q: "Can you arrange luxury corporate travel?",
    a: "Yes. We provide luxury corporate travel services including premium flights, executive hotels, chauffeur services, airport assistance, and VIP travel experiences.",
  },
  {
    q: "Do you handle international business travel?",
    a: "Yes. We manage domestic and international corporate travel with complete itinerary planning, accommodation, transportation, and travel coordination.",
  },
  {
    q: "What are MICE event management services?",
    a: "MICE stands for Meetings, Incentives, Conferences, and Exhibitions. Our MICE services include event planning, travel management, venue coordination, hospitality, logistics, and complete event execution.",
  },
  {
    q: "What are digital event management services?",
    a: "Digital event management includes planning and executing virtual conferences, webinars, hybrid events, live streaming, online product launches, and interactive digital experiences.",
  },
  {
    q: "Do you organize virtual corporate events?",
    a: "Yes. We organize engaging virtual corporate events including webinars, online conferences, digital product launches, employee town halls, and virtual award ceremonies.",
  },
  {
    q: "What is a hybrid event?",
    a: "A hybrid event combines physical and virtual audiences, allowing attendees to participate either in person or online through live streaming and interactive digital platforms.",
  },
  {
    q: "Do you provide live streaming services for events?",
    a: "Yes. We offer professional live streaming services with high-quality video production, multi-camera setups, audience interaction, and reliable online broadcasting.",
  },
  {
    q: "Can you manage online conferences and webinars?",
    a: "Yes. We provide complete webinar and online conference management including registration, speaker coordination, technical support, audience engagement, and post-event analytics.",
  },
  {
    q: "Do you provide event analytics after digital events?",
    a: "Yes. We provide detailed event analytics including attendee participation, engagement metrics, viewing duration, audience interaction, and performance reports.",
  },
  {
    q: "Can you create custom event branding for digital events?",
    a: "Absolutely. We design customized digital branding including virtual backgrounds, event microsites, registration pages, presentation templates, and branded online experiences.",
  },
  {
    q: "Do you provide event technology solutions?",
    a: "Yes. We provide registration platforms, event apps, audience engagement tools, QR check-in systems, virtual event platforms, and interactive event technology.",
  },
  {
    q: "How do you ensure successful event execution?",
    a: "Our experienced event managers follow a structured planning process covering strategy, budgeting, logistics, vendor management, production, technical support, and on-site coordination to ensure flawless event execution.",
  },
  {
    q: "Why should I choose Bigwig Events for corporate event management?",
    a: "Bigwig Events delivers innovative event concepts, premium production, experienced event professionals, customized planning, and end-to-end event management services that help businesses create memorable and successful corporate experiences.",
  },
  {
    q: "Do you organize luxury corporate events?",
    a: "Yes. We specialize in luxury corporate events that combine premium venues, creative event design, world-class entertainment, elegant décor, and flawless execution to create unforgettable business experiences.",
  },
  {
    q: "Can you manage large-scale conferences and conventions?",
    a: "Absolutely. We manage conferences, conventions, leadership summits, and business forums of every scale with complete planning, production, logistics, and attendee management.",
  },
  {
    q: "Do you organize exhibition stalls and trade fairs?",
    a: "Yes. Our exhibition management services include stall design, fabrication, branding, visitor engagement, logistics, registration, and complete on-ground execution.",
  },
  {
    q: "What is included in your event production services?",
    a: "Our event production services include stage design, sound systems, lighting, LED walls, audiovisual production, special effects, event branding, and technical support.",
  },
  {
    q: "Can you manage business networking events?",
    a: "Yes. We organize networking events, B2B meetings, leadership forums, investor meets, and corporate networking sessions designed to build valuable business relationships.",
  },
  {
    q: "Do you provide event logistics management?",
    a: "Yes. We handle transportation, accommodation, venue logistics, equipment movement, vendor coordination, guest management, and event scheduling for seamless execution.",
  },
  {
    q: "Can you arrange VIP hospitality for corporate guests?",
    a: "Yes. We provide premium hospitality services including airport assistance, luxury transportation, executive accommodation, concierge support, and personalized guest experiences.",
  },
  {
    q: "Do you organize destination corporate events?",
    a: "Yes. We plan destination corporate events across India and international locations, managing travel, accommodation, venues, activities, and complete event coordination.",
  },
  {
    q: "Can you organize corporate offsite events?",
    a: "Absolutely. We create engaging corporate offsites that combine business meetings, team-building activities, entertainment, and recreational experiences.",
  },
  {
    q: "Do you provide event registration software?",
    a: "Yes. We provide online registration platforms, QR code check-ins, attendee management systems, badge printing, and digital event registration solutions.",
  },
  {
    q: "Can you help with event branding and marketing?",
    a: "Yes. We develop event branding strategies including invitations, digital campaigns, event websites, signage, stage branding, social media creatives, and promotional materials.",
  },
  {
    q: "How do you ensure smooth event coordination?",
    a: "Our experienced event managers follow detailed planning timelines, vendor coordination, technical rehearsals, contingency planning, and real-time event monitoring.",
  },
  {
    q: "Do you provide complete event budgeting services?",
    a: "Yes. We help businesses optimize their event budget while maintaining quality by selecting the right vendors, venues, production solutions, and event resources.",
  },
  {
    q: "Can you organize award nights and gala dinners?",
    a: "Yes. We design elegant award ceremonies and gala dinners featuring stage production, entertainment, guest management, premium dining experiences, and event branding.",
  },
  {
    q: "Do you manage celebrity performances at corporate events?",
    a: "Yes. We coordinate celebrity appearances, keynote speakers, entertainers, performers, anchors, influencers, and live artists for corporate events.",
  },
  {
    q: "What types of employee engagement events do you organize?",
    a: "We organize annual day celebrations, family day events, sports days, team-building activities, recognition ceremonies, wellness programs, and festive celebrations.",
  },
  {
    q: "Do you provide event photography and promotional videos?",
    a: "Yes. We provide professional event photography, cinematic videography, drone coverage, promotional films, highlight reels, and social media content creation.",
  },
  {
    q: "Can you manage multilingual corporate events?",
    a: "Yes. We provide multilingual hosts, translators, interpretation services, bilingual event materials, and technical support for international audiences.",
  },
  {
    q: "How do you measure event success?",
    a: "We evaluate event success through attendee engagement, lead generation, audience feedback, participation rates, business objectives, social media reach, and post-event analytics.",
  },
  {
    q: "Do you offer sustainable event management solutions?",
    a: "Yes. We encourage eco-friendly event planning through digital invitations, sustainable décor, waste reduction, reusable materials, and environmentally responsible event practices.",
  },
  {
    q: "Can you organize business award ceremonies?",
    a: "Yes. We organize corporate award nights, recognition ceremonies, leadership awards, employee appreciation events, and business excellence celebrations.",
  },
  {
    q: "Do you provide event risk management services?",
    a: "Yes. Our event planning process includes safety planning, emergency preparedness, crowd management, security coordination, and contingency planning.",
  },
  {
    q: "Can startups hire your event management services?",
    a: "Absolutely. We work with startups, SMEs, and large enterprises by providing customized event solutions that align with their goals and budget.",
  },
  {
    q: "How do I choose the best event management company?",
    a: "Look for an experienced event management company with proven expertise, creative solutions, transparent pricing, professional execution, positive client reviews, and end-to-end event management capabilities.",
  },
  {
    q: "How can I get started with Bigwig Events?",
    a: "Simply contact our team with your event requirements. We'll understand your objectives, discuss ideas, recommend suitable solutions, and provide a customized proposal for your event.",
  },
  {
    q: "Which cities do you provide event management services in?",
    a: "We provide professional event management services across Delhi, Noida, Gurugram, Faridabad, Ghaziabad, NCR, and major cities across India. We also manage destination and international corporate events based on client requirements.",
  },
  {
    q: "Are your event management services available across India?",
    a: "Yes. Our experienced team plans and executes corporate events, exhibitions, conferences, product launches, and destination events across India with consistent quality and professional execution.",
  },
  {
    q: "How much does it cost to hire a corporate event management company?",
    a: "The cost depends on the event size, venue, guest count, production requirements, entertainment, travel, and customization. We provide transparent pricing with customized proposals based on your business objectives.",
  },
  {
    q: "Do you provide free event planning consultations?",
    a: "Yes. We offer an initial consultation to understand your event objectives, audience, budget, and expectations before recommending the most suitable event solutions.",
  },
  {
    q: "How long does it take to plan a corporate event?",
    a: "Planning timelines vary depending on the event type. Small business events may require 2–4 weeks, while conferences, exhibitions, and large corporate events typically require 2–6 months of planning.",
  },
  {
    q: "Can you organize last-minute corporate events?",
    a: "Yes. Our experienced event management team can successfully execute urgent projects while maintaining quality, creativity, and seamless coordination.",
  },
  {
    q: "Do you manage venue booking for corporate events?",
    a: "Yes. We help businesses select and book the ideal venue based on event objectives, guest capacity, location, accessibility, budget, and brand experience.",
  },
  {
    q: "Can you arrange hotels and accommodation for event attendees?",
    a: "Absolutely. We coordinate hotel bookings, executive accommodations, guest hospitality, airport transfers, and transportation for corporate delegates and VIP guests.",
  },
  {
    q: "Do you provide airport pickup and transportation services?",
    a: "Yes. We arrange airport transfers, chauffeur-driven vehicles, shuttle services, VIP transportation, and complete travel logistics for event participants.",
  },
  {
    q: "Can your team manage international speakers and delegates?",
    a: "Yes. We coordinate travel, accommodation, visa support, hospitality, technical requirements, and on-site assistance for international speakers and business delegates.",
  },
  {
    q: "Do you provide event staff and professional hosts?",
    a: "Yes. We provide experienced event managers, anchors, emcees, registration staff, hospitality teams, ushers, volunteers, and technical professionals.",
  },
  {
    q: "Can you arrange entertainment for corporate events?",
    a: "Yes. We organize live bands, celebrity performers, motivational speakers, DJs, cultural performances, stand-up comedians, and customized entertainment experiences.",
  },
  {
    q: "Do you provide LED walls, sound systems, and lighting?",
    a: "Yes. We provide professional audio-visual production including LED video walls, stage lighting, sound systems, projection mapping, and special effects.",
  },
  {
    q: "Can you customize event themes according to our brand?",
    a: "Absolutely. Every event theme is customized to reflect your brand identity, campaign objectives, company culture, and audience expectations.",
  },
  {
    q: "Do you organize festive celebrations for corporate companies?",
    a: "Yes. We organize Diwali celebrations, Christmas parties, New Year events, Holi celebrations, cultural festivals, family days, and seasonal corporate festivities.",
  },
  {
    q: "How do you ensure event quality and client satisfaction?",
    a: "We follow a structured planning process, experienced project management, vendor quality checks, technical rehearsals, and continuous client communication to deliver exceptional event experiences.",
  },
  {
    q: "Can you help increase brand visibility through events?",
    a: "Yes. Our event strategies combine creative branding, audience engagement, experiential marketing, digital promotion, and interactive experiences to maximize brand visibility and business impact.",
  },
  {
    q: "Do you provide post-event reports and analytics?",
    a: "Yes. We provide detailed post-event reports covering attendance, audience engagement, event performance, lead generation, feedback, and measurable business outcomes.",
  },
  {
    q: "Why should companies invest in experiential marketing events?",
    a: "Experiential marketing creates meaningful customer interactions, strengthens brand loyalty, increases engagement, improves brand recall, and delivers measurable marketing results.",
  },
  {
    q: "What makes Bigwig Events a trusted event management company?",
    a: "Our experienced team, creative event concepts, premium execution, transparent communication, end-to-end event management, and client-focused approach make us a trusted partner for businesses across industries.",
  },
  {
    q: "How do I request a quotation for my event?",
    a: "Simply contact us through our website, phone, or email with your event details. Our team will understand your requirements and prepare a customized proposal tailored to your objectives and budget.",
  },
  {
    q: "Can you manage recurring corporate events every year?",
    a: "Yes. We build long-term partnerships with organizations by managing annual conferences, award nights, employee engagement programs, product launches, and recurring business events.",
  },
  {
    q: "Do you sign confidentiality agreements for corporate clients?",
    a: "Yes. We understand the importance of confidentiality and are happy to work under NDAs and corporate compliance requirements whenever required.",
  },
  {
    q: "Can you manage multiple events simultaneously?",
    a: "Absolutely. Our experienced event management team has the capability to plan and execute multiple corporate events simultaneously without compromising quality or attention to detail.",
  },
  {
    q: "How do I book Bigwig Events for my next corporate event?",
    a: "Getting started is simple. Contact our team, share your event requirements, preferred dates, location, and objectives. We'll create a customized event strategy, provide a detailed proposal, and manage everything from planning to successful execution.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState(10);

  return (
    <div className="bg-[var(--bg)]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden pt-12">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/faqpage.png')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex items-center px-6 md:px-12 lg:px-16">
          <div className="max-w-[650px]">
            <p className="text-[var(--primary)] uppercase tracking-[5px] text-xs md:text-sm mb-5">
              Help Center
            </p>

            <h1 className="font-serif  text-[38px] md:text-[50px] lg:text-[60px] leading-[1.1] text-[var(--text)] font-light">
              Frequently Asked
              <br />
              <span className="italic text-[var(--primary)]">Questions</span>
            </h1>

            <p className="mt-6 text-[var(--text-light)] text-base md:text-lg leading-8 max-w-[540px]">
              Everything you need to know about our services, planning process,
              and how we bring your events to life.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 h-12 px-8 border border-[var(--primary)] text-[var(--primary)] uppercase tracking-wider text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {/* FAQ SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#faf8f5] via-white to-[#faf8f5]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <p className="uppercase tracking-[5px] text-sm text-[var(--primary)]">
              Knowledge Base
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--text)] font-light leading-tight">
              Everything You Need
              <span className="italic text-[var(--primary)]"> To Know</span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[var(--text-light)]">
              Browse answers to the most frequently asked questions about
              corporate events, conferences, exhibitions, brand activations,
              employee engagement, digital experiences, corporate travel, and
              event management services.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-5">
            {faqs.slice(0, visibleCount).map((faq, i) => {
              const isOpen = active === i;

              return (
                <div
                  key={i}
                  className={`
              group
              overflow-hidden
              rounded-2xl
              border
              transition-all
              duration-500
              ${
                isOpen
                  ? "border-[var(--primary)] bg-white shadow-2xl"
                  : "border-[#ebe2d6] bg-white hover:border-[var(--primary)]/40 hover:shadow-lg"
              }
            `}
                >
                  {/* Question */}
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-5 p-6 md:p-7 text-left"
                  >
                    <div className="flex items-start gap-5 flex-1">
                      {/* Number */}
                      <div
                        className={`
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    text-sm
                    font-bold
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg"
                        : "border-[rgba(180,140,90,.25)] text-[var(--primary)] bg-[#faf8f5]"
                    }
                  `}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* Question */}
                      <h3
                        className={`
                    text-[17px]
                    md:text-[20px]
                    leading-8
                    font-medium
                    transition-colors
                    duration-300
                    ${
                      isOpen
                        ? "text-[var(--primary)]"
                        : "text-[var(--text)] group-hover:text-[var(--primary)]"
                    }
                  `}
                      >
                        {faq.q}
                      </h3>
                    </div>

                    {/* Icon */}
                    <div
                      className={`
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "bg-[var(--primary)] text-white rotate-45"
                      : "bg-[rgba(180,140,90,.08)] text-[var(--primary)]"
                  }
                `}
                    >
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M9 3v12" />
                        <path d="M3 9h12" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                overflow-hidden
                transition-all
                duration-500
                ease-in-out
                ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
              `}
                  >
                    <div className="px-6 md:px-24 pb-8">
                      <div className="h-px w-full bg-[rgba(180,140,90,.15)] mb-6" />

                      <p className="text-[15px] md:text-base leading-8 text-[var(--text-light)]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Button */}
          <div className="mt-16 flex justify-center">
            {visibleCount < faqs.length ? (
              <button
                onClick={() =>
                  setVisibleCount((prev) => Math.min(prev + 10, faqs.length))
                }
                className="
            group
            relative
            overflow-hidden
            rounded-full
            border
            border-[var(--primary)]
            px-10
            py-4
            text-sm
            font-semibold
            uppercase
            tracking-[2px]
            text-[var(--primary)]
            transition-all
            duration-500
            hover:text-white
          "
              >
                <span className="absolute inset-0 bg-[var(--primary)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                <span className="relative flex items-center gap-3">
                  View 10 More
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  >
                    <path d="M9 5v8" />
                    <path d="M5 9l4 4 4-4" />
                  </svg>
                </span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setVisibleCount(10);
                  setActive(0);

                  window.scrollTo({
                    top: 650,
                    behavior: "smooth",
                  });
                }}
                className="
            rounded-full
            bg-[var(--primary)]
            px-10
            py-4
            text-sm
            font-semibold
            uppercase
            tracking-[2px]
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
          "
              >
                View Less
              </button>
            )}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <FloatingContact />
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
