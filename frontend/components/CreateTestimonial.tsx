"use client";

import { X, ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "./ui/Button";

interface TestimonialData {
  _id?: string;
  name: string;
  message: string;
  image?: string;
  designation?: string;
  rating?: number;
  isActive: boolean;
}

interface Props {
  initialData?: TestimonialData | null;
  onClose: () => void;
  onSuccess: () => void;
}

export default function TestimonialModal({
  initialData,
  onClose,
  onSuccess,
}: Props) {
  const [name, setName] = useState("");

  const [message, setMessage] = useState("");

  const [designation, setDesignation] = useState("");

  const [rating, setRating] = useState(5);

  const [isActive, setIsActive] = useState(true);

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [existingImage, setExistingImage] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  /* Prefill */
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);

      setMessage(initialData.message);

      setDesignation(initialData.designation || "");

      setRating(initialData.rating || 5);

      setIsActive(initialData.isActive);

      setExistingImage(initialData.image || null);
    }
  }, [initialData]);

  /* Submit */
  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) {
      alert("Name and message are required");

      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", name);

      formData.append("message", message);

      formData.append("designation", designation);

      formData.append("rating", String(rating));

      formData.append("isActive", String(isActive));

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const url = initialData
        ? `${process.env.NEXT_PUBLIC_API_BASE}/testimonial/${initialData._id}`
        : `${process.env.NEXT_PUBLIC_API_BASE}/testimonial`;

      const res = await fetch(url, {
        method: initialData ? "PUT" : "POST",

        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      onSuccess();
      onClose();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div
        className="
          bg-[var(--white)]
          border border-[var(--border)]
          rounded-2xl
          w-full max-w-2xl
          max-h-[95vh]
          overflow-hidden
          flex flex-col
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex justify-between items-start px-6 py-5 border-b border-[var(--border)]">
          <div>
            <h2 className="font-serif text-2xl text-[var(--text)]">
              {initialData ? "Edit Testimonial" : "Create Testimonial"}
            </h2>

            <p className="text-sm text-[var(--muted)] mt-1">
              Client feedback shown on your website
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-[var(--muted)] hover:text-[var(--primary)]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {/* Client Info */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-[2px] text-[var(--muted)]">
              Client Details
            </h3>

            <input
              placeholder="Client name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full h-12 px-4
                border border-[var(--border)]
                bg-[var(--white)]
                text-[var(--text)]
                outline-none
                focus:border-[var(--primary)]
              "
            />

            <input
              placeholder="Designation (optional)"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="
                w-full h-12 px-4
                border border-[var(--border)]
                bg-[var(--white)]
                text-[var(--text)]
                outline-none
                focus:border-[var(--primary)]
              "
            />
          </section>

          {/* Message */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-[2px] text-[var(--muted)]">
              Message
            </h3>

            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write client feedback..."
              className="
                w-full p-4
                border border-[var(--border)]
                bg-[var(--white)]
                text-[var(--text)]
                outline-none
                resize-none
                focus:border-[var(--primary)]
              "
            />
          </section>

          {/* Meta */}
          <section className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-[2px] text-[var(--muted)] block mb-2">
                Rating
              </label>

              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="
                  w-full h-12 px-4
                  border border-[var(--border)]
                  bg-[var(--white)]
                  text-[var(--text)]
                  outline-none
                "
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <option key={item} value={item}>
                    {item} Star
                    {item > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <label className="flex items-center gap-3 text-sm text-[var(--text)] cursor-pointer">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="accent-[var(--primary)]"
                />
                Active on website
              </label>
            </div>
          </section>

          {/* Upload */}
          <section>
            <label className="text-xs uppercase tracking-[2px] text-[var(--muted)] block mb-3">
              Client Image
            </label>

            <label
              htmlFor="testimonial-image"
              className="
                flex flex-col items-center justify-center
                h-40
                border-2 border-dashed border-[var(--border)]
                rounded-2xl
                bg-[var(--bg-secondary)]
                cursor-pointer
                hover:border-[var(--primary)]
                transition
              "
            >
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : existingImage ? (
                <img
                  src={existingImage}
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : (
                <>
                  <ImageIcon size={24} className="text-[var(--muted)] mb-2" />

                  <p className="text-sm text-[var(--text-light)]">
                    Upload client image
                  </p>
                </>
              )}

              <input
                id="testimonial-image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              />
            </label>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-[var(--border)] px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="
              h-11 px-6
              border border-[var(--border)]
              text-[var(--text-light)]
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
            "
          >
            Cancel
          </button>

          <Button
            onClick={handleSubmit}
            text={
              loading
                ? "Saving..."
                : initialData
                  ? "Update Testimonial"
                  : "Create Testimonial"
            }
          />
        </div>
      </div>
    </div>
  );
}
