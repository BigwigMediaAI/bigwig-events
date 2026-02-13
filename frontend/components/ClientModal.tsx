"use client";

import { X, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => Promise<void>;
  initialData?: {
    name: string;
    image?: string;
  };
}

interface ClientInput {
  name: string;
  image: File | null;
  preview?: string;
}

const ClientModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: ClientModalProps) => {
  const [clients, setClients] = useState<ClientInput[]>([
    { name: "", image: null },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ================= INITIALIZE ================= */
  useEffect(() => {
    if (initialData) {
      setClients([
        {
          name: initialData.name,
          image: null,
          preview: initialData.image,
        },
      ]);
    } else {
      setClients([{ name: "", image: null }]);
    }

    setError("");
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  /* ================= ADD FIELD ================= */
  const addClientField = () => {
    setClients((prev) => [...prev, { name: "", image: null }]);
  };

  /* ================= REMOVE FIELD ================= */
  const removeClientField = (index: number) => {
    setClients((prev) => prev.filter((_, i) => i !== index));
  };

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (
    index: number,
    field: "name" | "image",
    value: string | File | null,
  ) => {
    const updated = [...clients];
    if (field === "name") {
      updated[index].name = value as string;
    } else {
      updated[index].image = value as File;
      updated[index].preview = value
        ? URL.createObjectURL(value as File)
        : undefined;
    }
    setClients(updated);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const formData = new FormData();

      clients.forEach((client, index) => {
        if (!client.name.trim()) {
          throw new Error("All client names are required");
        }

        formData.append("names", client.name.trim());

        // 🔴 Require image only for CREATE
        if (!initialData && !client.image) {
          throw new Error("All client images are required");
        }

        if (client.image) {
          formData.append("images", client.image);
        }
      });

      await onSubmit(formData);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4 overflow-y-auto">
      <div className="bg-[var(--bg)] border border-white/10 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl my-10">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-[var(--white)]">
            {initialData ? "Edit Client" : "Create Client(s)"}
          </h2>

          <button
            onClick={onClose}
            className="text-[var(--muted)] hover:text-[var(--secondary)] transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* BODY */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-6">
          {error && (
            <p className="text-sm text-red-400 bg-red-400/10 px-3 py-2 rounded">
              {error}
            </p>
          )}

          {clients.map((client, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-4 space-y-4 bg-black/30 backdrop-blur-sm"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm text-[var(--muted)]">
                  Client {index + 1}
                </h3>

                {!initialData && clients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeClientField(index)}
                    className="text-red-500 hover:text-red-400 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              {/* NAME */}
              <input
                value={client.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                placeholder="Client name"
                className="
                w-full
                bg-black/40
                border border-white/10
                rounded-lg px-3 py-2
                text-[var(--white)]
                placeholder-[var(--muted)]
                focus:outline-none
                focus:ring-1 focus:ring-[var(--secondary)]
                transition
              "
              />

              {/* IMAGE */}
              {!initialData && (
                <label
                  className="
                  flex flex-col items-center justify-center
                  w-full h-28
                  border-2 border-dashed border-white/10
                  rounded-xl cursor-pointer
                  bg-black/40
                  hover:border-[var(--secondary)]
                  transition
                "
                >
                  {client.preview ? (
                    <img src={client.preview} className="h-16 object-contain" />
                  ) : (
                    <span className="text-sm text-[var(--muted)]">
                      Upload logo
                    </span>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleChange(index, "image", e.target.files?.[0] || null)
                    }
                  />
                </label>
              )}
            </div>
          ))}

          {/* ADD BUTTON */}
          {!initialData && (
            <button
              type="button"
              onClick={addClientField}
              className="
              flex items-center gap-2 text-sm
              text-[var(--muted)]
              hover:text-[var(--secondary)]
              transition
            "
            >
              <Plus size={16} />
              Add Another Client
            </button>
          )}

          {/* FOOTER */}
          <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="
              px-4 py-2 rounded-lg text-sm
              text-[var(--muted)]
              border border-white/10
              hover:border-[var(--secondary)]
              hover:text-[var(--secondary)]
              transition
            "
            >
              Cancel
            </button>

            <Button
              text={loading ? "Saving..." : "Save"}
              type="submit"
              className="bg-[var(--secondary)] text-black hover:opacity-90"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientModal;
