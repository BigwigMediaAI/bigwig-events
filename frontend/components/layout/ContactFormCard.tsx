"use client";

import { useState } from "react";
import Button from "../ui/Button";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

const ContactFormCard = () => {
  const [step, setStep] = useState<"FORM" | "OTP">("FORM");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= SEND OTP ================= */
  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.phone) {
      setError("Name, Email and Phone are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/lead/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setStep("OTP");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  /* ================= VERIFY OTP ================= */
  const handleVerifyOTP = async () => {
    setError("");

    if (otp.length !== 6) {
      setError("Enter valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/lead/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          otp,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setStep("FORM");
      setForm({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        eventLocation: "",
        message: "",
      });
      setOtp("");
      alert("✅ Thank you! Your event inquiry has been submitted.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <h3 className="mb-6 text-2xl font-semibold text-white">
        Plan Your Event
      </h3>

      {error && (
        <p className="mb-4 text-sm text-red-400 bg-red-400/10 px-3 py-2 rounded">
          {error}
        </p>
      )}

      {step === "FORM" && (
        <form onSubmit={handleSendOTP} className="space-y-5">
          {/* NAME + PHONE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          {/* EMAIL */}
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          {/* EVENT TYPE */}
          <Input
            label="Event Type"
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            placeholder="Wedding / Corporate / Birthday"
          />

          {/* DATE + LOCATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Event Date"
              name="eventDate"
              type="date"
              value={form.eventDate}
              onChange={handleChange}
            />
            <Input
              label="Event Location"
              name="eventLocation"
              value={form.eventLocation}
              onChange={handleChange}
              placeholder="Dubai, UAE"
            />
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your event..."
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]/40"
          />

          <Button
            type="submit"
            text={loading ? "Sending OTP..." : "Submit & Verify"}
          />
        </form>
      )}

      {step === "OTP" && (
        <div className="space-y-4">
          <Input
            label="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <Button
            text={loading ? "Verifying..." : "Verify OTP"}
            onClick={handleVerifyOTP}
          />
        </div>
      )}
    </div>
  );
};

export default ContactFormCard;

/* ================= INPUT ================= */

interface InputProps {
  label: string;
  name?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
}: InputProps) => {
  return (
    <div>
      <label className="mb-2 block text-sm text-gray-300">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]/40"
      />
    </div>
  );
};
