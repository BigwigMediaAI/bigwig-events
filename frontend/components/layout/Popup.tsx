"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import Button from "../ui/Button";

export default function ServicePopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    message: "",
  });

  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"FORM" | "OTP">("FORM");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setMounted(false), 300);
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen && !mounted) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full rounded-lg border border-[var(--border)]  px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:outline-none transition";

  /* SEND OTP */
  const handleSendOTP = async () => {
    setError("");

    if (!form.name || !form.email || !form.phone) {
      setError("Name, Email and Phone are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/lead/send-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setStep("OTP");
    } catch (err: any) {
      setError(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  /* VERIFY OTP */
  const handleVerifyOTP = async () => {
    setError("");

    if (otp.length !== 6) {
      setError("Enter valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/lead/verify-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: form.email,
            otp,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      onClose();

      setStep("FORM");
      setOtp("");

      setForm({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        eventLocation: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-xl rounded-2xl border border-[var(--border)] bg-[var(--white)] shadow-2xl transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-5"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-5">
          <div className="flex items-center gap-3">
            <Sparkles size={18} className="text-[var(--primary)]" />

            <h2 className="text-lg font-semibold text-[var(--text)]">
              {step === "FORM" ? "Plan Your Event" : "Verify OTP"}
            </h2>
          </div>

          <button onClick={onClose} className="text-[var(--primary)]">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {error && (
            <p className="text-sm text-red-500 bg-red-50 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          {step === "FORM" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={inputClass}
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={inputClass}
                />
              </div>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={inputClass}
              />

              <input
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                placeholder="Event Type"
                className={inputClass}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="eventDate"
                  value={form.eventDate}
                  onChange={handleChange}
                  className={inputClass}
                />

                <input
                  name="eventLocation"
                  value={form.eventLocation}
                  onChange={handleChange}
                  placeholder="Event Location"
                  className={inputClass}
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your event..."
                rows={4}
                className={inputClass}
              />

              <Button
                text={loading ? "Sending OTP..." : "Send OTP"}
                onClick={handleSendOTP}
              />
            </>
          )}

          {step === "OTP" && (
            <>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                className={inputClass}
              />

              <Button
                text={loading ? "Verifying..." : "Verify OTP"}
                onClick={handleVerifyOTP}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
