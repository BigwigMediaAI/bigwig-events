"use client";

import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface LeadRequest {
  _id: string;
  name: string;
  phone: string;
  email: string;
  eventType?: string;
  eventDate?: string;
  eventLocation?: string;
  message?: string;
  marked?: boolean;
  createdAt: string;
}

const ITEMS_PER_PAGE = 20;

export default function AdminLead() {
  const [contacts, setContacts] = useState<LeadRequest[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<LeadRequest[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  /* Fetch */
  useEffect(() => {
    setLoading(true);

    fetch(`${API_BASE}/lead`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: LeadRequest, b: LeadRequest) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );

        setContacts(sorted);
        setFilteredContacts(sorted);
      })
      .catch((err) => console.error("Lead Error:", err))
      .finally(() => setLoading(false));
  }, []);

  /* Filter */
  useEffect(() => {
    if (!selectedDate) {
      setFilteredContacts(contacts);
      setCurrentPage(1);
      return;
    }

    const filtered = contacts.filter((c) =>
      new Date(c.createdAt).toISOString().startsWith(selectedDate),
    );

    setFilteredContacts(filtered);
    setCurrentPage(1);
  }, [selectedDate, contacts]);

  const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);

  const currentContacts = filteredContacts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  /* Mark */
  const handleMark = async (id: string, marked: boolean) => {
    try {
      await fetch(`${API_BASE}/lead/${id}/mark`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          marked,
        }),
      });

      setContacts((prev) =>
        prev.map((lead) =>
          lead._id === id
            ? {
                ...lead,
                marked,
              }
            : lead,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  /* Delete */
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this lead?")) return;

    try {
      await fetch(`${API_BASE}/lead/${id}`, {
        method: "DELETE",
      });

      setContacts((prev) => prev.filter((lead) => lead._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="uppercase tracking-[4px] text-xs text-[var(--primary)] mb-2">
            Admin Panel
          </p>

          <h1 className="font-serif text-4xl text-[var(--text)]">Leads</h1>
        </div>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="
            h-11 px-4
            border border-[var(--border)]
            bg-[var(--white)]
            text-[var(--text)]
            outline-none
          "
        />
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex flex-col items-center justify-center h-[300px]">
          <div className="w-10 h-10 border-4 border-[var(--border)] border-t-[var(--primary)] rounded-full animate-spin mb-4" />

          <p className="text-[var(--text-light)]">Loading leads...</p>
        </div>
      )}

      {/* Empty */}
      {!loading && filteredContacts.length === 0 && (
        <div className="bg-[var(--white)] border border-[var(--border)] rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-serif text-[var(--text)] mb-3">
            No Leads Found
          </h3>

          <p className="text-[var(--text-light)]">
            New leads will appear here.
          </p>
        </div>
      )}

      {/* Leads */}
      {!loading && filteredContacts.length > 0 && (
        <>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {currentContacts.map((contact) => (
              <div
                key={contact._id}
                className="
                      bg-[var(--white)]
                      border border-[var(--border)]
                      rounded-2xl
                      p-6
                      shadow-sm
                    "
              >
                {/* Top */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-xl text-[var(--text)]">
                      {contact.name}
                    </h3>

                    <p className="text-sm text-[var(--muted)] mt-1">
                      {new Date(contact.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-[var(--muted)]">Email:</span>{" "}
                    <span className="text-[var(--text)]">{contact.email}</span>
                  </p>

                  <p>
                    <span className="text-[var(--muted)]">Phone:</span>{" "}
                    {contact.phone}
                  </p>

                  <p>
                    <span className="text-[var(--muted)]">Event:</span>{" "}
                    {contact.eventType || "—"}
                  </p>

                  <p>
                    <span className="text-[var(--muted)]">Location:</span>{" "}
                    {contact.eventLocation || "—"}
                  </p>

                  <p>
                    <span className="text-[var(--muted)]">Message:</span>{" "}
                    {contact.message || "—"}
                  </p>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[var(--border)]">
                  <input
                    type="checkbox"
                    checked={contact.marked || false}
                    onChange={(e) => handleMark(contact._id, e.target.checked)}
                    className="accent-[var(--primary)]"
                  />

                  <span className="text-sm text-[var(--text-light)]">
                    Mark as done
                  </span>
                </div>
              </div>
            ))}
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
                    hover:border-[var(--primary)]
                    hover:text-[var(--primary)]
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
                    hover:border-[var(--primary)]
                    hover:text-[var(--primary)]
                    disabled:opacity-40
                  "
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
