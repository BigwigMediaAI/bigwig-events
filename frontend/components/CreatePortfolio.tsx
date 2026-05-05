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

export default function PortfolioModal({
  initialData,
  onClose,
  onSuccess,
}: Props) {
  const [title, setTitle] = useState("");

  const [category, setCategory] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [existingImage, setExistingImage] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  /* Prefill */
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);

      setCategory(initialData.category);

      setExistingImage(initialData.image || null);
    }
  }, [initialData]);

  /* Submit */
  const handleSubmit = async () => {
    if (!title.trim() || !category.trim()) {
      alert("Title and category are required");

      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", title);

      formData.append("category", category);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const url = initialData
        ? `${process.env.NEXT_PUBLIC_API_BASE}/portfolio/${initialData._id}`
        : `${process.env.NEXT_PUBLIC_API_BASE}/portfolio`;

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
      alert(err instanceof Error ? err.message : "Failed to save portfolio");
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
          {/* Title */}
          <div>
            <label className="text-xs uppercase tracking-[2px] text-[var(--muted)] mb-2 block">
              Title
            </label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Event title"
              className="
                w-full h-12 px-4
                border border-[var(--border)]
                bg-[var(--white)]
                text-[var(--text)]
                outline-none
                focus:border-[var(--primary)]
              "
            />
          </div>

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

          {/* Upload */}
          <div>
            <label className="text-xs uppercase tracking-[2px] text-[var(--muted)] mb-3 block">
              Portfolio Image
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
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : existingImage ? (
                <img
                  src={existingImage}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <>
                  <ImageIcon size={24} className="text-[var(--muted)] mb-2" />

                  <p className="text-sm text-[var(--text-light)]">
                    Upload portfolio image
                  </p>

                  <p className="text-xs text-[var(--muted)] mt-1">JPG or PNG</p>
                </>
              )}

              <input
                id="portfolio-image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              />
            </label>
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
