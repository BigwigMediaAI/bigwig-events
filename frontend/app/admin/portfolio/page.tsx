"use client";

import PortfolioModal from "@/components/CreatePortfolio";
import { Eye, Trash2, Plus, X, Pencil, Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Portfolio {
  _id: string;
  title: string;
  category: string;
  image: string;
  createdAt: string;
}

const ITEMS_PER_PAGE = 10;

const AdminPortfolio = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState<Portfolio | null>(null);

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  /* ================= FETCH ================= */
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
    } catch (err) {
      console.error("Failed to fetch portfolio", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  /* ================= DELETE ================= */
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this portfolio permanently?")) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/portfolio/${id}`, {
      method: "DELETE",
    });

    setPortfolios((prev) => prev.filter((p) => p._id !== id));
  };

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(portfolios.length / ITEMS_PER_PAGE);
  const visibleItems = portfolios.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="h-screen bg-[var(--bg)] text-[var(--white)] flex flex-col">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-[var(--bg)] border-b border-white/10">
        <div className="p-6 flex justify-between">
          <h1 className="text-3xl font-bold">Portfolio</h1>

          <button
            onClick={() => {
              setEditData(null);
              setShowModal(true);
            }}
            className="
              border border-white/10
              hover:border-[var(--secondary)]
              hover:text-[var(--secondary)]
              text-[var(--white)]
              px-4 py-2
              rounded-full
              flex items-center gap-2
              font-semibold
              transition
            "
          >
            <Plus size={18} /> Add Portfolio
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {loading ? (
          /* ================= LOADING ================= */
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
            <div className="w-10 h-10 border-4 border-gray-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm tracking-wide">Loading portfolio…</p>
          </div>
        ) : portfolios.length === 0 ? (
          /* ================= EMPTY ================= */
          <div className="flex flex-col items-center justify-center h-[60vh] text-center text-gray-400">
            <div className="text-5xl mb-4">🖼️</div>
            <h3 className="text-lg font-semibold text-gray-300">
              No Portfolio Found
            </h3>
            <p className="text-sm max-w-sm mt-2">
              You haven’t added any portfolio items yet.
            </p>
          </div>
        ) : (
          <>
            {/* ================= MOBILE CARDS ================= */}
            <div className="md:hidden space-y-4">
              {visibleItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-[#111] border border-gray-700 rounded-xl p-4 space-y-3"
                >
                  <img
                    src={item.image}
                    className="w-full h-40 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.category}</p>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => {
                        setEditData(item);
                        setShowModal(true);
                      }}
                      className="text-blue-500 hover:text-blue-400"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border border-gray-700 text-sm">
                <thead className="bg-[#1e1e1e]">
                  <tr>
                    <th className="px-4 py-3 text-left">Image</th>
                    <th className="px-4 py-3 text-left">Title</th>
                    <th className="px-4 py-3 text-left">Category</th>
                    <th className="px-4 py-3 text-left">Created</th>
                    <th className="px-4 py-3 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {visibleItems.map((item) => (
                    <tr
                      key={item._id}
                      className="even:bg-[#111] hover:bg-[#222]"
                    >
                      <td className="px-4 py-3">
                        <img
                          src={item.image}
                          className="h-12 w-20 object-cover rounded"
                        />
                      </td>

                      <td className="px-4 py-3 font-medium">{item.title}</td>

                      <td className="px-4 py-3 text-gray-400">
                        {item.category}
                      </td>

                      <td className="px-4 py-3 text-gray-400">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-3 flex gap-4">
                        <button
                          onClick={() => {
                            setEditData(item);
                            setShowModal(true);
                          }}
                          className="text-blue-500 hover:text-blue-400"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => handleDelete(item._id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="flex justify-end mt-6 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="px-3 py-1 bg-gray-800 rounded">{currentPage}</span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* CREATE + EDIT MODAL */}
      {showModal && (
        <PortfolioModal
          initialData={editData}
          onClose={() => setShowModal(false)}
          onSuccess={fetchPortfolio}
        />
      )}
    </div>
  );
};

export default AdminPortfolio;
