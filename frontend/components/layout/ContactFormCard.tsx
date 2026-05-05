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

      if (!res.ok) {
        throw new Error(data.message);
      }

      setStep("OTP");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

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

      if (!res.ok) {
        throw new Error(data.message);
      }

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

      alert("Thank you! Your inquiry has been submitted.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-[var(--border)] rounded-3xl p-8 md:p-10 shadow-sm">
      <p className="text-[var(--primary)] uppercase tracking-[5px] text-sm font-medium mb-3">
        Start Your Journey
      </p>

      <h3 className="font-serif text-[34px] md:text-[42px] leading-[1.2] text-[var(--text)] font-light mb-8">
        Plan Your
        <span className="italic text-[var(--primary)]"> Dream Event</span>
      </h3>

      {error && (
        <p className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      {step === "FORM" && (
        <form onSubmit={handleSendOTP} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <Input
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Event Type"
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            placeholder="Wedding / Corporate / Celebration"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Event Date"
              name="eventDate"
              type="date"
              value={form.eventDate}
              onChange={handleChange}
            />

            <Input
              label="Location"
              name="eventLocation"
              value={form.eventLocation}
              onChange={handleChange}
              placeholder="Delhi / Dubai / Destination"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-[var(--text)]">
              Tell Us About Your Event
            </label>

            <textarea
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              placeholder="Share your vision, guest count, ideas..."
              className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)]"
            />
          </div>

          <Button
            type="submit"
            text={loading ? "Sending OTP..." : "Submit & Verify"}
          />
        </form>
      )}

      {step === "OTP" && (
        <div className="space-y-5">
          <Input
            label="Enter 6-Digit OTP"
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

/* INPUT */

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
      <label className="mb-2 block text-sm text-[var(--text)]">{label}</label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)]"
      />
    </div>
  );
};
