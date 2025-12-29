"use client";

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (nextPage: number) => void;
}) {
  if (totalPages <= 1) return null;

  const canPrev = page > 1;
  const canNext = page < totalPages;

  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        type="button"
        className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-text disabled:opacity-40"
        disabled={!canPrev}
        onClick={() => onPageChange(page - 1)}
      >
        Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          className={
            p === page
              ? "px-3 py-2 rounded-lg border border-accent-teal/30 bg-accent-teal/10 text-sm font-semibold text-accent-teal"
              : "px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-text hover:bg-gray-50"
          }
          aria-current={p === page ? "page" : undefined}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-text disabled:opacity-40"
        disabled={!canNext}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </nav>
  );
}
