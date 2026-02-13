"use client";

import { X, ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

interface PortfolioData {
  _id?: string;
  title: string;
  category: string;
  image?: string;
}

interface Props {
  initialData?: PortfolioData | null;
  onClose: () => void;
  onSuccess: () => void;
}

const PortfolioModal = ({ initialData, onClose, onSuccess }: Props) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  /* ================= PREFILL (EDIT MODE) ================= */
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setCategory(initialData.category);
      setExistingImage(initialData.image || null);
    }
  }, [initialData]);

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!title || !category) {
      alert("Title and category are required");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);

      if (imageFile) formData.append("image", imageFile);

      const url = initialData
        ? `${process.env.NEXT_PUBLIC_API_BASE}/portfolio/${initialData._id}`
        : `${process.env.NEXT_PUBLIC_API_BASE}/portfolio`;

      const res = await fetch(url, {
        method: initialData ? "PUT" : "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      onSuccess();
      onClose();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to save portfolio");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-[var(--bg)] text-[var(--white)] w-full max-w-xl rounded-2xl shadow-2xl border border-white/10 flex flex-col max-h-[95vh] overflow-hidden">
        {/* ================= HEADER ================= */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-white/10">
          <div>
            <h2 className="text-lg font-semibold">
              {initialData ? "Edit Portfolio" : "Create Portfolio"}
            </h2>
            <p className="text-xs text-[var(--muted)] mt-1">
              Showcase your event work
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-[var(--muted)] hover:text-[var(--secondary)] transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* ================= BODY ================= */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 scrollbar-hide">
          {/* TITLE */}
          <div>
            <label className="text-xs uppercase text-[var(--muted)] tracking-wide mb-1 block">
              Title
            </label>

            <input
              placeholder="Event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                w-full
                bg-black/40
                border border-white/10
                rounded-lg px-4 py-3
                text-[var(--white)]
                focus:outline-none
                focus:ring-1 focus:ring-[var(--secondary)]
              "
            />
          </div>

          {/* CATEGORY */}
          {/* CATEGORY */}
          <div>
            <label className="text-xs uppercase text-[var(--muted)] tracking-wide mb-1 block">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
      w-full
      bg-black/40
      border border-white/10
      rounded-lg px-4 py-3
      text-[var(--white)]
      focus:outline-none
      focus:ring-1 focus:ring-[var(--secondary)]
    "
            >
              <option value="">Select category</option>
              <option value="Corporate Events">Corporate Events</option>
              <option value="Corporate Travels">Corporate Travels</option>
              <option value="Corporate Training">Corporate Training</option>
              <option value="Corporate Festivities">
                Corporate Festivities
              </option>
              <option value="Corporate Activations">
                Corporate Activations
              </option>
            </select>
          </div>

          {/* IMAGE UPLOAD */}
          <div>
            <label className="text-xs uppercase text-[var(--muted)] tracking-wide mb-2 block">
              Portfolio Image
            </label>

            <label
              htmlFor="portfolio-image"
              className="
                flex flex-col items-center justify-center
                w-full h-40
                border-2 border-dashed border-white/10
                rounded-xl cursor-pointer
                bg-black/40
                hover:border-[var(--secondary)]
                transition
              "
            >
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : existingImage ? (
                <img
                  src={existingImage}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <>
                  <ImageIcon className="text-[var(--muted)] mb-2" />
                  <p className="text-sm text-[var(--muted)]">
                    Click to upload portfolio image
                  </p>
                  <p className="text-xs text-[var(--muted)] mt-1">
                    JPG or PNG • High resolution recommended
                  </p>
                </>
              )}

              <input
                id="portfolio-image"
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="border-t border-white/10 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="
              px-4 py-2 rounded-lg
              border border-white/10
              text-[var(--muted)]
              hover:border-[var(--secondary)]
              hover:text-[var(--secondary)]
              transition
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
                  ? "Update Portfolio"
                  : "Create Portfolio"
            }
            className="bg-[var(--secondary)] text-black hover:opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
