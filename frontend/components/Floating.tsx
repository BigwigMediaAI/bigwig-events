"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, Calendar } from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:block">
        {open && (
          <div
            className="fixed bottom-28 right-6 w-[340px] rounded-2xl shadow-2xl overflow-hidden z-50 border"
            style={{
              background: "var(--bg)",
              borderColor: "rgba(180,140,90,0.15)",
            }}
          >
            {/* HEADER */}
            <div
              className="px-6 py-5 text-center"
              style={{
                background: "var(--primary)",
                color: "#fff",
              }}
            >
              <h3 className="font-serif text-xl">Let's Connect</h3>
              <p className="text-sm opacity-90 mt-1">
                Choose your preferred way
              </p>
            </div>

            {/* OPTIONS */}
            <div>
              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=918800818156"
                target="_blank"
                className="flex items-center gap-4 px-6 py-5 border-b transition-all duration-300 hover:bg-[rgba(180,140,90,0.04)]"
                style={{
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(180,140,90,0.12)",
                    color: "var(--primary)",
                  }}
                >
                  <MessageCircle size={20} />
                </div>

                <div>
                  <p className="font-medium text-[var(--text)]">WhatsApp Us</p>
                  <p className="text-sm text-[var(--text-light)]">
                    Quick support anytime
                  </p>
                </div>
              </a>

              {/* Call */}
              <a
                href="tel:+918800818156"
                className="flex items-center gap-4 px-6 py-5 border-b transition-all duration-300 hover:bg-[rgba(180,140,90,0.04)]"
                style={{
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(180,140,90,0.12)",
                    color: "var(--primary)",
                  }}
                >
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-medium text-[var(--text)]">Call Us</p>
                  <p className="text-sm text-[var(--text-light)]">
                    +91 88008 18156
                  </p>
                </div>
              </a>

              {/* Meeting */}
              <a
                href="https://api.whatsapp.com/send?phone=918800818156&text=Hello,%20I%20want%20to%20book%20a%20consultation"
                target="_blank"
                className="flex items-center gap-4 px-6 py-5 transition-all duration-300 hover:bg-[rgba(180,140,90,0.04)]"
              >
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(180,140,90,0.12)",
                    color: "var(--primary)",
                  }}
                >
                  <Calendar size={20} />
                </div>

                <div>
                  <p className="font-medium text-[var(--text)]">
                    Book Consultation
                  </p>
                  <p className="text-sm text-[var(--text-light)]">
                    Plan your event with us
                  </p>
                </div>
              </a>
            </div>
          </div>
        )}

        {/* FLOAT BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="fixed bottom-12 right-6 h-14 w-14 rounded-full flex items-center justify-center shadow-xl z-50 transition-all duration-300"
          style={{
            background: "var(--primary)",
            color: "#fff",
          }}
        >
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </button>
      </div>

      {/* MOBILE */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50">
        <div
          className="flex border-t"
          style={{
            background: "var(--bg)",
            borderColor: "rgba(0,0,0,0.08)",
          }}
        >
          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=918800818156"
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 py-4 font-medium"
            style={{
              color: "var(--primary)",
            }}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+918800818156"
            className="flex-1 flex items-center justify-center gap-2 py-4 font-medium"
            style={{
              background: "var(--primary)",
              color: "#fff",
            }}
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </>
  );
}
