"use client";

import PortfolioModal from "@/components/CreatePortfolio";

import { Trash2, Plus, Pencil, Image as ImageIcon } from "lucide-react";

import { useEffect, useState } from "react";

interface Portfolio {
  _id: string;
  title: string;
  category: string;
  image: string;
  createdAt: string;
}

const ITEMS_PER_PAGE = 10;

export default function AdminPortfolio() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  const [showModal, setShowModal] = useState(false);

  const [editData, setEditData] = useState<Portfolio | null>(null);

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  /* Fetch */
  const fetchPortfolio = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/portfolio`, {
        cache: "no-store",
      });

      const result = await res.json();

      if (result.success) {
        setPortfolios(result.data);
      }
    } catch (error) {
      console.error("Portfolio error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  /* Delete */
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this portfolio?")) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/portfolio/${id}`, {
      method: "DELETE",
    });

    setPortfolios((prev) => prev.filter((item) => item._id !== id));
  };

  /* Pagination */
  const totalPages = Math.ceil(portfolios.length / ITEMS_PER_PAGE);

  const visibleItems = portfolios.slice(
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

          <h1 className="font-serif text-4xl text-[var(--text)]">Portfolio</h1>
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
            transition
          "
        >
          <Plus size={16} />
          Add Portfolio
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex flex-col items-center justify-center h-[300px]">
          <div className="w-10 h-10 border-4 border-[var(--border)] border-t-[var(--primary)] rounded-full animate-spin mb-4" />

          <p className="text-[var(--text-light)]">Loading portfolio...</p>
        </div>
      )}

      {/* Empty */}
      {!loading && portfolios.length === 0 && (
        <div className="bg-[var(--white)] border border-[var(--border)] rounded-2xl p-12 text-center">
          <ImageIcon size={34} className="mx-auto text-[var(--muted)] mb-4" />

          <h3 className="font-serif text-2xl text-[var(--text)] mb-2">
            No Portfolio Found
          </h3>

          <p className="text-[var(--text-light)]">
            Create your first portfolio item.
          </p>
        </div>
      )}

      {/* Content */}
      {!loading && portfolios.length > 0 && (
        <>
          {/* Mobile */}
          <div className="md:hidden space-y-4">
            {visibleItems.map((item) => (
              <div
                key={item._id}
                className="
                      bg-[var(--white)]
                      border border-[var(--border)]
                      rounded-2xl
                      p-4
                    "
              >
                <img
                  src={item.image}
                  className="w-full h-44 object-cover rounded-xl mb-4"
                />

                <h3 className="font-semibold text-[var(--text)]">
                  {item.title}
                </h3>

                <p className="text-sm text-[var(--muted)] mt-1">
                  {item.category}
                </p>

                <div className="flex justify-end gap-4 mt-4">
                  <button
                    onClick={() => {
                      setEditData(item);

                      setShowModal(true);
                    }}
                    className="text-blue-500"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:block overflow-x-auto bg-[var(--white)] border border-[var(--border)] rounded-2xl">
            <table className="w-full">
              <thead className="bg-[var(--bg-secondary)]">
                <tr>
                  <th className="px-5 py-4 text-left">Image</th>

                  <th className="px-5 py-4 text-left">Title</th>

                  <th className="px-5 py-4 text-left">Category</th>

                  <th className="px-5 py-4 text-left">Created</th>

                  <th className="px-5 py-4 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {visibleItems.map((item) => (
                  <tr
                    key={item._id}
                    className="border-t border-[var(--border)] hover:bg-[var(--bg-secondary)]"
                  >
                    <td className="px-5 py-4">
                      <img
                        src={item.image}
                        className="h-12 w-20 object-cover rounded-lg"
                      />
                    </td>

                    <td className="px-5 py-4 text-[var(--text)] font-medium">
                      {item.title}
                    </td>

                    <td className="px-5 py-4 text-[var(--text-light)]">
                      {item.category}
                    </td>

                    <td className="px-5 py-4 text-[var(--muted)]">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex gap-4">
                        <button
                          onClick={() => {
                            setEditData(item);

                            setShowModal(true);
                          }}
                          className="text-blue-500"
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

      {/* Modal */}
      {showModal && (
        <PortfolioModal
          initialData={editData}
          onClose={() => setShowModal(false)}
          onSuccess={fetchPortfolio}
        />
      )}
    </div>
  );
}
