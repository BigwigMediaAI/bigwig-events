"use client";

import { X, ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "./ui/Button";

interface PortfolioData {
  _id?: string;
  category: string;
  images?: string[];
}

interface Props {
  initialData?: PortfolioData | null;
  onClose: () => void;
  onSuccess: () => void;
}

export default function PortfolioModal({
  initialData,
  onClose,
  onSuccess,
}: Props) {
  const [category, setCategory] = useState("");
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  /* Prefill */
  useEffect(() => {
    if (initialData) {
      setCategory(initialData.category);
      setExistingImages(initialData.images || []);
    }
  }, [initialData]);

  const handleSubmit = async () => {
    if (!category.trim()) {
      alert("Category is required");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("category", category);

      imageFiles.forEach((file) => {
        formData.append("images", file); // 🔥 important
      });

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
          w-full max-w-xl
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
              {initialData ? "Edit Portfolio" : "Create Portfolio"}
            </h2>

            <p className="text-sm text-[var(--muted)] mt-1">
              Showcase your best work
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
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Category */}
          <div>
            <label className="text-xs uppercase tracking-[2px] text-[var(--muted)] mb-2 block">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
      w-full h-12 px-4
      border border-[var(--border)]
      bg-[var(--white)]
      text-[var(--text)]
      outline-none
      focus:border-[var(--primary)]
      transition-all duration-300
    "
            >
              <option value="">Select category</option>

              <option value="Corporate Events">Corporate Events</option>
              <option value="Luxury Weddings">Luxury Weddings</option>
              <option value="Social Celebrations">Social Celebrations</option>
              <option value="MICE">MICE</option>
              <option value="Brand Activations">Brand Activations</option>
              <option value="Destination Experiences">
                Destination Experiences
              </option>
            </select>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[2px] text-[var(--muted)] mb-3 block">
              Portfolio Images
            </label>

            <label
              htmlFor="portfolio-image"
              className="
      flex flex-col items-center justify-center
      h-44
      border-2 border-dashed border-[var(--border)]
      rounded-2xl
      bg-[var(--bg-secondary)]
      cursor-pointer
      hover:border-[var(--primary)]
      transition
    "
            >
              <ImageIcon size={24} className="text-[var(--muted)] mb-2" />
              <p className="text-sm text-[var(--text-light)]">
                Upload multiple images
              </p>
              <p className="text-xs text-[var(--muted)] mt-1">JPG or PNG</p>

              <input
                id="portfolio-image"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  setImageFiles(Array.from(e.target.files || []))
                }
              />
            </label>

            {/* Preview */}
            {/* Preview */}
            {(imageFiles.length > 0 || existingImages.length > 0) && (
              <div className="grid grid-cols-3 gap-3 mt-4">
                {/* New Images */}
                {imageFiles.map((file, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={URL.createObjectURL(file)}
                      className="h-24 w-full object-cover rounded-lg"
                    />

                    {/* REMOVE BUTTON */}
                    <button
                      onClick={() =>
                        setImageFiles((prev) =>
                          prev.filter((_, index) => index !== i),
                        )
                      }
                      className="
            absolute top-1 right-1
            h-6 w-6
            flex items-center justify-center
            bg-black/70 text-white
            rounded-full
            opacity-0 group-hover:opacity-100
            transition
          "
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}

                {/* Existing Images (Edit Mode) */}
                {existingImages.map((img, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={img}
                      className="h-24 w-full object-cover rounded-lg"
                    />

                    {/* REMOVE BUTTON */}
                    <button
                      onClick={() =>
                        setExistingImages((prev) =>
                          prev.filter((_, index) => index !== i),
                        )
                      }
                      className="
            absolute top-1 right-1
            h-6 w-6
            flex items-center justify-center
            bg-black/70 text-white
            rounded-full
            opacity-0 group-hover:opacity-100
            transition
          "
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
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
                  ? "Update Portfolio"
                  : "Create Portfolio"
            }
          />
        </div>
      </div>
    </div>
  );
}
