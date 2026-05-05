"use client";

import TestimonialModal from "@/components/CreateTestimonial";

import { Eye, Trash2, Plus, X, Pencil, MessageSquare } from "lucide-react";

import { useEffect, useState } from "react";

interface Testimonial {
  _id: string;
  name: string;
  message: string;
  image?: string;
  designation?: string;
  isActive: boolean;
  createdAt: string;
}

const ITEMS_PER_PAGE = 10;

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const [selected, setSelected] = useState<Testimonial | null>(null);

  const [showModal, setShowModal] = useState(false);

  const [editData, setEditData] = useState<Testimonial | null>(null);

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  /* Fetch */
  const fetchTestimonials = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/testimonial`,
        {
          cache: "no-store",
        },
      );

      const data = await res.json();

      setTestimonials(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  /* Delete */
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/testimonial/${id}`, {
      method: "DELETE",
    });

    setTestimonials((prev) => prev.filter((item) => item._id !== id));
  };

  /* Pagination */
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const visibleItems = testimonials.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="uppercase tracking-[4px] text-xs text-[var(--primary)] mb-2">
            Admin Panel
          </p>

          <h1 className="font-serif text-4xl text-[var(--text)]">
            Testimonials
          </h1>
        </div>

        <button
          onClick={() => {
            setEditData(null);

            setShowModal(true);
          }}
          className="
            h-11 px-6
            bg-[var(--primary)]
            text-white
            rounded-xl
            flex items-center gap-2
            hover:bg-[var(--primary-dark)]
          "
        >
          <Plus size={16} />
          Add Testimonial
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex flex-col items-center justify-center h-[300px]">
          <div className="w-10 h-10 border-4 border-[var(--border)] border-t-[var(--primary)] rounded-full animate-spin mb-4" />

          <p className="text-[var(--text-light)]">Loading...</p>
        </div>
      )}

      {/* Empty */}
      {!loading && visibleItems.length === 0 && (
        <div className="bg-[var(--white)] border border-[var(--border)] rounded-2xl p-12 text-center">
          <MessageSquare
            size={32}
            className="mx-auto text-[var(--muted)] mb-4"
          />

          <h3 className="font-serif text-2xl text-[var(--text)]">
            No Testimonials
          </h3>
        </div>
      )}

      {/* Table */}
      {!loading && visibleItems.length > 0 && (
        <>
          <div className="overflow-x-auto bg-[var(--white)] border border-[var(--border)] rounded-2xl">
            <table className="w-full">
              <thead className="bg-[var(--bg-secondary)]">
                <tr>
                  <th className="px-5 py-4 text-left">Client</th>

                  <th className="px-5 py-4 text-left">Message</th>

                  <th className="px-5 py-4 text-center">Status</th>

                  <th className="px-5 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {visibleItems.map((item) => (
                  <tr
                    key={item._id}
                    className="border-t border-[var(--border)] hover:bg-[var(--bg-secondary)]"
                  >
                    {/* Client */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-[var(--bg-secondary)] flex items-center justify-center">
                          {item.image ? (
                            <img
                              src={item.image}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="font-semibold text-[var(--primary)]">
                              {item.name.charAt(0).toUpperCase()}
                            </span>
                          )}
                        </div>

                        <div>
                          <p className="font-medium text-[var(--text)]">
                            {item.name}
                          </p>

                          {item.designation && (
                            <p className="text-xs text-[var(--muted)]">
                              {item.designation}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Message */}
                    <td className="px-5 py-4 text-[var(--text-light)]">
                      <div className="line-clamp-2 max-w-md">
                        {item.message}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4 text-center">
                      <span
                        className={`
                              px-3 py-1 rounded-full text-xs font-medium
                              ${
                                item.isActive
                                  ? "bg-green-50 text-green-700"
                                  : "bg-red-50 text-red-600"
                              }
                            `}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => setSelected(item)}
                          className="text-blue-500"
                        >
                          <Eye size={18} />
                        </button>

                        <button
                          onClick={() => {
                            setEditData(item);

                            setShowModal(true);
                          }}
                          className="text-amber-500"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => handleDelete(item._id)}
                          className="text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-end mt-8 gap-3">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="
                    h-10 px-5
                    border border-[var(--border)]
                    text-[var(--text-light)]
                    disabled:opacity-40
                  "
              >
                Prev
              </button>

              <div className="h-10 px-5 flex items-center text-[var(--text)]">
                {currentPage}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="
                    h-10 px-5
                    border border-[var(--border)]
                    text-[var(--text-light)]
                    disabled:opacity-40
                  "
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {/* View Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-[var(--white)] border border-[var(--border)] rounded-2xl w-full max-w-xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-[var(--border)]">
              <h2 className="font-serif text-2xl text-[var(--text)]">
                {selected.name}
              </h2>

              <button onClick={() => setSelected(null)}>
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <p className="text-[var(--text-light)] leading-8">
                {selected.message}
              </p>

              <p className="text-sm text-[var(--muted)]">
                Status: {selected.isActive ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Create / Edit Modal */}
      {showModal && (
        <TestimonialModal
          initialData={editData}
          onClose={() => setShowModal(false)}
          onSuccess={fetchTestimonials}
        />
      )}
    </div>
  );
}
